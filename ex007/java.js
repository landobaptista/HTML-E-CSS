cx1 = document.getElementById(`n1`)
cx2 = document.getElementById(`n2`)
cx3 = document.getElementById(`n3`)
cx4 = document.getElementById(`n4`)
cx5 = document.getElementById(`n5`)
cx6 = document.getElementById(`n6`)
cx7 = document.getElementById(`n7`)
cx8 = document.getElementById(`n8`)
cx9 = document.getElementById(`n9`)

//DIVS COLORIDAS

res1 = document.getElementById("r1")
res2 = document.getElementById("r2")
res3 = document.getElementById("r3")
res4 = document.getElementById("r4")
res5 = document.getElementById("r5")
res6 = document.getElementById("r6")
res7 = document.getElementById("r7")
res8 = document.getElementById("r8")
res9 = document.getElementById("r9")

let numeros = []



function numero_9(n1){

    if(n1 != 9){

        return true  
    }
    else{
        return false 
       
    }

}

function verificar(){

if( numero_9(cx1.value)){

    alert("O primeiro digito não pode ser diferente de 9 !!")
}
else{


    if(cx2.value.length == 0 || cx2.value.length > 1|| cx3.value.length == 0 ||  cx3.value.length > 1  || cx4.value.length == 0 ||  cx4.value.length > 1|| cx5.value.length == 0 ||  cx5.value.length > 1  || cx6.value.length == 0 || cx6.value.length > 1 || cx7.value.length == 0 ||  cx7.value.length > 1 || cx8.value.length == 0 ||  cx8.value.length > 1  || cx9.value.length == 0 ||  cx9.value.length > 1 ){

        alert(" verifica os dados introduzidos ")
    }
    else{

   
    numeros.push(n1)
    numeros.push(n2)
    numeros.push(n3)
    numeros.push(n4)
    numeros.push(n5)
    numeros.push(n6)
    numeros.push(n7)
    numeros.push(n8)
    numeros.push(n2)
  
    
    }
   
}


}

function clicado (){
     
     n1 = Number(cx1.value)
    n2 = Number(cx2.value)
    n3 = Number(cx3.value)
    n4 = Number(cx4.value)
    n5 = Number(cx5.value)
    n6 = Number(cx6.value)
    n7 = Number(cx7.value)
    n8 = Number(cx8 .value)
    n9 = Number(cx9.value)

  
}


