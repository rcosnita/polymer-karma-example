describe("helloword polymer unittests.", function() {
    beforeEach(function() {
        this._contentHolder = document.createElement("div");
        this._contentHolder.innerHTML = "<rc-helloworld></rc-helloworld>";

        document.body.appendChild(this._contentHolder);
    });

    afterEach(function() {
        document.body.removeChild(this._contentHolder);
    });

    it("check default msg value.", function(done) {
        var self = this,
                comp = self._contentHolder.querySelector("rc-helloworld"),
                expectedMsg = "Hello world ...";

        expect(comp.msg).toBe(expectedMsg);
        expect(comp.greet).not.toBe(undefined);

        var content = comp.querySelector("p");

        expect(content).not.toBe(undefined);
        expect(content.innerText).toBe(expectedMsg);

        comp.greet("Message changed ...");
        expect(comp.msg).toBe("Message changed ...");
        expect(content.innerText).toBe("Message changed ...");

        done();
    });
});