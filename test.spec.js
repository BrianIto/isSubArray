const isSub = require("./index.js");

test("Check if is subset successfully", () => {
	expect(isSub([1,2,3], [1,2])).toBeTruthy()
	expect(isSub([1,2,3], [1,3])).toBeFalsy()
	expect(isSub([1,2,3], [2,3])).toBeTruthy()
	expect(isSub(["oi", "sou", "Brian"], ["sou", "Brian"])).toBeTruthy()
	expect(isSub(["Administrador", "de", "flores"], ["Administrador", "de", "materiais"])).toBeFalsy()
	expect(isSub(["Administrador"], ["Administrador", "de", "materiais"])).toBeFalsy()
	expect(isSub([["ABC", "BCD"], "A", "B"], [["ABC", "BCD"]])).toBeTruthy()
	expect(isSub([["ABC", "BCD"], "A", "B"], [["ABC"]])).toBeFalsy()
});

