declare type AssertionFail = "AssertionFail";
declare type AssertionSuccess = "AssertionSuccess";
declare type ValuesOf<O extends Record<string, unknown>> = O[keyof O];
declare type AssertUniques<O extends Record<string, unknown>> = {
    [K in keyof O]: O[K] extends ValuesOf<Omit<O, K>> ? AssertionFail : AssertionSuccess;
}[keyof O] extends AssertionSuccess ? O : never;
declare type ReadonlyRecord<V = unknown> = {
    readonly [k: string]: V;
};
export declare const UniqueEnum: <M extends ReadonlyRecord<unknown>>(enumDict: AssertUniques<M>) => AssertUniques<M>;
export {};
