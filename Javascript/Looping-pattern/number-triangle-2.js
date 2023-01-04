/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/
let n = 5;
let str="";
for(let i=1; i<=n; i++){
    for(let j=1; j<=i; j++){
        str+=i+" ";
    }
    str+='\n';
}
console.log(str);