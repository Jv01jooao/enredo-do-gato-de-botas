async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`

Gato de botas

Puss in Boots: The Last Wish (prt: O Gato das Botas: O Último Desejo[2]; bra: Gato de Botas 2: O Último Pedido[1]) é um filme estadunidense de animação digital do gênero comédia de aventura produzido pela DreamWorks Animation e distribuído pela Universal Pictures. Um spin-off da franquia Shrek, o filme é uma sequência de Gato de Botas (2011). É dirigido por Joel Crawford com codireção de Januel Mercado, a partir de um roteiro escrito por Paul Fisher, e estrela as vozes de Antonio Banderas e Salma Hayek que reprisam seus papéis como Gato de Botas e Kitty Softpaws, respectivamente, ao lado de Olivia Colman, Harvey Guillén, Samson Kayo, Wagner Moura, Anthony Mendez, John Mulaney, Florence Pugh, Da'Vine Joy Randolph e Ray Winstone.

Puss in Boots: The Last Wish estreou nos Estados Unidos em 21 de dezembro de 2022, pela Universal Pictures. No Brasil, teve sua estreia antecipada para 5 de Janeiro de 2023.[6]

O filme acompanha o Gato de Botas, que acaba de morrer pela oitava vez, numa jornada para encontrar o mítico Último Desejo e restaurar suas vidas perdidas.[7]

Enredo
Na cidade de Del Mar, o renomado herói e fora da lei Gato de Botas dá uma festa na casa do governador e acidentalmente desperta o Gigante Adormecido de Del Mar. Gato subjuga o gigante e salva a cidade, mas é fatalmente esmagado por um sino. Gato acorda em um hospital, onde o médico da aldeia o informa que ele já perdeu oito de suas nove vidas e sugere que ele se aposente das aventuras. Gato inicialmente recusa e vai embora. Mais tarde, em uma cantina local, Gato conhece um misterioso lobo de capuz preto, que o desarma e corta sua testa em um duelo. Gato foge para um abrigo para gatos de propriedade de Mamãe Luna e enterra cerimoniosamente seu traje em seu jardim. Durante sua estadia, Gato conhece um cachorro órfão conhecido como "Perrito".

Mais tarde, a família de criminosos Cachinhos Dourados e os Três Ursos aparecem na residência de Luna em busca de Gato, apenas para encontrar seu "túmulo". Gato os ouve mencionar uma estrela mágica que pode conceder um único desejo a alguém que carrega seu mapa. Enquanto isso, João Trombeta, um confeiteiro corrupto e colecionador de artefatos mágicos, está esperando para receber o mapa naquela noite; Gato invade a padaria de João planejando roubar o mapa, chegar à estrela e recuperar suas nove vidas, reunindo-se inesperadamente com sua ressentida ex-noiva, Kitty Pata Mansa, que também tenta roubar o mapa. Depois de um breve conflito com Cachinhos e João, Gato, Kitty e Perrito (que o seguiu sem seu conhecimento) escapam com o mapa. Cachinhos, os ursos, João e seus capangas os perseguem, e Gato avista o lobo encapuzado novamente enquanto fogem.

O mapa leva o trio à Floresta Sombria, um lugar mágico que muda de terreno dependendo do portador do mapa. Gato e Kitty recebem paisagens sombrias e assustadoras, enquanto Perrito recebe uma floresta colorida e aparentemente tranquila. Durante outra escaramuça com as forças de João e Cachinhos, na qual João recebe um grilo falante conhecido como "inseto Ético", Gato avista o lobo encapuzado novamente e foge, distraindo Kitty e permitindo que Cachinhos obtenha o mapa. Depois que Perrito o acalma de um ataque de pânico, Gato confessa que deixou Kitty no altar no dia do casamento. Kitty os ouve e depois revela que também nunca foi ao casamento, sentindo que a relação não daria certo pois Gato ama mais a si mesmo do que a ela.

Gato e Kitty recuperam o mapa de Cachinhos quando seu grupo se distrai com uma manifestação de sua cabana na floresta. À medida que a paisagem se transforma, Perrito é capturado pelos ursos, enquanto Gato fica preso em uma caverna de cristal. Enquanto Kitty salva Perrito, Gato encontra reflexos de cristal de suas vidas passadas na caverna, que zombam dele por mudar sua atitude arrogante. O lobo encapuzado aparece mais uma vez, se apresenta como a personificação da Morte e revela ao Gato que quer matá-lo pessoalmente por desperdiçar suas últimas oito vidas. Em pânico, Gato foge com o mapa, ato que Kitty e Perrito testemunham de longe. Enquanto isso, Cachinhos, após um desentendimento com o Bebê Urso, revela que deseja se reunir com sua família biológica, chateando os ursos; no entanto, eles ainda concordam em ajudá-la.

Gato chega à Estrela dos Desejos, mas Kitty o repreende por seu egoísmo, ao mesmo tempo em que confessa que seu desejo era encontrar alguém em quem pudesse confiar. Cachinhos, os ursos e João chegam e outra luta começa, durante a qual Cachinhos desiste do desejo para salvar a vida do Bebê Urso e João fica preso dentro de sua bolsa mágica sem fundo. A Morte chega, envolve a si mesmo e ao Gato em um anel de fogo e o desafia para um duelo. Em vez de desejar mais vidas, Gato luta e desarma a Morte, afirmando corajosamente que, embora saiba que não pode vencer, continuará lutando por sua última vida. Vendo que Gato perdeu sua arrogância, Morte relutantemente o poupa e vai embora, afirmando que eles se reencontrarão um dia, ao que Gato respeitosamente concorda. Após isso, João Trombeta, tendo comido um biscoito de crescimento mágico, ressurge de sua bolsa como um gigante e rouba o mapa. Enquanto ele tenta fazer seu desejo de controlar toda a magia, Perrito o distrai por tempo suficiente para que os outros rasguem o mapa em pedaços. Enquanto João tenta recuperá-lo, o Inseto Ético o incendeia, montado em uma fênix, fazendo com que a Estrela dos Desejos entre em colapso e mate João.

Na sequência, Cachinhos faz as pazes com os ursos e parte com eles e o Inseto Ético para assumir o negócio de padaria de João Trombeta, enquanto Gato reacende seu romance com Kitty. Algum tempo depois, Gato, Kitty e Perrito roubam um navio do governador de Del Mar. Eles decidem oficializar o nome "Perrito" para o cachorro e zarpam para visitar "alguns velhos amigos".

THE END
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
