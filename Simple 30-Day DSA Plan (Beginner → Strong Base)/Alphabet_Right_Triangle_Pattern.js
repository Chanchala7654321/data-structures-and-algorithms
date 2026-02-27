
let A = ["A", "B", "C", "D", "E"];
for(let i = 1; i <= A.length ; i++){
    let st = "";
    for(let j = 0 ; j < i ; j++){
        st += A[j];
    }

    console.log(st);

}