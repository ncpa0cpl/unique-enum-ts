type AssertionFail = "AssertionFail";
type AssertionSuccess = "AssertionSuccess";

type ValuesOf<O extends Record<string, unknown>> = O[keyof O];

type AssertUniques<O extends Record<string, unknown>> = {
  [K in keyof O]: O[K] extends ValuesOf<Omit<O, K>>
    ? AssertionFail
    : AssertionSuccess;
}[keyof O] extends AssertionSuccess
  ? O
  : never;

type ReadonlyRecord<V = unknown> = {
  readonly [k: string]: V;
};

export const UniqueEnum = <M extends ReadonlyRecord>(
  enumDict: AssertUniques<M>
): AssertUniques<M> => {
  return Object.freeze(enumDict as any);
};
