// Dados dos pontos turísticos
const turisticSpots = {
    spot1: {
        title: "Praça da Sé",
        image: "/public/img/praca-img.jpg", // Substitua pelo caminho real da imagem
        description: "O Seminário São José é um importante marco histórico e cultural do Crato. Fundado em 1875, o edifício é um exemplo impressionante da arquitetura religiosa do período. Além de sua importância religiosa, o seminário desempenhou papel fundamental na educação da região, sendo considerado um dos mais importantes centros educacionais do interior nordestino em sua época. Sua estrutura imponente e suas belas áreas internas contam histórias de fé e conhecimento que moldaram gerações de cratenses."
    },
    spot2: {
        title: "Chapada do Araripe",
        image: "/public/img/chapadadoararipe-img.png", // Substitua pelo caminho real da imagem
        description: "A Chapada do Araripe é uma formação geológica que se estende por três estados do Nordeste brasileiro. No Crato, ela abriga a Floresta Nacional do Araripe, primeira floresta nacional criada no Brasil. O local é conhecido por sua biodiversidade única e pelas fontes naturais de água cristalina que dão origem aos famosos 'olhos d'água' da região. Com uma fauna e flora diversificadas, a chapada proporciona aos visitantes a oportunidade de contemplar paisagens deslumbrantes e sentir o clima agradável característico desta altitude, em contraste com o calor típico do sertão nordestino."
    },
    spot3: {
        title: "Geopark Araripe",
        image: "/public/img/geoparkararipe-img.png", // Substitua pelo caminho real da imagem
        description: "O Geopark Araripe foi o primeiro geoparque das Américas reconhecido pela UNESCO. Ele abriga importantes sítios geológicos e paleontológicos, com fósseis excepcionalmente bem preservados que datam de 110 milhões de anos. O centro de visitantes oferece exposições educativas sobre a história geológica da região, permitindo aos visitantes uma viagem no tempo para conhecer os organismos que habitaram a Bacia do Araripe. O geoparque é um exemplo notável de como a proteção do patrimônio geológico pode ser combinada com desenvolvimento sustentável regional e educação ambiental."
    },
    spot4: {
        title: "Parque de Exposição Pedro Felício Cavalcanti",
        image: "/public/img/pexposições-img.png", // Substitua pelo caminho real da imagem
        description: "O Parque de Exposição é um espaço onde acontecem as principais festividades da cidade, incluindo a tradicional Expocrato. O local é palco de shows, exposições agropecuárias e eventos culturais que celebram a identidade cultural do Cariri cearense. Durante a Expocrato, uma das maiores feiras agropecuárias do Nordeste, o parque se transforma em um centro de negócios, entretenimento e valorização da cultura regional, atraindo visitantes de todo o país. Com ampla infraestrutura, o espaço representa a força do agronegócio e das tradições rurais que são parte fundamental da história do Crato."
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