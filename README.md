# Unique Enum TS

#### Utility for creating Enum-like objects with unique values

## Usage

Define the enum:

```ts
import { UniqueEnum } from "unique-enum-ts";

const MyEnum = UniqueEnum({
  FOO: "foo",
  BAR: "bar",
} as const);
```

Use the enum:

```ts
type MyEnumValues = typeof MyEnum[keyof typeof MyEnum];

function baz(myEnum: MyEnumValues) {
  switch (myEnum) {
    case MyEnum.FOO:
      // do something when myEnum === 'foo'
      break;
    case MyEnum.BAR:
      // do something when myEnum === 'bar'
      break;
  }
}
```

## Alternative Usage

Alternatively you can also use this utility to assert uniqueness of an actual enum:

```ts
import { UniqueEnum } from "unique-enum-ts";

enum MyEnum {
  FOO = "FOO",
  BAR = "BAR",
}

UniqueEnum(MyEnum);
```

This just like the previous example will give an compilation Error if all the enum values are not unique.

## Enum Uniqueness

Unique Enum TS does not do a uniqueness check at runtime. It only provides Typescript type checking on the enum values.

This means that the following declaration will throw an compile error:

```ts
import { UniqueEnum } from "unique-enum-ts";

const MyEnum = UniqueEnum({
  FOO: "foo",
  BAR: "bar",
  ANOTHER_FOO: "foo",
} as const);
```

However if the compilation error were to be ignored, this code will execute just fine, without errors or warnings.
