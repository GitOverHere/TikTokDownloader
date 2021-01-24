var elm = document.createElement("a")

elm.setAttribute("href",document.querySelector("source").getAttribute("src"))
elm.setAttribute("download","")
elm.setAttribute("id","pls-download-me")

document.querySelector("body").appendChild(elm)
document.getElementById("pls-download-me").click()
window.close()