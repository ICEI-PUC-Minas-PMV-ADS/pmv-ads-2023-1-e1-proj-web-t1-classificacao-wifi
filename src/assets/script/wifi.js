// Calculo 2 em 1: RA & RV

function calcularClassificacao() {
    var W = parseInt(document.getElementById("W").value);
    var I = parseInt(document.getElementById("I").value);
    var fI = parseInt(document.getElementById("fI").value);
    var resultadoRA = "";
    var resultadoRV = "";
    
    // Cálculo Risco Amputação

    if (I === 0) {
      if (W === 0 && (fI === 0 || fI === 1) || (W === 1 && (fI === 0 || fI === 1))) { 
        resultadoRA = "Muito baixo";
      } else if ((W === 0 && fI === 2) || (W === 1 && fI === 2) || (W === 2 && (fI === 0 || fI === 1))) {
        resultadoRA = "Baixo";
      } else if ((W === 0 && fI === 3) || (W === 1 && fI === 3) || (W === 2 && fI === 2) || (W === 3 && (fI === 0 || fI === 1))) { 
        resultadoRA = "Moderado";
      } else if ((W === 2 && fI === 3) || (W === 3 && (fI === 2 || fI === 3))) {
        resultadoRA = "Alto";
      }
    } else if (I === 1) {
      if ((W === 0 || W === 1) && fI === 0) {
        resultadoRA = "Muito baixo";
      } else if ((W === 0 || W === 1) && fI === 1) {
        resultadoRA = "Baixo";
      } else if ((W === 0 || W === 2) && (fI === 0 || fI === 1) || (W === 2 && (fI === 0 || fI === 1)) || (fI === 2 && (W === 0 || W === 1))) { 
        resultadoRA = "Moderado";
      } else if ((W === 0 || W === 1 || W === 2 || W === 3) && (fI === 3 || fI === 2) || (W === 3 && (fI === 0 || fI === 1 || fI === 2 || fI === 3))) {
        resultadoRA = "Alto";
      }
    } else if (I === 2) {
      if ((W === 0 && (fI === 0 || fI === 1)) || (W === 1 && fI === 0)) {
        resultadoRA = "Baixo";
      } else if ((W === 0 && fI === 2) || (W === 1 && fI === 1)|| (W === 2 && fI === 0)) {
        resultadoRA = "Moderado";
      } else if ((W === 0 || W === 1 || W === 2 || W === 3) && fI === 3 || (W === 1 || W === 2 || W === 3) && fI === 2 || ((W === 2 || W === 3) && fI === 1) || W === 3 && fI === 0) {
        resultadoRA = "Alto";
      }
    } else if (I === 3) {
      if (W === 0 && fI === 0) {
        resultadoRA = "Baixo";
      } else if ((W === 0 && (fI === 1 || fI === 2)) || (W === 1 && (fI === 0 || fI === 1))) {
        resultadoRA = "Moderado";
      } else {
        resultadoRA = "Alto";
      }
            
    }

    // Cálculo revascularização

    if (I === 0) {
        resultadoRV = "Muito baixo";       
    }
     else if (I === 1) {
      if (W === 0 && fI === 0) {
        resultadoRV = "Muito baixo";
      } else if ((W === 0 && (fI === 1 || fI === 2)) || (W === 1 && fI === 0)) {
        resultadoRV = "Baixo";
      } else if ((W === 0 && fI === 3) || (W === 1 && (fI === 1 || fI === 2 || fI === 3)) || (W === 2 && (fI === 0 || fI === 1)) || (W === 3 && (fI === 0 || fI === 1 || fI === 2))) { 
        resultadoRV = "Moderado";
      } else {
        resultadoRV = "Alto";
      }
    } else if (I === 2) {
      if ((W === 0 && (fI === 0 || fI === 1))) {
        resultadoRV = "Baixo";
      } else if ((W === 0 && (fI === 2||3)) || (W === 1 && fI === 0)) {
        resultadoRV = "Moderado";
      } else {
        resultadoRV = "Alto";
      }
    } else if (I === 3) {
      if (W === 0 && fI === 0) {
        resultadoRV = "Moderado";
      } else {
        resultadoRV = "Alto";
      }
            
    }
    
    document.getElementById("resultadoRA").textContent = resultadoRA;
    document.getElementById("resultadoRV").textContent = resultadoRV;
  }