import { sleep } from "./promise";
import { sum } from "./arrowFunction";
import CustomError from "./class";

async function main() {
  console.log(sum(1, 2));

  await sleep(3000);

  const customError = new CustomError({
    message: "This is Custom Error",
    errorCode: "500",
    stack: [],
  });

  customError.log();
}

main();
