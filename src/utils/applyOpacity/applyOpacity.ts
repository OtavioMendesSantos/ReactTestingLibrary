export function applyOpacity(cor: string, opacidade: number): string {
  // Valida a opacidade
  if (opacidade < 0 || opacidade > 1) {
    throw new Error("Opacidade deve estar entre 0 e 1.");
  }

  // Função para converter cor HEX para RGB
  function hexParaRgb(hex: string): { r: number; g: number; b: number } {
    // Remove o hash (#) se estiver presente
    hex = hex.replace(/^#/, "");

    let r: number, g: number, b: number;

    // Converte HEX para RGB
    if (hex.length === 3) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    } else {
      throw new Error("Formato de cor HEX inválido.");
    }

    return { r, g, b };
  }

  // Função para converter cor RGB para RGBA
  function rgbParaRgba(r: number, g: number, b: number): string {
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
  }

  // Verifica se a cor está no formato HEX
  if (/^#?[0-9A-Fa-f]{3}$|^#?[0-9A-Fa-f]{6}$/.test(cor)) {
    // Remove o hash (#) se presente e converte para RGB
    const { r, g, b } = hexParaRgb(cor);
    return rgbParaRgba(r, g, b);
  }

  // Verifica se a cor está no formato RGB
  const match = cor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (match) {
    const [, r, g, b] = match.map(Number);
    return rgbParaRgba(r, g, b);
  }

  throw new Error("Formato de cor inválido. Use HEX ou RGB.");
}
