const repl = require('repl');

repl.start({
    prompt: "숫자 입력 > ",
    eval : (command, context, filename, callback) => {
        let number = Number(command);

        if (isNaN(number)){
            console.log("not number");
        } else{
            console.log("is number");
        }

        callback();
    }
});