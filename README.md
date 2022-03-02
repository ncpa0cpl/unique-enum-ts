# Unique Enum TS

#### Utility for creating Enum-like objects with unique values

## Usage

Define the enum:

```ts
import { UniqueEnum } from "unique-enum-ts";

const MyEnum = UniqueEnum({
  FOO: "FOO",
  BAR: "BAR",
} as const);

// OR
// Use the TS enum syntax and assert the values uniqueness with the UniqueEnum function

enum MyEnum {
  FOO = "FOO",
  BAR = "BAR",
}

UniqueEnum(MyEnum);
```

If you don't use the TS enums syntax, you will need to extract the enum type like this:

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

## Enum Uniqueness

Unique Enum does not do a uniqueness check at runtime. It only provides Typescript type checking on the enum values.

This means that the following declaration will throw an compile error (since the value "foo" is used twice):

```ts
import { UniqueEnum } from "unique-enum-ts";

const MyEnum = UniqueEnum({
  FOO: "foo",
  BAR: "bar",
  ANOTHER_FOO: "foo",
} as const);
```

However if the compilation error were to be ignored, this code will execute just fine, without any errors or warnings.
