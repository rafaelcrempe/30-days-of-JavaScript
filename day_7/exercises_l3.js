const prompt = require("prompt-sync")();

// 1.Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. 
// It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number 
// of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratedByUser() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

    const numberOfCharacters = Number(prompt("How many characters you want on your ID? "));
    const numberOfIds = Number(prompt("How many IDs do you want me to generate? "));

    for (let j = 0; j < numberOfIds; j++) {
        let id = "";
        for (let i = 0; i < numberOfCharacters; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            id += characters[randomIndex];
        }
        console.log(id);
    }
}

userIdGeneratedByUser();
