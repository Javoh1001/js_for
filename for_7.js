let n = 10;

for (let i = 1; i <=n; i++){
    let s = 0;
    for(let j = 1; j <=i; j++){
        if(i % j == 0){
            s = s + 1;
        }
        
    }
    if(s == 2){
        console.log(i);
    }
}