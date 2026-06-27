// ============================================================
// 1. ALTERNÂNCIA DE TEMA (claro / escuro)
// ============================================================

const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o usuário já escolheu um tema antes (salvo no localStorage)
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'escuro') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️'; // ícone de sol indica que pode voltar ao claro
} else {
    toggleBtn.textContent = '🌙'; // ícone de lua indica que pode ir para o escuro
}

// Quando clicar no botão, alterna a classe 'dark-mode' no body
toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Atualiza o ícone e salva a preferência
    if (body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️';
        localStorage.setItem('tema', 'escuro');
    } else {
        toggleBtn.textContent = '🌙';
        localStorage.setItem('tema', 'claro');
    }
});

// ============================================================
// 2. VALIDAÇÃO DO FORMULÁRIO E SIMULAÇÃO DE ENVIO
// ============================================================

const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

// Quando o formulário for submetido (botão "Enviar")
form.addEventListener('submit', function(event) {
    event.preventDefault(); // IMPEDE o recarregamento da página

    // Pega os valores dos campos e remove espaços extras
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Limpa a mensagem de feedback anterior
    feedback.textContent = '';
    feedback.style.color = '';

    // --- VALIDAÇÃO 1: campos vazios ---
    if (nome === '' || email === '' || mensagem === '') {
        feedback.textContent = '❌ Todos os campos são obrigatórios.';
        feedback.style.color = '#d32f2f'; // vermelho
        return; // interrompe a função aqui
    }

    // --- VALIDAÇÃO 2: formato do e-mail ---
    // Expressão regular simples para validar e-mail (ex: nome@dominio.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        feedback.textContent = '❌ Digite um e-mail válido (ex: usuario@dominio.com).';
        feedback.style.color = '#d32f2f';
        return;
    }

    // --- SE PASSOU NAS VALIDAÇÕES: SIMULA ENVIO ---
    feedback.textContent = '✅ Mensagem enviada com sucesso!';
    feedback.style.color = '#2e7d32'; // verde

    // Limpa os campos do formulário
    form.reset();

    // (Opcional) Após 5 segundos, apaga a mensagem de sucesso
    setTimeout(function() {
        feedback.textContent = '';
    }, 5000);
});