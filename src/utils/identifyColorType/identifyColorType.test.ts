import { describe, expect, test } from "vitest";
import { identifyColorType } from "./identifyColorType";

describe("identifyColorType", () => {
  test("deve retornar o tipo de cor HEX", () => {
    const cor = "#000000";
    const resultado = identifyColorType(cor);
    expect(resultado).toBe("hex");
  });

  test("deve retornar o tipo de cor RGB", () => {
    const cor = "rgb(0, 0, 0)";
    const resultado = identifyColorType(cor);
    expect(resultado).toBe("rgb");
  });

  test("deve retornar o tipo de cor RGBA", () => {
    const cor = "rgba(0, 0, 0, 0.5)";
    const resultado = identifyColorType(cor);
    expect(resultado).toBe("rgba");
  });
});
