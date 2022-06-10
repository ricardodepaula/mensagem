const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
"Pois Deus não nos deu espírito de covardia, mas de poder, de amor e de equilíbrio. 2 Timóteo 1:7",
  "Estejam vigilantes, mantenham-se firmes na fé, sejam homens de coragem, sejam fortes. 1 Coríntios 16:13",
  "Do Senhor vem a salvação dos justos; ele é a sua fortaleza na hora da adversidade. Salmos 37:39",
  "Espere no Senhor. Seja forte! Coragem! Espere no Senhor. Salmos 27:14",
  "Nisso vocês exultam, ainda que agora, por um pouco de tempo, devam ser entristecidos por todo tipo de provação. 1 Pedro 1:6",
  "Quando clamei, tu me respondeste; deste-me força e coragem. Salmos 138:3"
]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite seu nome")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 8000)
}