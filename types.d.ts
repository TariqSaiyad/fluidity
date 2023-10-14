export {};

declare global {
  export interface FluidityForm {
    minScreen: number;
    maxScreen: number;
    minFont: number;
    maxFont: number;
  }

  export interface DataRecord {
    x: number;
    y: number;
  }
}
