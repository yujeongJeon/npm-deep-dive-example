import { asyncFunction } from "./async";

class ClassA {
  async asyncMethod() {
    await asyncFunction();
  }
}

export { ClassA };
