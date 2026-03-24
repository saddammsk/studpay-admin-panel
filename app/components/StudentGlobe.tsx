"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
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

const GLOBE_RADIUS = 1.5;

function latLngToVec3(lat: number, lng: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

function buildArc(
  from: THREE.Vector3,
  to: THREE.Vector3,
  segments = 64,
  lift = 0.45
): THREE.BufferGeometry {
  const mid = from.clone().add(to).normalize().multiplyScalar(GLOBE_RADIUS + lift);
  const curve = new THREE.QuadraticBezierCurve3(from, mid, to);
  const points = curve.getPoints(segments);
  return new THREE.BufferGeometry().setFromPoints(points);
}

export default function StudentGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    const el = mountRef.current;
    const width = el.clientWidth || 800;
    const height = el.clientHeight || 600;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    el.appendChild(renderer.domElement);

    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(width, height);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0";
    labelRenderer.domElement.style.pointerEvents = "none";
    el.appendChild(labelRenderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.minDistance = 2.5;
    controls.maxDistance = 6;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.6;

    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64),
      new THREE.MeshBasicMaterial({ color: "#3d6b7a" })
    );
    scene.add(globe);

    const wireframe = new THREE.Mesh(
      new THREE.SphereGeometry(GLOBE_RADIUS + 0.003, 48, 48),
      new THREE.MeshBasicMaterial({
        color: "#6aabbd",
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      })
    );
    scene.add(wireframe);

    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(GLOBE_RADIUS + 0.18, 64, 64),
      new THREE.MeshBasicMaterial({
        color: "#a8dce8",
        transparent: true,
        opacity: 0.18,
        side: THREE.BackSide,
      })
    );
    scene.add(glow);

    countries.forEach((c) => {
      const pos = latLngToVec3(c.lat, c.lng, GLOBE_RADIUS + 0.02);

      const dot = new THREE.Mesh(
        new THREE.CircleGeometry(0.03, 32),
        new THREE.MeshBasicMaterial({ color: "#ffffff" })
      );
      dot.position.copy(pos);
      dot.lookAt(scene.position);
      scene.add(dot);

      const div = document.createElement("div");
      div.style.cssText = `
        background: rgba(255,255,255,0.92);
        padding: 3px 8px;
        border-radius: 6px;
        font-size: 12px;
        color: #0b4f6c;
        white-space: nowrap;
      `;
      div.innerHTML = `${c.name}: ${c.value.toLocaleString()}`;

      const label = new CSS2DObject(div);
      label.position.copy(latLngToVec3(c.lat, c.lng, GLOBE_RADIUS + 0.15));
      scene.add(label);
    });

    const pairs: [number, number][] = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ];

    pairs.forEach(([a, b]) => {
      const from = latLngToVec3(countries[a].lat, countries[a].lng, GLOBE_RADIUS);
      const to = latLngToVec3(countries[b].lat, countries[b].lng, GLOBE_RADIUS);

      const arc = new THREE.Line(
        buildArc(from, to),
        new THREE.LineBasicMaterial({ color: "#4dd9ec", transparent: true, opacity: 0.6 })
      );

      scene.add(arc);
    });

    el.addEventListener("mouseenter", () => (controls.autoRotate = false));
    el.addEventListener("mouseleave", () => (controls.autoRotate = autoRotate));

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight || 600;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      labelRenderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      if (el.contains(labelRenderer.domElement)) el.removeChild(labelRenderer.domElement);
    };
  }, [autoRotate]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden p-5">
    
   
      <div ref={mountRef} className="w-full" style={{ height: 560 }} />

    </div>
  );
}