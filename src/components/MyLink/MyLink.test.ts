import { getLinkColor } from "./MyLink.lib";

describe("getLinkColor", () => {
    it("returns correct styles when hovered", () => {
        const styles = getLinkColor(true, {});
        return expect(styles).toEqual({
            color: "#ccc",
            // hoverColor: "#ccc", changed to make it fail
            hoverColor: "#ccc", 
            activeColor: "#ccc",
        });
    });
})