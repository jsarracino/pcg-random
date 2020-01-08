export type PcgState = [number, number, number, number];

declare class PcgRandom {
  constructor(seedLo: number, seedHi?: number, incLo?: number, incHi?: number);

  setSeed(seedLo?: number, seedHi?: number, incLo?: number, incHi?: number) : void;

  
  getState() : PcgState;

  setState(state: PcgState) : void;

  integer(max?: number): number;
  
  number(): number;

}