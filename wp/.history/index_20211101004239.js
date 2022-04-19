var bt = document.getElementById("sub");
    bt.addEventListener("click", function () {
    text = document.getElementById("ylink");
    link = text.value;
    target = document.getElementById("iframe");
    target.setAttribute("src", link);
    
})