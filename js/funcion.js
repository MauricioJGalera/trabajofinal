document.getElementById("opeboton").onclick = function() {
    document.getElementById("ope").style.display = "block";
    document.getElementById("opeboton").style.display = "none";
    document.getElementById("opecerrar").style.display = "block";
}

document.getElementById("opecerrar").onclick = function() {
    document.getElementById("ope").style.display = "none";
    document.getElementById("opeboton").style.display = "block";
    document.getElementById("opecerrar").style.display = "none";
}

document.getElementById("cajeboton").onclick = function() {
    document.getElementById("caje").style.display = "block";
    document.getElementById("cajeboton").style.display = "none";
    document.getElementById("cajecerrar").style.display = "block";
}

document.getElementById("cajecerrar").onclick = function() {
    document.getElementById("caje").style.display = "none";
    document.getElementById("cajeboton").style.display = "block";
    document.getElementById("cajecerrar").style.display = "none";
}

document.getElementById("cartboton").onclick = function() {
    document.getElementById("cart").style.display = "block";
    document.getElementById("cartboton").style.display = "none";
    document.getElementById("cartcerrar").style.display = "block";
}

document.getElementById("cartcerrar").onclick = function() {
    document.getElementById("cart").style.display = "none";
    document.getElementById("cartboton").style.display = "block";
    document.getElementById("cartcerrar").style.display = "none";
}