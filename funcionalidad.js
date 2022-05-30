//Para solo 3 bandas

/*Voy a declarar variables globales*/
var banda_1=0;
var banda_2=0;
var multiplicadora=0;
var Resultado=(banda_1+banda_2)*multiplicadora;
/*La idea de comenzar con estos valores iniciales es que el usuario no sufra del 
bugg que cuando no selecciona ninguna banda le de undifined */


function ingreso_Banda_1(id, value)
{
    banda_1= document.getElementById('Color_Primera_Banda').value;

    return banda_1;
}



function ingreso_Banda_2(id, value)
{
    banda_2= document.getElementById('Color_segunda_banda').value;

    return banda_2;
}

function ingreso_Banda_multiplicadora(id, value)
{
    multiplicadora= document.getElementById('Banda_Multiplicador').value;

    return multiplicadora;
}



/**
     * Descripción de que hace la función
     * @method calcular
     * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
     * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
     * @return Resultado
     */


function calcular()
{



    //Empezamos con los switch

    switch(banda_1)
    {
        case "Negro":
            Resultado="0";
            break;

        case "Marron":
            Resultado="1";
            break;

        case "Rojo":
            Resultado="2";
            break;
        
        case "Naranja":
            Resultado="3";
            break;

        case "Amarillo":
            Resultado="4";
            break;

        case "Verde":
            Resultado="5";
            break;

        case "Azul":
            Resultado="6";
            break;

        case "Violeta":
            Resultado="7";
            break;

        case "Gris":
            Resultado="8";
            break;

        case "Blanco":
            Resultado="9";
            break;
        
        default:
            //Aqui que le mandara al usuario un aviso de que falta banda 1
        break;

    }

    //Banda 2
 

    switch(banda_2)
    {
        case "Negro":
            Resultado=Resultado+"0";
            break;
    
        case "Marron":
            Resultado=Resultado+"1";
            break;
    
        case "Rojo":
            Resultado=Resultado+"2";
            break;
        
        case "Naranja":
            Resultado=Resultado+"3";
            break;
    
        case "Amarillo":
            Resultado=Resultado+"4";
            break;
    
        case "Verde":
            Resultado=Resultado+"5";
            break;
    
        case "Azul":
            Resultado=Resultado+"6";
            break;
    
        case "Violeta":
            Resultado=Resultado+"7";
            break;
    
        case "Gris":
            Resultado=Resultado+"8";
            break;
    
        case "Blanco":
            Resultado=Resultado+"9";
            break;
        
        default:
            //Aqui que le mandara al usuario un aviso de que falta banda 1
        break; 
    
    }

//Banda Multiplicadora



    switch(multiplicadora)
    {
        case "Negro":
            Resultado=Resultado;
        break;

        case "Marron":
            Resultado=Resultado*10;
            break;
    
        case "Rojo":
            Resultado=Resultado*100;
            break;
        
        case "Naranja":
            Resultado=Resultado*1000;
            break;
    
        case "Amarillo":
            Resultado=Resultado*10000;
            break;
    
        case "Verde":
            Resultado=Resultado*100000;
            break;
    
        case "Azul":
            Resultado=Resultado*1000000;
            break;
    
        case "Violeta":
            Resultado=Resultado*10000000;
            break;
    
        case "Gris":
            Resultado=Resultado*100000000;
            break;
    
        case "Blanco":
            Resultado=Resultado*1000000000;
            break;
        
        default:
            //Aqui que le mandara al usuario un aviso de que falta banda 1
        break; 

    }
    
    Resultado=parseInt(Resultado); //Comvierto en un entero mi Resultado

    document.getElementById('mi_resultado').innerHTML=Resultado;
    
    return Resultado;
    
    
}

function ElCanvasfuncion(){
    //varieble para el canvas

    var canva=document.getElementById("a123456");
    var ctx=canva.getContext("2d");

    ctx.font=" 30px w95fa";
    ctx.fillText("Resultado");
    

}