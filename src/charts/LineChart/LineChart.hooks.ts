import { useState, useEffect } from "react";
import { generateSkeletonRow } from "./LineChart.utils";

const SKELETON_ROW_COUNT = 10;
const SKELETON_INTERVAL_MS = 1500;

/**
 * Gera e anima dados fictícios para o estado skeleton do LineChart.
 * Os dados são regenerados a cada `SKELETON_INTERVAL_MS` ms para
 * criar o efeito de animação das linhas.
 */
export function useSkeletonData(): Record<string, unknown>[] {
  const [skeletonData, setSkeletonData] = useState<Record<string, unknown>[]>(
    () => Array.from({ length: SKELETON_ROW_COUNT }, generateSkeletonRow),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSkeletonData(
        Array.from({ length: SKELETON_ROW_COUNT }, generateSkeletonRow),
      );
    }, SKELETON_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return skeletonData;
}
