import { size as rootSize } from "@yceffort/utils";
import size from "@yceffort/utils/size";
import isEmpty from "@yceffort/utils/isEmpty";
import toLowerCase from "@yceffort/utils/toLowerCase";
import toCamelCase from "@yceffort/utils/toCamelCase";

console.log(rootSize === size);

console.log(size([1, 2, 3]));

console.log(isEmpty([]));

console.log(toLowerCase("HELLO WORLD"));

console.log(toCamelCase("hello world"));
