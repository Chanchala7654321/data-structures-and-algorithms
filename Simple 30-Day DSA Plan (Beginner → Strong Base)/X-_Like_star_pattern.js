


let input = require('readline-sync');
let N = input.question("Enter your number : ");
for (let i = 1; i <= N; i++) {
    let st = "";
    for (let j = 1; j <= i; j++) {
        st += "*";
    }
    for (let j = 1; j <= N - i; j++) {
        st += "  "
    }
    for (let j = 1; j <= i; j++) {
        st += "*";
    }
    console.log(st);
}
for (let i = 1; i <= N; i++) {
    let st = "";
    for (let j = 1; j <= N - i; j++) {
        st += "*";
    }
    for (let j = 0; j < i; j++) {
        st += "- "
    }
    for (let j = 1; j <= N - i; j++) {
        st += "*";
    }
    console.log(st);
} 


