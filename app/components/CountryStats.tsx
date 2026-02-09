import React from "react";

// Define the type for a country item
interface Country {
     code: string;
     name: string;
     students: number;
     amount: number;
     progress: number; // 0-100
}

// Props for the component
interface CountryStatsProps {
     countries: Country[];
}

// Simple ProgressBar component
const ProgressBar: React.FC<{ value: number }> = ({ value }) => (
     <div className="w-full bg-gray-200 rounded h-2">
          <div
               className="bg-blue-500 h-2 rounded"
               style={{ width: `${value}%` }}
          />
     </div>
);

const CountryStats: React.FC<CountryStatsProps> = ({ countries }) => {
     return (
          <div className="space-y-4">
               {countries.map((country) => (
                    <div
                         key={country.code}
                         className="border border-gray-300 bg-white rounded-lg flex items-center justify-between p-4"
                    >
                         <div className="flex items-center gap-4">
                              <div className="w-12 h-8 rounded flex items-center justify-center flag-bg text-white text-sm leading-5">
                                   {country.code}
                              </div>
                              <div>
                                   <h6 className="text-base leading-6 text-black">{country.name}</h6>
                                   <p className="text-sm font-normal leading-5 text-gray-500">
                                        {country.students} students
                                   </p>
                              </div>
                         </div>
                         <div className="text-end w-full max-w-[128px]">
                              <h6 className="text-lg leading-7 text-black">€{country.amount.toLocaleString()}</h6>
                              <ProgressBar value={country.progress} />
                         </div>
                    </div>
               ))}
          </div>
     );
};

export default CountryStats;
