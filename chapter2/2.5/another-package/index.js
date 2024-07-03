import sleep from "sleep";

async function main() {
  await sleep(1000);

  console.log("return 1");
  return 1;
}

main();
