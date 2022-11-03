import calculate from "../components/logic/calculate";

describe("calculate", () => {
    it("returns an object", () => {
        const result = calculate({}, "1");
        expect(typeof result).toBe("object");
    });
    it("returns a total", () => {
        const result = calculate({}, "1");
        expect(result.total).not.toBeUndefined();
    });
    it("returns a next", () => {
        const result = calculate({}, "1");
        expect(result.next).not.toBeUndefined();
    });
    it("returns an operation", () => {
        const result = calculate({}, "1");
        expect(result.operation).not.toBeUndefined();
    });
    it("returns a total of 1", () => {
        const result = calculate({}, "1");
        expect(result.total).toBe("1");
    });
    it("returns a total of 2", () => {
        const result = calculate({ total: "1" }, "1");
        expect(result.total).toBe("2");
    });
    it("returns a total of 3", () => {
        const result = calculate({ total: "2" }, "1");
        expect(result.total).toBe("3");
    });
    it("returns a total of 4", () => {
        const result = calculate({ total: "3" }, "1");
        expect(result.total).toBe("4");
    });
    it("returns a total of 5", () => {
        const result = calculate({ total: "4" }, "1");
        expect(result.total).toBe("5");
    });
    it("returns a total of 6", () => {
        const result = calculate({ total: "5" }, "1");
        expect(result.total).toBe("6");
    });
    it("returns a total of 7", () => {
        const result = calculate({ total: "6" }, "1");
        expect(result.total).toBe("7");
    });
    it("returns a total of 8", () => {
        const result = calculate({ total: "7" }, "1");
        expect(result.total).toBe("8");
    });
    it("returns a total of 9", () => {
        const result = calculate({ total: "8" }, "1");
        expect(result.total).toBe("9");
    });
    it("returns a total of 10", () => {
        const result = calculate({ total: "9" }, "1");
        expect(result.total).toBe("10");
    });
});