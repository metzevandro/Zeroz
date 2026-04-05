import { useState, useEffect } from "react";
import type { PieDataItem } from "./PieChart.types";
import { OTHERS_COLOR } from "./PieChart.utils";

const DURATION = 1800;

export function usePieSkeletonData(): PieDataItem[] {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = performance.now();
    let frame: number;

    const animate = (time: number) => {
      const elapsed = time - start;
      const p = (elapsed % DURATION) / DURATION;

      setProgress(p);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return buildSkeletonData(progress);
}

function buildSkeletonData(progress: number): PieDataItem[] {
  const total = 100;

  // ondas suaves
  const w1 = 0.5 + 0.5 * Math.sin(progress * 2 * Math.PI);
  const w2 = 0.5 + 0.5 * Math.sin(progress * 2 * Math.PI + 2);
  const w3 = 0.5 + 0.5 * Math.sin(progress * 2 * Math.PI + 4);

  const sum = w1 + w2 + w3;

  const values = [
    Math.round((w1 / sum) * total),
    Math.round((w2 / sum) * total),
    total - Math.round((w1 / sum) * total) - Math.round((w2 / sum) * total),
  ];

  const baseData: PieDataItem[] = [
    {
      quantity: values[0],
      keyName: "skeleton-a",
      fill: "var(--s-color-fill-default-light)",
    },
    {
      quantity: values[1],
      keyName: "skeleton-b",
      fill: "var(--s-color-fill-default)",
    },
    {
      quantity: values[2],
      keyName: "skeleton-c",
      fill: OTHERS_COLOR,
    },
  ];

  const shift = Math.floor(progress * baseData.length);
  return rotateArray(baseData, shift);
}

function rotateArray<T>(arr: T[], shift: number): T[] {
  const s = shift % arr.length;
  return [...arr.slice(s), ...arr.slice(0, s)];
}
