// ===== TEMA CLARO/ESCURO =====
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// ===== VALIDAÇÃO DO FORMULÁRIO =====
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    feedback.textContent = '';
    feedback.style.color = '';

    if (nome === '' || email === '' || mensagem === '') {
        feedback.textContent = '❌ Todos os campos são obrigatórios.';
        feedback.style.color = '#d32f2f';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        feedback.textContent = '❌ Digite um e-mail válido (ex: usuario@dominio.com).';
        feedback.style.color = '#d32f2f';
        return;
    }

    feedback.textContent = '✅ Mensagem enviada com sucesso!';
    feedback.style.color = '#2e7d32';
    form.reset();

    setTimeout(() => {
        feedback.textContent = '';
    }, 5000);
});