const calcua = (l) => {
    return 2 * l;
  };
  
  const calcup = (l) => {
    return l + l + l + l;
  };

  let l = 7;
  
  let area = calcua(l);
  let perimetro = calcup(l);
  
  // Mostramos los resultados en consola
  console.log(`Lado del cuadrado: ${l}`);
  console.log(`Área (2 * lado): ${area}`);
  console.log(`Perímetro (lado + lado + lado + lado): ${perimetro}`);
  