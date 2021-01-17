let n = 6;
let s = 0;
for (let i = 1; i < n; i++){
    if(n % i == 0){
        console.log(i);
        s = s + i;
    }
   
}
if(n == s){
    console.log('mukammal son');
}else {
    console.log(`${n} != ${s} va bu oddiy son`);
}
console.log(`s = ${s}`);