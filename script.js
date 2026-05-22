// Aguarda o DOM estar totalmente carregado para evitar erros de execução
document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       1. FUNCIONALIDADE: Modo Escuro (Dark Mode)
       ========================================================================== */
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    themeToggleBtn.addEventListener("click", () => {
        // Verifica o tema atual no atributo do documento
        const currentTheme = document.documentElement.getAttribute("data-theme");
        
        if (currentTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
            themeToggleBtn.textContent = "🌙 Modo Escuro";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            themeToggleBtn.textContent = "☀️ Modo Claro";
        }
    });

    /* ==========================================================================
       2. FUNCIONALIDADE: Mensagem Dinâmica (Botão Interativo)
       ========================================================================== */
    const btnBoasVindas = document.getElementById("btn-boas-vindas");
    const msgDinamica = document.getElementById("mensagem-dinamica");

    btnBoasVindas.addEventListener("click", () => {
        // Mensagens dinâmicas aleatórias sobre sustentabilidade
        const fatosABC = [
            "O Plantio Direto pode reduzir em até 60% o uso de combustível nos tratores!",
            "A tecnologia ILPF pode reter até mais de 10 toneladas de CO2 por hectare ao ano.",
            "Bioinsumos reduzem os custos químicos e ajudam a manter os polinizadores vivos!"
        ];
        
        // Seleção aleatória do índice
        const randomIndex = Math.floor(Math.random() * fatosABC.length);
        
        // Altera o conteúdo e exibe removendo a classe utilitária do CSS
        msgDinamica.textContent = fatosABC[randomIndex];
        msgDinamica.classList.remove("hidden");
    });

    /* ==========================================================================
       3. FUNCIONALIDADE: Folders Interativos (Accordion / Sanfona)
       ========================================================================== */
    const folders = document.querySelectorAll(".folder");

    folders.forEach(folder => {
        folder.addEventListener("click", () => {
            // Obtém o ID do conteúdo correspondente mapeado no data-attribute
            const targetId = folder.getAttribute("data-target");
            const targetContent = document.getElementById(targetId);

            // Seletor para fechar outros que estejam abertos (Efeito Sanfona opcional)
            document.querySelectorAll(".folder-content").forEach(content => {
                if (content.id !== targetId) {
                    content.classList.add("hidden");
                }
            });

            // Altera o estado (Toggle) do atual clicado
            if (targetContent.classList.contains("hidden")) {
                targetContent.classList.remove("hidden");
            } else {
                targetContent.classList.add("hidden");
            }
        });
    });

    /* ==========================================================================
       4. FUNCIONALIDADE: Validação Simples de Formulário
       ========================================================================== */
    const form = document.getElementById("newsletter
