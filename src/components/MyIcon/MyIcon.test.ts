import { getIconColor } from "./MyIcon.lib";

describe("getIconColor", () => {
    it("should return an object with the correct color", () => {
        const result = getIconColor("#000");
        expect(result).toEqual({ color: "#000" });
    });
})