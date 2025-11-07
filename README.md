# 🧠 Norminette Prettier + ESLint Setup

Este repositório tem como objetivo **automatizar parte das regras da Norminette** da 42, unindo:

- **Prettier** → para formatar o código conforme o estilo da Norminette  
- **ESLint com regras customizadas** → para avisar quando há:
  - Mais de **5 funções por arquivo**
  - Funções com mais de **25 linhas**

> ⚠️ Este setup **não substitui** a `norminette`. Ele ajuda a manter o código organizado e a evitar erros de estilo antes da submissão.

---

## 📦 Estrutura do projeto


```bash
project/
│
├── .prettierrc.json # Regras de formatação (Norminette style)
├── .eslintrc.json # Configuração do ESLint
├── eslint-rules/
│ └── norminette-checks.js # Regras personalizadas de verificação
└── src/
└── main.c # Seu código C
```

## ⚙️ Instalação

1. **Inicializa o projeto**
   ```bash
   npm init -y
   ```
2. **Instala as dependências**
   ```bash
    npm install --save-dev prettier eslint prettier-plugin-c
   ```

3. **Adiciona o plugin de regras personalizadas**
- Cria a pasta eslint-rules/ e o arquivo norminette-checks.js com o seguinte conteúdo:

<a href= "https://github.com/SantanderNycz/prettienette/blob/main/eslint-rules/norminette-checks.js">ESLint Rules</a>

## 🧩 Arquivos de configuração
*.prettierrc.json*

- Configura o Prettier para imitar o estilo da Norminette:

<a href= "https://github.com/SantanderNycz/prettienette/blob/main/.prettierrc.json">Prettier</a>

###


*.eslintrc.json*

Faz o ESLint usar o processador que analisa os arquivos .c e .h.
<a href= "https://github.com/SantanderNycz/prettienette/blob/main/.eslintrc.json">ESLint</a>


## 🚀 Como usar
- 1️⃣ Formatar com Prettier

Formata automaticamente conforme o padrão da Norminette:
```bash
npx prettier --write src/*.c
```

- 2️⃣ Verificar regras da Norminette

Roda o ESLint para checar limites de funções e linhas:
```bash
npx eslint src/*.c
```

## 🧩 Exemplo de saída:

--- Norminette Alerts ---
- ⚠️  src/main.c: função nº 1 tem 31 linhas (máx: 25 permitidas)
- ❌ src/main.c: contém 7 funções (máx: 5 permitidas pela Norminette)
--------------------------

## 🧠 Dica para VSCode

Adiciona no arquivo .vscode/settings.json:

```
{
  "[c]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.insertSpaces": false,
    "editor.tabSize": 4,
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true
  }
}
```

Assim o código será formatado automaticamente ao salvar — no padrão da Norminette.

✍️ Autor

Leonardo (SantanderNycz)
Desenvolvedor e estudante na 42 Porto

GitHub: @SantanderNycz
