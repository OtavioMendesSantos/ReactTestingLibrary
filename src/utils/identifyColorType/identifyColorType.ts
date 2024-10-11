type CorTipo = "hex" | "rgb" | "rgba" | "hsl" | "hsla" | "unknown";
export const identifyColorType = (cor: string): CorTipo => {
  // Expressão regular para identificar HEX (com ou sem hash e em formatos curto ou longo)
  const hexRegex = /^#(?:[0-9A-Fa-f]{3}){1,2}$/;

  // Expressão regular para identificar RGB
  const rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;

  // Expressão regular para identificar RGBA
  const rgbaRegex =
    /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0?\.\d+|1(\.0)?)\)$/;

  // Expressão regular para identificar HSL
  const hslRegex = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;

  // Expressão regular para identificar HSLA
  const hslaRegex =
    /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(0?\.\d+|1(\.0)?)\)$/;

  if (hexRegex.test(cor)) {
    return "hex";
  } else if (rgbRegex.test(cor)) {
    return "rgb";
  } else if (rgbaRegex.test(cor)) {
    return "rgba";
  } else if (hslRegex.test(cor)) {
    return "hsl";
  } else if (hslaRegex.test(cor)) {
    return "hsla";
  } else {
    return "unknown";
  }
};
