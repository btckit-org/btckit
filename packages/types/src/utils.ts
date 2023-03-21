export type ValueOf<T> = T[keyof T];

export interface AllowAdditionaProperties {
  [x: string | number | symbol]: unknown;
}
