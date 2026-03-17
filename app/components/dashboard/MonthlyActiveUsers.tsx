"use client";

import { useMemo } from "react";
import Image from "next/image";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CustomSelect from "../CustomSelect";
import { useDashboardStore } from "@/app/store/zustand/useDashboardStore";
import type { CountryData } from "@/app/store/zustand/useDashboardStore";

const COUNTRIES: CountryData[] = [
  { id: "de", name: "Germany", flag: "https://flagcdn.com/w80/de.png", accounts: 98, revenue: "€3,240,100", x: 265, y: 58 },
  { id: "au", name: "Australia", flag: "https://flagcdn.com/w80/au.png", accounts: 42, revenue: "€1,120,500", x: 455, y: 155 },
  { id: "pk", name: "Pakistan", flag: "https://flagcdn.com/w80/pk.png", accounts: 67, revenue: "€1,890,230", x: 365, y: 85 },
  { id: "ca", name: "Canada", flag: "https://flagcdn.com/w80/ca.png", accounts: 54, revenue: "€1,650,400", x: 95, y: 48 },
  { id: "br", name: "Brazil", flag: "https://flagcdn.com/w80/br.png", accounts: 45, revenue: "€1,223,000", x: 155, y: 140 },
];

const DONUT_DATA = [
  { name: "Active", value: 70 },
  { name: "Inactive", value: 30 },
];

const DONUT_COLORS = ["#22BFFF", "#E2E8F0"];

const VB_W = 560;
const VB_H = 220;

type Point = [number, number];

const CONTINENT_POLYS: Record<string, Point[][]> = {
  northAmerica: [
    [[30, 15], [130, 10], [145, 25], [140, 55], [115, 70], [95, 85], [70, 95], [55, 90], [30, 70], [25, 40]],
    [[95, 85], [130, 80], [140, 95], [130, 105], [100, 100]],
  ],
  southAmerica: [
    [[120, 110], [165, 105], [180, 115], [185, 140], [175, 165], [160, 185], [140, 195], [125, 185], [115, 160], [110, 135]],
  ],
  europe: [
    [[235, 20], [290, 15], [305, 25], [300, 50], [285, 60], [260, 65], [240, 55], [230, 40]],
  ],
  africa: [
    [[240, 70], [290, 65], [305, 75], [310, 100], [305, 130], [290, 155], [270, 165], [250, 160], [235, 140], [230, 110], [232, 85]],
  ],
  asia: [
    [[300, 15], [420, 10], [460, 20], [475, 35], [470, 60], [450, 80], [420, 95], [390, 100], [360, 95], [330, 85], [310, 70], [300, 50], [295, 30]],
    [[370, 100], [410, 100], [425, 115], [415, 130], [390, 135], [370, 125], [365, 110]],
  ],
  oceania: [
    [[425, 135], [490, 130], [510, 140], [515, 160], [500, 175], [470, 180], [445, 175], [430, 160], [425, 145]],
    [[520, 155], [535, 150], [540, 160], [535, 170], [520, 168]],
  ],
};

const isInsidePolygon = (px: number, py: number, polygon: Point[]): boolean => {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0];
    const yi = polygon[i][1];
    const xj = polygon[j][0];
    const yj = polygon[j][1];
    const intersect = yi > py !== yj > py && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
};

const isLand = (px: number, py: number): boolean => {
  for (const polys of Object.values(CONTINENT_POLYS)) {
    for (const poly of polys) {
      if (isInsidePolygon(px, py, poly)) return true;
    }
  }
  return false;
};

const buildHexGrid = (): Array<{ cx: number; cy: number }> => {
  const dots: Array<{ cx: number; cy: number }> = [];
  const sp = 6.5;
  const rowH = sp * 0.866;
  const cols = Math.ceil(VB_W / sp) + 1;
  const rows = Math.ceil(VB_H / rowH) + 1;

  for (let r = 0; r < rows; r++) {
    const offsetX = r % 2 === 0 ? 0 : sp / 2;
    for (let c = 0; c < cols; c++) {
      const cx = c * sp + offsetX;
      const cy = r * rowH;
      if (cx <= VB_W && cy <= VB_H && isLand(cx, cy)) {
        dots.push({ cx, cy });
      }
    }
  }
  return dots;
};

let cachedDots: Array<{ cx: number; cy: number }> | null = null;
const getHexDots = () => {
  if (!cachedDots) cachedDots = buildHexGrid();
  return cachedDots;
};

const MonthlyActiveUsers = () => {
  const { selectedCountry, timeFilter, toggleCountry, setTimeFilter } = useDashboardStore();

  const hexDots = useMemo(() => getHexDots(), []);

  const selected = COUNTRIES.find((c) => c.id === selectedCountry);

  return (
    <div>
      <div className="sm:px-6 px-4 sm:pt-6 pt-4 pb-4 rounded-2xl h-full bg-white shadow-48xl">
        <div className="w-full">
          <div className="flex items-start justify-between">
            <div>
              <p className="sm:text-base text-sm font-medium leading-6 text-gray-1400 pb-1">
                Monthly Active Users
              </p>
              <div className="flex items-center gap-1.75 pb-1">
                <p className="text-blue-1200 sm:text-3xl text-2xl font-semibold leading-9 -tracking-[0.75px]">
                  72.8K
                </p>
                <p className="text-sm font-medium leading-5 text-green-5000 flex items-center gap-1">
                  <span>
                    <Image src="/images/up-icon.svg" width={12} height={12} alt="" />
                  </span>
                  2.1%
                </p>
              </div>
              <small className="text-grey-5000 text-xs font-normal leading-4 block">
                128 Months
              </small>
            </div>
            <div>
              <CustomSelect
                className="h-9 text-gray-1400 pr-7"
                value={timeFilter}
                onChange={(value: string) => setTimeFilter(value)}
                options={[
                  { label: "This Month", value: "This Month" },
                  { label: "Last Month", value: "Last Month" },
                  { label: "This Quarter", value: "This Quarter" },
                  { label: "This Year", value: "This Year" },
                ]}
              />
            </div>
          </div>

          <div className="relative mt-4 overflow-visible min-h-[280px]">
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {hexDots.map((dot, i) => (
                <circle
                  key={i}
                  cx={dot.cx}
                  cy={dot.cy}
                  r={2.4}
                  fill="#CBD5E1"
                  opacity={0.7}
                />
              ))}

              {COUNTRIES.map((country) => (
                <g key={country.id}>
                  <circle
                    cx={country.x}
                    cy={country.y}
                    r={12}
                    fill="transparent"
                    className="cursor-pointer"
                    onClick={() => toggleCountry(country.id)}
                  />
                  <circle
                    cx={country.x}
                    cy={country.y}
                    r={selectedCountry === country.id ? 5 : 3.5}
                    fill="#3B82F6"
                    stroke="#fff"
                    strokeWidth={2}
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => toggleCountry(country.id)}
                  />
                  {selectedCountry === country.id && (
                    <circle
                      cx={country.x}
                      cy={country.y}
                      r={10}
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth={1}
                      opacity={0.4}
                    >
                      <animate attributeName="r" from="6" to="14" dur="1.2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.5" to="0" dur="1.2s" repeatCount="indefinite" />
                    </circle>
                  )}
                </g>
              ))}
            </svg>

            {COUNTRIES.map((country) => (
              <div
                key={country.id}
                className="absolute pointer-events-none"
                style={{
                  left: `${(country.x / VB_W) * 100}%`,
                  top: `${(country.y / VB_H) * 100}%`,
                  transform: "translate(-50%, calc(-100% - 12px))",
                }}
              >
                <div
                  className={`bg-white rounded-lg shadow-md px-3 py-2 flex items-center gap-2.5 whitespace-nowrap border pointer-events-auto cursor-pointer transition-all duration-200 ${
                    selectedCountry === country.id
                      ? "border-blue-400 shadow-lg scale-105"
                      : "border-gray-100 hover:border-gray-300 hover:shadow-lg"
                  }`}
                  onClick={() => toggleCountry(country.id)}
                >
                  <span className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-100 shrink-0">
                    <Image
                      src={country.flag}
                      width={32}
                      height={32}
                      alt={country.name}
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <span className="text-blue-1300 text-sm font-medium leading-5">{country.name}</span>
                </div>
              </div>
            ))}

            <div className="absolute left-0 bottom-0 bg-white rounded-xl shadow-lg sm:p-5 p-4 sm:w-[190px] w-[160px] border border-gray-100 transition-all duration-300">
              <div className="sm:w-[120px] sm:h-[120px] w-[100px] h-[100px] mx-auto relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={DONUT_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius="62%"
                      outerRadius="95%"
                      dataKey="value"
                      stroke="none"
                      startAngle={90}
                      endAngle={-270}
                    >
                      {DONUT_DATA.map((_, index) => (
                        <Cell key={index} fill={DONUT_COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-blue-100 rounded-lg sm:w-8 sm:h-8 w-6 h-6 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1.5" y="3.5" width="11" height="7.5" rx="1.5" stroke="#3B82F6" strokeWidth="1.3" />
                      <rect x="4" y="1.5" width="6" height="2.5" rx="0.75" stroke="#3B82F6" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                <h4 className="text-blue-1300 sm:text-xl text-lg font-bold leading-7">
                  {selected ? selected.revenue : "€9,124,230"}
                </h4>
                <p className="text-gray-1200 text-xs font-normal mt-0.5">
                  {selected ? `${selected.accounts} Accounts` : "306 Accounts"}
                </p>
                {selected && (
                  <p className="text-blue-500 text-[10px] font-medium mt-1">{selected.name}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyActiveUsers;