# Landing Page — Dra. Viviane Jarek (Tricologia)

Landing page de divulgação da fisioterapeuta tricologista **Dra. Viviane Jarek**, com seções de apresentação da especialidade, benefícios, sobre a profissional e formulário de contato.

Projeto 100% estático (HTML + CSS + JS puro): basta abrir o `index.html` em qualquer navegador — não precisa de build, servidor ou instalação.

## Estrutura

```
index.html      # Página principal (todas as seções)
style.css       # Estilos — tema magenta, responsivo
script.js       # Menu mobile, header no scroll, envio simulado do formulário
.gitignore
assets/         # Imagens otimizadas
    favicon.png        # Ícone do site (256×256)
    logo-vivi2.png     # Logotipo usado no cabeçalho (256×256)
    logo-vivi.png      # Variação do logotipo (não usada no HTML atualmente)
    vivi-lend-1.jpeg   # Foto da hero section
    vivi-lend-2.jpeg   # Foto da seção "Sobre Mim"
```

## Tecnologias

- HTML5
- CSS3 (custom properties, Grid, Flexbox, media queries)
- JavaScript vanilla
- [Font Awesome 6](https://fontawesome.com/) — ícones
- [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)

## Revisão de código (correções aplicadas)

- Corrigido "Dr." → "Dra." e "Clinica" → "Clínica" no cabeçalho
- Imagens movidas para `assets/` e renomeadas sem espaços
- Imagens otimizadas: favicon 1,5 MB → 33 KB; logo do cabeçalho 1,5 MB → 39 KB
- Inputs do formulário ganharam `name` (sem isso, nenhum dado seria enviado ao integrar um backend)
- Badge flutuante do mobile corrigido com `translate` CSS (o `transform` era sobrescrito pela animação `float`, deixando o badge deslocado)
- Removida variável morta `lastScroll` e o `align-self` contraditório do botão do formulário
- `window.pageYOffset` (deprecado) → `window.scrollY`
- Adicionados `meta description`, `loading="lazy"` nas imagens abaixo da dobra e `aria-label` nos campos do formulário

## Pendências antes de publicar (dados de exemplo)

- Telefone, e-mail e endereço são placeholders
- "CRM 12345" — fisioterapeuta tem registro no CREFITO; substituir pelo número real
- Links de redes sociais do rodapé apontam para `#`
- O formulário de contato é simulado (apenas visual). Para receber mensagens, integrar a um backend ou serviço (ex.: Formspree)
