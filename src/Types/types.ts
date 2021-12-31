export type MesaurementUnit ="Milligram"|"Gram"|"Kilogram"|"Tone";
export interface Product{
    Name:string,
    Id: number,
    UnitPrice: number,
    Image?:string
    MesaurementUnit: MesaurementUnit
};