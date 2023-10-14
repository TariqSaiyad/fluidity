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

export function getFontSizeAt(x: number, data: FluidityForm | null) {
  if (!data) return 0;

  const { equation } = getEquation(data);
  const y = equation(x);

  return clamp(y, data.minFont, data.maxFont);
}

export function getEquation(data: FluidityForm) {
  const { maxFont, maxScreen, minFont, minScreen } = data;

  const slope = (maxFont - minFont) / (maxScreen - minScreen);
  const yIntersection = -minScreen * slope + minFont;

  return {
    equation: (x: number) => slope * x + yIntersection,
    yIntersection,
    slope,
  };
}

export function getClampCSS(data: FluidityForm | null) {
  if (!data) return "";

  const { slope, yIntersection } = getEquation(data);

  return `clamp(${toRem(data.minFont)}rem, ${rounded(
    toRem(yIntersection)
  )}rem + ${rounded(slope * 100)}vw, ${toRem(data.maxFont)}rem)`;
}
