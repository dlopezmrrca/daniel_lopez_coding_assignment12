import { getToggleDropDownStyle } from "./MyToggle.lib";

describe("getToggleDropDownStyle", () => {
    it("should return an object with the correct styles", () => {
        const result = getToggleDropDownStyle(true);
        expect(result).toEqual({ display: "block" });
    });
})