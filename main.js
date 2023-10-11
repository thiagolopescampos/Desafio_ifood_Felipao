function getNameXp(nome, xp) {

  const nomeHeroi = String(nome);
  const xpHeroi = Number(xp);
  const rankingHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];
  
  if (!nomeHeroi) {
    return console.log("voce digitou o nome do heroi incoreetamente");
  }

  if (!xpHeroi) {
    return console.log("voce digitou o XP do heroi incoreetamente");
  }

  if (xpHeroi <= 1000) {
    return console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${rankingHeroi[0]}**`);
  }
  if (xpHeroi <= 2000) {
    return console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${rankingHeroi[1]}**`);
  }
  if (xpHeroi <= 5000) {
    return console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${rankingHeroi[2]}**`);
  }
  if (xpHeroi <= 7000) {
    return console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${rankingHeroi[3]}**`);
  }
  if (xpHeroi <= 8000) {
    return console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${rankingHeroi[4]}**`);
  }
  if (xpHeroi <= 9000) {
    return console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${rankingHeroi[5]}**`);
  }
  if (xpHeroi <= 10000) {
    return console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${rankingHeroi[6]}**`);
  }else{
    return console.log(`O Herói de nome **${nomeHeroi}** está no nível de **${rankingHeroi[7]}**`);
  }

}

console.log(getNameXp("Thiago", 9500));