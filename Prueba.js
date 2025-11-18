let nombre = prompt("¿Cuál es tu nombre?");
let profesion = prompt("Escribe un nombre de puesto o profesión:");
let adjetivo1 = prompt("Escribe un primer adjetivo (ejemplo: divertido, alto, azul):");
let adjetivo2 = prompt("Escribe un segundo adjetivo:");
let comida1 = prompt("¿Cuál es tu comida favorita?");
let comida2 = prompt("Menciona otra comida que te guste:");
let emocion = prompt("Escribe un sentimiento o emoción (ejemplo: feliz, confundido, emocionado):");

let historia = `Había una vez una persona llamada ${nombre}, que trabajaba como ${profesion}.
Un día, ${nombre} decidió probar algo ${adjetivo1} y ${adjetivo2}.Mientras comía ${comida1} junto a un plato de ${comida2}, se sintió muy ${emocion}.
Desde entonces, ${nombre} nunca olvidó ese día tan ${adjetivo1} y ${emocion}.
`;

document.body.innerText =`Había una vez una persona llamada ${nombre}, que trabajaba como ${profesion}.
Un día, ${nombre} decidió probar algo ${adjetivo1} y ${adjetivo2}.Mientras comía ${comida1} junto a un plato de ${comida2}, se sintió muy ${emocion}.
Desde entonces, ${nombre} nunca olvidó ese día tan ${adjetivo1} y ${emocion}.
`;
alert(historia);
console.log(historia);
