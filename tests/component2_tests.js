describe("component2 tests suite.", function() {
    beforeEach(function() {
        this._contentHolder = document.createElement("div");
        this._contentHolder.innerHTML = "<rc-helloworld2></rc-helloworld2>";

        document.body.appendChild(this._contentHolder);
    });

    afterEach(function() {
        document.body.removeChild(this._contentHolder);
    });

    it("Check component instantiation.", function(done) {
        var self = this;

        TestsHelper.execWhenReady(function() {
                return self._contentHolder.querySelector("rc-helloworld2");
            }, function(comp) {
                expect(comp.customAttr).toBe("default value");
            }, done);
    });
});