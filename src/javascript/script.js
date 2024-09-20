$(document).ready(function() {
    $('#mobile_btn').on('click',function(){
        $('#mobile_menu').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x')
    });


    const headerHeight = $('header').outerHeight(); // Obter a altura do cabeçalho

    // Adicionar comportamento de clique na navegação
    $('.nav-item a').on('click', function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão de navegação

        const targetId = $(this).attr('href'); // Obter o ID do alvo
        const targetSection = $(targetId); // Selecionar a seção alvo

        // Fazer a rolagem até a seção, levando em consideração a altura do cabeçalho
        $('html, body').animate({
            scrollTop: targetSection.offset().top - headerHeight // Ajuste do scroll
        }, 500); // Tempo da animação de rolagem (em milissegundos)
    });







    const sections = $('section');
const navItems = $('.nav-item');

$(window).on('scroll', function(){
    const header = $('header');
    const scrollPosition = $(window).scrollTop(); // Usar scrollTop direto

    let activeSectionIndex = 0;

    // Ajustar header com sombra e background ao rolar
    if (scrollPosition <= 0){
        header.css('box-shadow', 'none');
    } else {
        header.css({
            'box-shadow': '5px 1px 5px rgba(0, 0, 0, 0.1)',
            'background-color': 'rgba(255, 249, 234, 0.8)', // Cor de fundo com transparência
            'backdrop-filter': 'blur(10px)',  // Efeito de desfoque
        });
    }

    // Checar em qual seção estamos
    sections.each(function(i) {
        const section = $(this);
        const sectionTop = section.offset().top - 108;
        const sectionBottom = sectionTop + section.outerHeight();

        // Checar se estamos dentro da seção
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionIndex = i;
            return false; // Para o loop quando encontrar a seção ativa
        }
    });

    // Atualizar o item de navegação ativo
    navItems.removeClass('active');
    $(navItems[activeSectionIndex]).addClass('active');
});

    ScrollReveal().reveal('#cta', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#banner', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%'
        
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })



/////////////////////carrosel portfólio////////////////////////////////

    var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()

   

});