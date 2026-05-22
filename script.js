// ==========================================
// SELEÇÃO DE ELEMENTOS DO DOM
// ==========================================
const btnDarkMode = document.getElementById('btn-dark-mode');
const body = document.body;
const folderHeaders = document.querySelectorAll('.folder-header');
const formContato = document.getElementById('form-contato');
const msgDinamica = document.getElementById('mensagem-dinamica');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');

// ==========================================
// FUNCIONALIDADE 1: MODO ESCURO
// ==========================================
btnDarkMode.addEventListener('click', function() {
    // A classe .dark-mode é adicionada/removida do body
    body.classList.toggle('dark-mode');
    
    // Altera o texto do botão de acordo com o modo atual
    if (body.classList.contains('dark-mode')) {
        btnDarkMode.textContent = 'Modo Claro';
    } else {
        btnDarkMode.textContent = 'Modo Escuro';
    }
});

// ==========================================
// FUNCIONALIDADE 2: FOLDERS INTERATIVOS (ACCORDION)
// ==========================================
folderHeaders.forEach(header => {
    header.addEventListener('click', function() {
        // Seleciona o conteúdo que é "irmão" do botão clicado
        const content = this.nextElementSibling;
        const icone = this.querySelector('span');

        // Alterna a classe 'show' que faz o CSS expandir o elemento
        content.classList.toggle('show');

        // Animação/Mudança de ícone (+ para -)
        if (content.classList.contains('show')) {
            icone.textContent = '-';
        } else {
            icone.textContent = '+';
        }
    });
});

// ==========================================
// FUNCIONALIDADE 3: VALIDAÇÃO DE FORMULÁRIO E MENSAGEM DINÂMICA
// ==========================================
formContato.addEventListener('submit', function(evento) {
    // Impede a página de recarregar
    evento.preventDefault(); 
    
    const nomeValor = nomeInput.value.trim();
    const emailValor = emailInput.value.trim();

    // Reset de classes na mensagem
    msgDinamica.className = ''; 

    // Validação Simples
    if (nomeValor === '' || emailValor === '') {
        // Erro
        msgDinamica.textContent = 'Por favor, preencha todos os campos!';
        msgDinamica.classList.add('erro');
        
        // Animação de tremor no formulário (opcional)
        formContato.style.transform = 'translateX(10px)';
        setTimeout(() => { formContato.style.transform = 'translateX(-10px)'; }, 100);
        setTimeout(() => { formContato.style.transform = '