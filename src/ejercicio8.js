function calcum(n1, n2) {
    if (n1 > n2) {
      alert("De los numeros " + n1 + " y " + n2 + " El número mayor es: " + n1);
    } else if (n2 > n1) {
      alert("De los numeros " + n1 + " y " + n2 + " El número mayor es: " + n2);
    } else {
      alert("Los numeros " + n1 + " y " + n2 + " son iguales: " + n1);
    }
  }
  calcum(17, 20);
  calcum(7, 18);
  calcum(7, 7);
