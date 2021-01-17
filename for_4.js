let n = 1000;


for (let i = 1; i < n; i++){
    let s = 0;
    for (let j = 1; j < i; j++){
        if(i % j == 0){
            s = s + j;
            
        }
        
    }
    if (i == s){
        console.log(i);
    }
}

