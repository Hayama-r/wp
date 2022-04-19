var bt = document.getElementById("sub");
    bt.addEventListener("click", function () {
    text = document.getElementById("ylink");
        link = text.value;
        link = link.replace('watch?v=', 'embed/');
    target = document.getElementById("iframe");
    target.setAttribute("src", link);
    
})