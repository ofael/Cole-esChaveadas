const meuArray = [30, 20, 30, 10, 22, 33, 192];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));