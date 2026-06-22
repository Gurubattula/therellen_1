import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const htmlPath = path.join(rootDir, "brochure", "index.html");
const outputPath = path.join(rootDir, "public", "downloads", "therallen-brochure.pdf");

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

await page.goto(`file://${htmlPath.replace(/\\/g, "/")}`, {
  waitUntil: "networkidle0",
});

await page.pdf({
  path: outputPath,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

await browser.close();

console.log(`Brochure generated: ${outputPath}`);
