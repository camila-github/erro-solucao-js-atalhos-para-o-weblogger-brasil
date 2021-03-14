//SOLUCAO 1
const trocarCaracter = (texto) => {
    while((texto.indexOf("_")) != -1)  texto = texto.replace(/_(.*)/, "<i>$1").replace(/_(.*)/, "</i>$1");
    while ((texto.indexOf("*")) != -1) texto = texto.replace(/\*(.*)/, "<b>$1").replace(/\*(.*)/, "</b>$1");
    return texto;
}

(function casosDeTeste(num){    
    while(num !== "") {
        console.log(trocarCaracter(num));
        num = gets();
        if (num == "") num = gets();
    }
})(gets());



//SOLUCAO 2
linha = gets();
do {
    trocarCaracter(linha);
    if ((linha = gets()) == "") linha = gets();
} while (linha != "");

function trocarCaracter(texto) {
    while ((texto.indexOf("_")) != -1) texto = texto.replace(/_(.*)/, "<i>$1").replace(/_(.*)/, "</i>$1");
    while ((texto.indexOf("*")) != -1) texto = texto.replace(/\*(.*)/, "<b>$1").replace(/\*(.*)/, "</b>$1");
    console.log(texto);
}



//SOLUCAO 3
let linha = gets();
do {
    trocarCaracter(linha);
    linha = gets();
    if (linha == "") linha = gets();
} while (linha != "");

function trocarCaracter(texto) {
    let auxTexto;
    procuraTagI = texto.indexOf("_");
    procuraTagB = texto.indexOf("*");
 
    while (procuraTagI != -1) {
        auxTexto = texto.replace(/_(.*)/, "<i>$1");
        texto = auxTexto.replace(/_(.*)/, "</i>$1");
        procuraTagI = texto.indexOf("_");
    }
 
    while (procuraTagB != -1) {
        auxTexto = texto.replace(/\*(.*)/, "<b>$1");
        texto = auxTexto.replace(/\*(.*)/, "</b>$1");
        procuraTagB = texto.indexOf("*");
    }
    console.log(texto);
}