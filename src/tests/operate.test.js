import operate from "../components/logic/operate";

describe("operate", () => {
    it("returns a string", () => {
        const result = operate("1", "1", "+");
        expect(typeof result).toBe("string");
    });
    it("returns a number", () => {
        const result = operate("1", "1", "+");
        expect(typeof Number(result)).toBe("number");
    });
    it("returns a number of 2", () => {
        const result = operate("1", "1", "+");
        expect(Number(result)).toBe(2);
    });
    it("returns a number of 3", () => {
        const result = operate("2", "1", "+");
        expect(Number(result)).toBe(3);
    });
    it("returns a number of 4", () => {
        const result = operate("3", "1", "+");
        expect(Number(result)).toBe(4);
    });
    it("returns a number of 5", () => {
        const result = operate("4", "1", "+");
        expect(Number(result)).toBe(5);
    });
    it("returns a number of 6", () => {
        const result = operate("5", "1", "+");
        expect(Number(result)).toBe(6);
    });
    it("returns a number of 7", () => {
        const result = operate("6", "1", "+");
        expect(Number(result)).toBe(7);
    });
    it("returns a number of 8", () => {
        const result = operate("7", "1", "+");
        expect(Number(result)).toBe(8);
    });
    it("returns a number of 9", () => {
        const result = operate("8", "1", "+");
        expect(Number(result)).toBe(9);
    });
});