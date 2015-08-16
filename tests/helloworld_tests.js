describe("helloword polymer unittests.", function() {
    it("check default msg value.", function() {
        var comp = document.createElement("rc-helloworld"),
                expectedMsg = "Hello world ...";

        expect(comp.msg).toBe(expectedMsg);
        expect(comp.greet).not.toBe(undefined);

        var content = comp.querySelector("p");

        expect(content).not.toBe(undefined);
        expect(content.innerText).toBe(expectedMsg);

        comp.greet("Message changed ...");
        expect(comp.msg).toBe("Message changed ...");
        expect(content.innerText).toBe("Message changed ...");
    });
});