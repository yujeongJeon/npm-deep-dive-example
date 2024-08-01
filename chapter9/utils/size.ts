import { isArrayLike } from "./internal";

export default function size(collection: unknown): number {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return collection.length;
  }

  const type = Object.prototype.toString.call(collection);
  if (type === "[object Map]" || type === "[object Set]") {
    return (collection as Map<unknown, unknown> | Set<unknown>).size;
  }

  if (typeof collection === "object") {
    return Object.keys(collection as object).length;
  }
  return 0;
}
