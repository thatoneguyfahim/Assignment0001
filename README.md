# Q1: What are some differences between interfaces and types in TypeScript?
Answer:
1.Interface is primarily designed to describe the shape of objects. 
  Type Alias can describe any type (primitive, union, intersection)
2. Type alias supports union types
   Interface does not support unions.
3. Type aliases can use mapped types, conditional types, and other advanced TypeScript features.
   Interfaces cannot use them.

# Q2: Explain the difference between any, unknown, and never types in TypeScript.
Answer:
1. Any: this type means parameter can be literally anything.
for example: let value: any; (here value can be anything from number to string or boolean etc)
2. unknown: unknown means when we arent sure of the output type or we dont know the output type, this is when we can use unknown data type
3. never: never in typescript values that may never happen. for example if an error message that never returns anything. 