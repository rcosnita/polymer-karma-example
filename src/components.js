(function() {
    window.NameSpace = {};

    function FirstClass() { };

    FirstClass.prototype.sayHello = function(msg) {
        if (msg === null || msg === undefined) {
            return "";
        }

        return msg;
    }

    window.NameSpace.FirstClass = FirstClass;
})();