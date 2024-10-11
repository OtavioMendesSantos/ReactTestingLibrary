import { describe, expect, test } from "vitest";
import { applyOpacity } from "./applyOpacity";

describe("applyOpacity", () => {
    test("deve retornar uma string com a opacidade aplicada para uma cor em formato HEX", () => {
        const cor = "#000000";
        const opacidade = 0.5;
        const resultado = applyOpacity(cor, opacidade);
        expect(resultado).toBe("rgba(0, 0, 0, 0.5)");
    })

    test("deve retornar uma string com a opacidade aplicada para uma cor em formato RGB", () => {
        const cor = "rgb(0, 0, 0)";
        const opacidade = 0.5;
        const resultado = applyOpacity(cor, opacidade);
        expect(resultado).toBe("rgba(0, 0, 0, 0.5)");
    })
})