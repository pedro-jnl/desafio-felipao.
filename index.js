// solicita ao usuario a inserir o nome e a quantidade de (xp) do herói
var nomeHeroi = prompt("digite o nome do herói");
var xphHeroi = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"));
 
// ultiliza uma estrutura de decisão o nivel do herói com base na quantidade de xp
var nivel

if (xpHerói < 1000)
nivel = "ferro";
 else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// exibi a mensagem final
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);