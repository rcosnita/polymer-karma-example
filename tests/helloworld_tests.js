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
        var self = this;

        TestsHelper.execWhenReady(function() {
                return self._contentHolder.querySelector("rc-helloworld");
            }, function(comp) {
                var expectedMsg = "Hello world ...";

                expect(comp.msg).toBe(expectedMsg);
                expect(comp.greet).not.toBe(undefined);

                var content = comp.querySelector("p");

                expect(content).not.toBe(undefined);
                expect(content.textContent).toBe(expectedMsg);

                comp.greet("Message changed ...");
                expect(comp.msg).toBe("Message changed ...");
                expect(content.textContent).toBe("Message changed ...");
            }, done);
    });
});