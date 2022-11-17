/*
  ここにGoogle Apps Script側のコードを記述します
*/

export function doGet() {
  return HtmlService.createHtmlOutputFromFile("hosting/index.html")
    .addMetaTag("viewport", "width=device-width, initial-scale=1")
    .setTitle("CacheClearTool")
    .setFaviconUrl(
      "https://drive.google.com/uc?id=1oOJc4FQZCvSlb4K02ggdd312TzEkX9TM.png"
    );
}
