"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";

type Country = {
  name: string;
  value: number;
  lat: number;
  lng: number;
};

const countries: Country[] = [
  { name: "USA", value: 7500, lat: 37.0902, lng: -95.7129 },
  { name: "UK", value: 9200, lat: 55.3781, lng: -3.436 },
  { name: "Germany", value: 12400, lat: 51.1657, lng: 10.4515 },
  { name: "Pakistan", value: 8900, lat: 30.3753, lng: 69.3451 },
  { name: "India", value: 28500, lat: 20.5937, lng: 78.9629 },
  { name: "UAE", value: 6800, lat: 23.4241, lng: 53.8478 },
  { name: "Australia", value: 4200, lat: -25.2744, lng: 133.7751 },
];

export default function StudentGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = 600;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Label renderer
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(width, height);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0";
    mountRef.current.appendChild(labelRenderer.domElement);

    // Globe wireframe
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    const material = new THREE.MeshBasicMaterial({
      color: "#7aa6b8",
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });

    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Outer glow ring
    const glowGeometry = new THREE.SphereGeometry(1.65, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: "#8fd3ff",
      transparent: true,
      opacity: 0.2,
    });

    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Convert lat/lng to 3D position
    const latLngToVector3 = (lat: number, lng: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);

      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    // Add labels
    countries.forEach((country) => {
      const position = latLngToVector3(country.lat, country.lng, 1.6);

      const div = document.createElement("div");
      div.style.background = "white";
      div.style.padding = "4px 8px";
      div.style.borderRadius = "6px";
      div.style.fontSize = "12px";
      div.style.color = "#0b4f6c";
      div.style.boxShadow = "0 2px 6px rgba(0,0,0,0.15)";
      div.innerHTML = `${country.name} <strong>${country.value.toLocaleString()}</strong>`;

      const label = new CSS2DObject(div);
      label.position.copy(position);
      scene.add(label);
    });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002;
      glow.rotation.y += 0.002;
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      mountRef.current?.removeChild(labelRenderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-full flex justify-center">
      <div ref={mountRef} className="relative w-full max-w-[800px]" />

      {/* Legend */}
      <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-md text-sm">
        <h4 className="font-semibold mb-2">Student Flow</h4>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-[2px] bg-[#0b4f6c]" />
          High Volume
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-[2px] bg-gray-300]" />
          Low Volume
        </div>
      </div>
    </div>
  );
}