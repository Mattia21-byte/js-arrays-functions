
function cifre(n){
    if(n > 9999){
        console.log(`numero troppo grande`);
        
    }else if(n >= 1000){
        console.log(`quattro cifre`);
        

    }else if(n >= 100){
        console.log(`tre cifre`);
        

    }else if(n >= 10){
        console.log(`due cifre`);
        

    }else{
        console.log(`una cifra`);
        
    }

}
cifre(40000);
cifre(6000);
cifre(777);
cifre(32);
cifre(1);