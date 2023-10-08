export {};

function esParOImpar(numero: number): string {
  if (numero % 2 === 0) {
    return `El número ${numero} es par.`;
  } else {
    return `El número ${numero} es impar.`;
  }
}

const numero: number = 7;
const resultado: string = esParOImpar(numero);

console.log(resultado);
