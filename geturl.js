var url = window.location.href

if(url.startsWith("https://www.tiktok.com/@existential_dreaddd?lang=en"))
{
i=0
document.querySelectorAll(".video-feed-item-wrapper").forEach(item =>
{

window.open(item.getAttribute("href"))

})


}
else {
var video = document.querySelector("video");


var src =video.getAttribute("src")

var elm = document.createElement("a")

elm.setAttribute("href",src)
elm.setAttribute("download","")
elm.setAttribute("id","pls-download-me")

document.querySelector(".tt-video-meta-caption").appendChild(elm)

document.getElementById("pls-download-me").click()


}


