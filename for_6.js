let n = 24;
let s = 0;
for (let i = 1; i <=n; i++){
    if(n % i ==0){
        s = s + 1;
        
    }
}
if(s == 2){
    console.log('tub');
}
else{
    console.log('tub emas');
}