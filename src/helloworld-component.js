var comp = {
    is: "rc-helloworld",
    properties: {
        msg: {
            type: "String",
            value: "Hello world ..."
        }
    },
    greet: function(msg) {
        this.msg = msg;
    }
};