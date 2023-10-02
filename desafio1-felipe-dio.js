let heroName = prompt("Digite o nome do seu personagem")
let heroLevel = "None"
let heroExp = 0

while(heroLevel !== "Radiante"){
	let ordem = prompt("Digite 'matar' para farmar mais um monstro e subir seu nível, cada monstro lhe dará 600 de experiência")
	switch(ordem){
		case ordem === "matar":
		heroExp += 600
		prompt("Você matou um monstro, sua experiéncia agora é " + heroExp)
		break;
  }
	if (heroExp < 1000) {heroLevel = "Ferro";
	}	else if (1001 < heroExp && heroExp <= 2000){heroLevel = "Bronze";
	}	else if (2001 < heroExp && heroExp <= 5000){heroLevel = "Prata";
	}	else if (5001 < heroExp && heroExp <= 7000){heroLevel = "Ouro";
	}	else if (7001 < heroExp && heroExp <= 8000){heroLevel = "Platina";
	}	else if (8001 < heroExp && heroExp <= 9000){heroLevel = "Ascendente";
	}	else if (9001 < heroExp && heroExp <= 10000){heroLevel = "Imortal";
	}	else {heroLevel === "Radiante";
	}	prompt("O nível atual do personagem " + heroName + " é " + heroLevel + " e sua experiência atual é " + heroExp);
		let mensagem = "Pressione qualquer tecla para continuar...";
		prompt(mensagem);
}