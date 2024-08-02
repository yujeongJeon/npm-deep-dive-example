import { toUpper } from "npm:rambda@8.6.0";

export default function toUpperCase(text: string): Lowercase<string> {
  return toUpper(text);
}
