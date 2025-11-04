// --- Carrossel de Fotos ---

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.getElementById('slides-container'); // Pegar o container de slides

function mostrarSlide() {
    // Certifica-se de que o slideIndex está dentro dos limites
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Move o contêiner de slides para mostrar o slide ativo
    // Cada slide ocupa 100% da largura, então multiplicamos por 100%
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Função chamada pelos botões de navegação
function mudarSlide(n) {
    slideIndex += n;
    mostrarSlide();
}

// Inicia o carrossel (mostra o primeiro slide)
mostrarSlide();

// Carrossel automático (opcional, para fazer as fotos passarem sozinhas)
// setInterval(() => {
//     mudarSlide(1);
// }, 5000); // Passa a cada 5 segundos (5000 milissegundos)

// --- Contador de Tempo ---
// ... (seu código do contador aqui, sem alterações)
// Defina a data de início que você quer contar (Ex: 01 de Outubro, 2024, às 00:00:00)
// É importante usar um formato que o JavaScript Date reconheça, como 'YYYY-MM-DDTHH:mm:ss'
const DATA_INICIO = new Date("2025-09-24T00:00:00").getTime(); // Mantenha sua data aqui
const elementoContador = document.getElementById('contador');

function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = agora - DATA_INICIO; // Diferença em milissegundos

    // 1 segundo = 1000 milissegundos
    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const totalDias = Math.floor(diferenca / dia);
    const meses = Math.floor(totalDias / 30); // Meses aproximados
    const diasRestantes = totalDias % 30; // Dias restantes no mês

    const horas = Math.floor((diferenca % dia) / hora);
    const minutos = Math.floor((diferenca % hora) / minuto);
    const segundos = Math.floor((diferenca % minuto) / segundo);

    // Formatação da saída
    elementoContador.innerHTML = `
        <p>Faz: 
            <strong>${meses}</strong> ${meses === 1 ? 'mês' : 'meses'}, 
            <strong>${diasRestantes}</strong> ${diasRestantes === 1 ? 'dia' : 'dias'}, 
            <strong>${horas}</strong> ${horas === 1 ? 'hora' : 'horas'}, 
            <strong>${minutos}</strong> ${minutos === 1 ? 'minuto' : 'minutos'} e 
            <strong>${segundos}</strong> ${segundos === 1 ? 'segundo' : 'segundos'}
        </p>
    `;
}

// Inicia e atualiza o contador a cada 1 segundo (1000 milissegundos)
setInterval(atualizarContador, 1000);

// Executa uma vez ao carregar a página para evitar um atraso inicial
atualizarContador();