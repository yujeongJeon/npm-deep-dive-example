import "core-js/modules/es.promise.js";
import "core-js/modules/es.object.to-string.js"; // 구형 브라우저에서 Object.prototype.toString() 동작이 상이할 위험을 방지

const asyncFunction = async () => {
  const result = await new Promise<number>((resolve) => {
    resolve(1000);
  });

  return result;
};

export { asyncFunction };
