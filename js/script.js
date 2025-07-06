document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DO MENU HAMBÚRGUER ---
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const itemMenu = document.querySelector('.item-menu');

    if (menuHamburguer && itemMenu) {
        menuHamburguer.addEventListener('click', () => {
            itemMenu.classList.toggle('ativo');
        });
    }

    // --- LÓGICA DA PÁGINA DE DETALHES DO PRODUTO ---
    // Esta verificação garante que o código abaixo só rode na página de produto
    if (document.getElementById('detalhe-produto-main')) {
        const params = new URLSearchParams(window.location.search);
        
        const imgSrc = params.get('img');
        const nome = params.get('nome');
        const preco = params.get('preco');
        const total = params.get('total');

        if (imgSrc) {
            document.getElementById('produto-img').src = imgSrc;
            document.getElementById('produto-img').alt = nome;
            document.getElementById('produto-nome').textContent = nome;
            document.getElementById('produto-preco-atual').textContent = preco;
            document.getElementById('produto-preco-original').textContent = total;
        }

        const botaoComprar = document.getElementById('botao-comprar-detalhe');
        if (botaoComprar) {
            botaoComprar.addEventListener('click', () => {
                alert(`'${nome || "Produto"}' comprado com sucesso!`);
            });
        }

        const botaoCarrinho = document.getElementById('botao-carrinho');
        if (botaoCarrinho) {
            botaoCarrinho.addEventListener('click', () => {
                alert(`'${nome || "Produto"}' adicionado ao carrinho!`);
            });
        }
    }
    
    // --- LÓGICA DE VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            validateForm();
        });
    }

    function validateForm() {
        let isValid = true;
        const nomeInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');
        const mensagemInput = document.getElementById('mensagem');
        const nomeError = document.getElementById('nome-error');
        const emailError = document.getElementById('email-error');
        const mensagemError = document.getElementById('mensagem-error');
        const successMessage = document.getElementById('form-success');

        nomeError.textContent = '';
        emailError.textContent = '';
        mensagemError.textContent = '';
        successMessage.style.display = 'none';

        if (nomeInput.value.trim() === '') {
            nomeError.textContent = 'Por favor, digite seu nome.';
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Por favor, digite seu e-mail.';
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Por favor, digite um e-mail válido.';
            isValid = false;
        }

        if (mensagemInput.value.trim() === '') {
            mensagemError.textContent = 'Por favor, digite sua mensagem.';
            isValid = false;
        }

        if (isValid) {
            console.log('Formulário válido! (Envio simulado)');
            contactForm.reset();
            successMessage.style.display = 'block';
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // --- EFEITOS INTERATIVOS ---
    const projetosDestaque = document.querySelectorAll('#destaque .projeto');
    projetosDestaque.forEach(projeto => {
        projeto.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#eee';
            this.style.transition = 'background-color 0.3s ease';
        });
        projeto.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#fff';
        });
    });

    const habilidadesSection = document.getElementById('habilidades');
    if (habilidadesSection) {
        habilidadesSection.style.opacity = 0;
        setTimeout(() => {
            habilidadesSection.style.opacity = 1;
            habilidadesSection.style.transition = 'opacity 1s ease-in-out';
        }, 500);
    }

});