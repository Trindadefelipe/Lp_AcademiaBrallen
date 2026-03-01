// ---SESSÃO DEPOIMENTOS---

function moverCarrossel(direcao) {
    const trilha = document.getElementById('trilhaDepoimentos');
    const card = trilha.querySelector('.depoimento-card');
    
    const larguraCard = card.offsetWidth + 30; 
    
    trilha.scrollBy({ left: direcao * larguraCard, behavior: 'smooth' });
}