export const changeOpacity = (cor: string, opacidade: number) => {
  if (opacidade < 0 || opacidade > 1) {
    throw new Error("Opacidade deve estar entre 0 e 1.");
  }
  // Verifica se a cor está no formato RGBA
  const match = cor.match(
    /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(0?\.\d+|1(\.0)?)\)$/
  );
  if (match) {
    const [, r, g, b, _] = match.map(Number);

    // Retorna a cor RGBA com a nova opacidade
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
  }

  // Se a cor não estiver no formato RGBA, lança um erro
  console.log(cor);
  throw new Error("Formato de cor inválido. Use RGBA.");
};
