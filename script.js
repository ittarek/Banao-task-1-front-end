async function injectHTML(filePath, elem) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      return;
    }
    const text = await response.text();
    elem.innerHTML = text;
  } catch (err) {
    console.error(err.message);
  }
}

injectHTML("/header/header.html", document.querySelector(".header"));

injectHTML("banner/banner.html", document.querySelector(".banner"));

injectHTML("news/news.html", document.querySelector(".news"));

injectHTML("./footer.html", document.querySelector(".footer"));
