const fs = require("fs");

module.exports = {
  processors: {
    "norminette-check": {
      preprocess(text, filename) {
        const functionRegex = /[a-z_][a-z0-9_]*\s*\([^)]*\)\s*\{/gi;
        const matches = [...text.matchAll(functionRegex)];
        const errors = [];

        if (matches.length > 5) {
          errors.push(
            `❌ ${filename}: contém ${matches.length} funções (máx: 5 permitidas pela Norminette)`
          );
        }

        // Conta linhas por função
        matches.forEach((match, i) => {
          const start = match.index;
          const rest = text.slice(start);
          let open = 0;
          let lines = 0;
          let inFunc = false;

          for (let c = 0; c < rest.length; c++) {
            if (rest[c] === "{") {
              open++;
              inFunc = true;
            } else if (rest[c] === "}") {
              open--;
              if (open === 0 && inFunc) break;
            }
            if (rest[c] === "\n") lines++;
          }

          if (lines > 25) {
            errors.push(
              `⚠️  ${filename}: função nº ${i + 1} tem ${lines} linhas (máx: 25 permitidas)`
            );
          }
        });

        if (errors.length) {
          console.log("\n--- Norminette Alerts ---");
          errors.forEach(e => console.log(e));
          console.log("--------------------------\n");
        }

        return [text];
      },
      postprocess(messages) {
        return [].concat(...messages);
      },
      supportsAutofix: false
    }
  }
};
