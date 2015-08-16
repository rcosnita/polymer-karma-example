describe("FirstClass tests suite.", function() {
    beforeEach(function() {
        this._firstClass = new NameSpace.FirstClass();
    });

    it("Make sure sayHello returns the given message.", function() {
        expect(this._firstClass.sayHello("Cool message")).toBe("Cool message");
    });

    it("Make sure sayHello does not fail when given an undefined / null / empty message.", function() {
        expect(this._firstClass.sayHello(undefined)).toBe("");
        expect(this._firstClass.sayHello(null)).toBe("");
        expect(this._firstClass.sayHello("")).toBe("");
    });
});