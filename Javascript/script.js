// Dados dos pontos turísticos
const turisticSpots = {
    spot1: {
        title: "Teatro Rachel de Queiroz",
        subtitle: "Rua Dom Quintino, 808 - Centro",
        image: "./public/teatro-rachel-queiroz.png", // Substitua pelo caminho real da imagem
        description: "O Teatro Rachel de Queiroz, localizado no centro do Crato, Ceará, é um importante espaço cultural da região do Cariri. Inaugurado em 20 de junho de 1992, durante a gestão do prefeito Dráulio Holanda, o teatro foi construído com o apoio do extinto Ministério da Educação e Cultura. Com capacidade para 120 pessoas, o palco possui dimensões de 6m x 7m e boca de cena de 6,70m x 3m. Embora sua estrutura seja simples, o espaço é funcional e adequado para apresentações de pequeno e médio porte."
    },
    spot2: {
        title: "Cúria Diocesana do Crato",
        image: "./public/casa-do-bispo.png", // Substitua pelo caminho real da imagem
        description: "A Cúria Diocesana do Crato é o centro administrativo da Diocese de Crato, no sul do Ceará. Localizada na Rua Dom Quintino, abriga setores responsáveis por coordenar as atividades pastorais, sociais e administrativas da diocese. Além de sua função organizacional, é também espaço de espiritualidade, promovendo missas, encontros e formações para líderes religiosos e comunitários. Fundada em 1914, a Diocese de Crato abrange diversas paróquias e conta com a Cúria como elo central de apoio e unidade na missão evangelizadora da Igreja no Cariri cearense."
    },
    spot3: {
        title: "Museu Histórico do Crato",
        image: "./public/museu-historico-crato.png", // Substitua pelo caminho real da imagem
        description: "O Museu Histórico do Crato, também conhecido como Museu J. Figueiredo Filho, está localizado no centro da cidade em um prédio de 1817, tombado como patrimônio histórico. Seu acervo reúne cerca de 968 peças que retratam a história do Cariri, incluindo artefatos indígenas dos Kariris e documentos sobre o cangaço. Após anos de abandono, o museu passa por um processo de restauração, com investimentos voltados à preservação desse importante símbolo da memória cultural da região."
    },
    spot4: {
        title: "Camâra Municipal do Crato",
        image: "./public/camara-municipal.png", // Substitua pelo caminho real da imagem
        description: "A Câmara Municipal do Crato é o órgão legislativo da cidade, responsável por criar leis, fiscalizar o poder executivo e representar a população. Localizada no centro do município, passou recentemente por reformas para melhorar sua estrutura. Composta por vereadores eleitos, a Câmara promove a transparência e a participação cidadã, oferecendo acesso às suas atividades e projetos por meio de seu site e redes sociais."
    }
};

// Elementos do DOM
const modal = document.getElementById('spotModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const closeBtn = document.querySelector('.close-btn');
const spotPhotos = document.querySelectorAll('.timeline-photo');
const timelineItems = document.querySelectorAll('.timeline-item');

// Função para animar os elementos da timeline quando ficarem visíveis
function setupTimelineAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Função para abrir o modal com animação
function openModal(spotId) {
    const spot = turisticSpots[spotId];
    if (spot) {
        modalTitle.textContent = spot.title;
        modalImage.src = spot.image;
        modalImage.alt = spot.title;
        modalDescription.textContent = spot.description;
        
        // Exibir o modal
        modal.style.display = 'flex';
        
        // Pequeno delay antes de adicionar a classe para a animação funcionar
        setTimeout(() => {
            modal.classList.add('visible');
        }, 10);
        
        document.body.style.overflow = 'hidden'; // Impede rolagem de fundo
    }
}

// Função para fechar o modal com animação
function closeModal() {
    modal.classList.remove('visible');
    
    // Aguardar a animação terminar antes de esconder o modal
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaura rolagem
    }, 300);
}

// Adiciona event listeners
spotPhotos.forEach(photo => {
    photo.addEventListener('click', () => {
        const spotId = photo.getAttribute('data-spot');
        openModal(spotId);
    });
});

closeBtn.addEventListener('click', closeModal);

// Fechar modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Fechar modal com tecla ESC
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Efeito de paralaxe suave para o background
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    document.querySelector('.background-container').style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Inicializar animações quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    setupTimelineAnimations();
    
    // Adicionar efeito de hover aos marcadores
    document.querySelectorAll('.timeline-marker').forEach(marker => {
        marker.addEventListener('mouseenter', () => {
            marker.style.transform = 'translateX(-50%) scale(1.1)';
        });
        
        marker.addEventListener('mouseleave', () => {
            marker.style.transform = 'translateX(-50%) scale(1)';
        });
    });
});

// Função para carregamento progressivo das imagens para melhorar a performance
function lazyLoadImages() {
    const images = document.querySelectorAll('.timeline-photo img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src; // Usar data-src se existir
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Iniciar carregamento preguiçoso de imagens
lazyLoadImages();