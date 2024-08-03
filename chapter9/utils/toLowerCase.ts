import { toLower } from "rambda";

export default function toLowerCase(text: string): Lowercase<string> {
  return toLower(text);
}
