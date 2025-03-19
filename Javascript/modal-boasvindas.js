// Script para o modal de boas-vindas
document.addEventListener('DOMContentLoaded', function() {
    // Elementos do modal de boas-vindas
    const welcomeModal = document.getElementById('welcomeModal');
    const welcomeModalClose = document.getElementById('welcomeModalClose');
    const exploreBtn = document.getElementById('exploreBtn');
    
    // Verificar se é a primeira visita (usando localStorage)
    const hasVisitedBefore = localStorage.getItem('visitedCratoGuide');
    
    // Função para mostrar o modal
    function showWelcomeModal() {
        // Pequeno delay para garantir que a página carregue primeiro
        setTimeout(() => {
            welcomeModal.classList.add('visible');
        }, 500);
    }
    
    // Função para fechar o modal
    function closeWelcomeModal() {
        welcomeModal.classList.remove('visible');
        
        // Armazenar que o usuário já visitou o site
        localStorage.setItem('visitedCratoGuide', 'true');
        
        // Aguardar a transição terminar antes de esconder completamente
        setTimeout(() => {
            welcomeModal.style.display = 'none';
        }, 500);
    }
    
    // Se for a primeira visita, mostrar o modal
    if (!hasVisitedBefore) {
        showWelcomeModal();
    }
    
    // Adicionar eventos para fechar o modal
    if (welcomeModalClose) {
        welcomeModalClose.addEventListener('click', closeWelcomeModal);
    }
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', closeWelcomeModal);
    }
    
    // Fechar o modal ao clicar fora dele (apenas na área escura)
    welcomeModal.addEventListener('click', function(event) {
        if (event.target === welcomeModal) {
            closeWelcomeModal();
        }
    });
});

// Animação dos itens da timeline
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});