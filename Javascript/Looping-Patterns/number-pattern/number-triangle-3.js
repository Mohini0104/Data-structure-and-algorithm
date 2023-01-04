let n= 5;
let str= "";
let inc= 1;
for(let i = 1; i<=n; i++){
    for (let j= 1; j<=i; j++){
        str+=inc + " ";
        inc++;

    }
    str+='\n';
}
console.log(str)