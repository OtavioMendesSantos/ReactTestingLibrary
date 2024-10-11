import { describe, expect, test } from "vitest";
import { changeOpacity } from "./changeOpacity";

describe("changeOpacity", () => {
  test("deve retornar uma string com a opacidade aplicada para uma cor em formato rgba", () => {
    const cor = "rgba(0, 0, 0, 0.8)";
    const opacidade = 0.3;
    const resultado = changeOpacity(cor, opacidade);
    expect(resultado).toBe("rgba(0, 0, 0, 0.3)");
  });

  test("deve retornar um erro caso a cor aplicada não esteja no formato rgba", () => {
    const cor = "rgb(0, 0, 0)";
    const opacidade = 0.3;
    expect(() => changeOpacity(cor, opacidade)).toThrow("Formato de cor inválido. Use RGBA.")
  })
});
