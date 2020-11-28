//SOLUCAO 1
let linha = gets();
do {
    trocarCaracter(linha);
    linha = gets();
    /*valida se tem linhas em branco, caso sim, pula para a proxima linha*/
    if (linha == "") linha = gets();
} while (linha != "");

function trocarCaracter(texto) {
    let auxTexto;
    procuraTagI = texto.indexOf("_");
    procuraTagB = texto.indexOf("*");
    /*troca o caracter sublinhado pela tag <i> e </i> */
    while (procuraTagI != -1) {
        auxTexto = texto.replace(/_(.*)/, "<i>$1");
        texto = auxTexto.replace(/_(.*)/, "</i>$1");
        procuraTagI = texto.indexOf("_");
    }
    /*troca o caracter asterisco pela tag <b> e </b> */
    while (procuraTagB != -1) {
        auxTexto = texto.replace(/\*(.*)/, "<b>$1");
        texto = auxTexto.replace(/\*(.*)/, "</b>$1");
        procuraTagB = texto.indexOf("*");
    }
    console.log(texto);
}

//SOLUCAO 2 - Resumido
linha = gets();
do {
    trocarCaracter(linha);
    /*valida se tem linhas em branco, caso sim, pula para a proxima linha*/
    if ((linha = gets()) == "") linha = gets();
} while (linha != "");

function trocarCaracter(texto) {
    /*troca o caracter sublinhado pela tag <i> e </i> */
    while ((texto.indexOf("_")) != -1) texto = texto.replace(/_(.*)/, "<i>$1").replace(/_(.*)/, "</i>$1");
    /*troca o caracter asterisco pela tag <b> e </b> */
    while ((texto.indexOf("*")) != -1) texto = texto.replace(/\*(.*)/, "<b>$1").replace(/\*(.*)/, "</b>$1");
    console.log(texto);
}