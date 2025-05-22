let pageDir = "pages/";

function loadContent(page) {
    let fullpath = pageDir + page + ".html";
    console.log(fullpath);
    fetch(fullpath)
        .then(response => response.text())
        .then(data => document.getElementById("content").innerHTML = data)
        .catch(error => console.error("Error loading content:", error));
}