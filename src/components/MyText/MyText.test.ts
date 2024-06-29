import { getTextColor } from "./MyText.lib";

describe("getTextColor", () => {
    it("returns correct styles when disabled", () => {
        const styles = getTextColor(true, {});
        return expect(styles).toEqual({
            color: "#ccc",
            hoverColor: "#ccc",
            activeColor: "#ccc",
        })
    });
})