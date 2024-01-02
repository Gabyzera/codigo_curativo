const firstMessage = `
    Gabyzera te ama
    E torce muito pelo seu bem.
    Quando você passa mal,
    Ela se entristece também.

    Você é incrível,
    Transforma dias com maestria.
    Com personalidade forte,
    Ninguém esquece da sua energia. 

    Os últimos dias estão difíceis 
    Mas tudo vai passar,
    Com muito diálogo e disscussões,
    Nosso relacionamento vai perpetuar.

    Para sempre você estará comigo.
    Minha vida foi transformada, é verdade,
    Eternamente torcerei pelo seu sucesso, 
    Agradeço pelos momentos de felicidade.
`;

const motivationalMessages = [
  "Que sua recuperação seja tão eficiente quanto um código otimizado.",
  "Assim como o ChatGPT, estou aqui para ajudar em qualquer situação.",
  "Como um loop infinito, nossa amizade nunca acaba!",
  "Espero que você se recupere na velocidade de um Quicksort.",
  "Que o simplex encontre a solução perfeita para minimizar seus dias de mal-estar.",
  "Você é o CSS do meu HTML.",
  "Mesmo que você esteja passando por um momento '404', saiba que estou aqui para te ajudar a desbugar esse bug.",
  "Sua presença é como um repositório bem documentado: assertivo, importante e transformador.",
  "Estou aqui para ser o Matplotlib do seu dataframe, ajudando e colorindo o seu dia :)",
  "Nossa conexão é como herança, não importa o que aconteça, você sempre será parte de mim.",
  "SELECT * FROM Lucas Moreira WHERE condição = 'saudável' AND felicidade = 'máxima'",
  "Você exponencia na minha vida."
];

const mainScreen = document.getElementById('mainScreen');
const messageScreen = document.getElementById('messageScreen');
const messageContent = document.getElementById('messageContent');

function showMotivationalMessage() {
  const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
  messageContent.textContent = motivationalMessages[randomIndex];
  showScreen(messageScreen);
  messageContent.addEventListener('click', showMotivationalMessage);
}

function goBack() {
  showScreen(mainScreen);
}

function showFirstMessage() {
  messageContent.innerHTML = firstMessage.replace(/\n/g, '<br>');
  showScreen(messageScreen);
}

function showScreen(screen) {
  mainScreen.style.display = 'none';
  messageScreen.style.display = 'none';
  screen.style.display = 'block';
}
