export function getFilter({
    grayscale,
    sepia,
    brightness,
    contrast,
    blur,
}: {
    grayscale: number
    sepia: number
    brightness: number
    contrast: number
    blur: number
}) {
    return {
        filter: `
      grayscale(${grayscale}%)
      sepia(${sepia}%)
      brightness(${brightness}%)
      contrast(${contrast}%)
      blur(${blur}px)
    `,
    }
}
