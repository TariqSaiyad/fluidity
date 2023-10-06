import { REM } from "./constants";

export function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}

export function toRem(value: number) {
  return value / REM;
}

export function rounded(value: number, place = 4) {
  return parseFloat(value.toFixed(place));
}

export function getClampCSS(clampValue: string) {
  return `--fluid-scale: ${clampValue};`;
}

export function getFontSizeAt(x: number, data: FluidityForm | null) {
  if (!data) return 0;

  const { slope, yIntersection } = solveEquation(data);

  const y = slope * x + yIntersection;

  return clamp(y, data.minFont, data.maxFont);
}

export function solveEquation(data: FluidityForm) {
  const { maxFont, maxScreen, minFont, minScreen } = data;

  const slope = (maxFont - minFont) / (maxScreen - minScreen);
  const yIntersection = -1 * minScreen * slope + minFont;
  return {
    slope,
    yIntersection,
  };
}

export function getClampValue(data: FluidityForm | null) {
  if (!data) return "";

  const { slope, yIntersection } = solveEquation(data);

  return `clamp(${toRem(data.minFont)}rem, ${rounded(
    toRem(yIntersection)
  )}rem + ${rounded(slope * 100)}vw, ${toRem(data.maxFont)}rem)`;
}
