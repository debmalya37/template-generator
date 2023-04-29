const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");

async function getcontent(url) {
  const loadingTask = pdfjsLib.getDocument(url);
  const pdf = await loadingTask.promise;
  const page = await pdf.getPage(1);
  return await page.getTextContent();
}

async function getItems(src) {
  const content = await getcontent(src);
  const items = content.items.map((item) => {
    console.log(item.str);
    console.log(item.fontName);
    console.log(item.transform);
  });
  return items;
}

getItems("Debmalya-Sen.pdf");
