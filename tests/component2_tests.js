describe("component2 tests suite.", function() {
    it("Check component instantiation.", function() {
        var comp = document.createElement("rc-helloworld2");

        expect(comp.customAttr).toBe("default value");
    });
});