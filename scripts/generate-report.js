const { merge } = require("mochawesome-merge");
const generator = require("mochawesome-report-generator");
const fs = require("fs");

async function generateReport() {
  try {
    console.log("🧩 Iniciando merge dos relatórios JSON...");

    // Verifica se há arquivos .json antes de tentar mesclar
    const reportFiles = fs.readdirSync("cypress/reports").filter(f => f.endsWith(".json"));
    if (reportFiles.length === 0) {
      throw new Error("Nenhum arquivo JSON encontrado em cypress/reports/");
    }

    // Faz o merge dos arquivos
    const jsonReport = await merge({
      files: ["cypress/reports/*.json"],
    });

    // Salva o arquivo JSON final
    fs.writeFileSync("cypress/reports/report.json", JSON.stringify(jsonReport, null, 2));
    console.log("✅ Arquivo report.json criado com sucesso.");

    // Gera o relatório HTML
    console.log("📊 Gerando relatório HTML...");
    await generator.create(jsonReport, {
      reportDir: "cypress/reports/html",
      reportTitle: "Relatório de Testes - SauceDemo",
      reportFilename: "mochawesome", // <-- 🔹 Garante o nome fixo mochawesome.html
      inlineAssets: true,
      overwrite: true,
    });

    console.log("🎉 Relatório gerado com sucesso em: cypress/reports/html/mochawesome.html");
  } catch (err) {
    console.error("❌ Erro ao gerar o relatório:", err);
    process.exit(1);
  }
}

generateReport();
