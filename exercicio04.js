const prompt = require("prompt-sync")()

 let numero = Number(prompt("Digite um número: "))

    if(numero % 2 == 0){

        TabuadaDecrescente()
       
    } else {
        TabuadaCrescente()
        
}




    

 






































function TabuadaDecrescente(){

        console.log("\nTabuada Decrescente (Número Par)")
        for(let i = 10; i >= 1; i--){
            console.log(numero + " x " + i + " = " + (numero * i))
        }
    }

    function TabuadaCrescente(){
        console.log("\nTabuada Crescente (Número Ímpar)")
        for(let i = 1; i <= 10; i++){
            console.log(numero + " x " + i + " = " + (numero * i))
        }
    }
