console.log('script starts');

function onclick_fetch_button() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://47.95.31.105:8080/dynamic-content", false);
    xmlHttp.send(null);
    const dynamic_content = document.getElementById("dynamic-content");
    dynamic_content.innerHTML = xmlHttp.responseText
}