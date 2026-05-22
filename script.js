// ===============================
// Script JavaScript para Agro Forte
// ===============================

// ===== Modo Escuro =====
const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = 'Modo Claro';
    } else {
        darkModeBtn.textContent = 'Modo Escuro';
    }
});

// ===== Folders Interativos =====
const folderButtons = document.querySelectorAll('.folder-btn');

folderButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = (content.style.display === 'block') ? 'none' : 'block';
    });
});

// ===== Validação e Mensagens Dinâmicas do Formulário =====
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita envio real

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('