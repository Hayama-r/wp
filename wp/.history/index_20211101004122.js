var bt = document.getElementById("sub");
bt.addEventListener("click", function () {
    ylink = document.getElementById("ylink");
    link = ylink.value;
    target = document.getElementById("iframe");
    target.setAttribute("src", link);
    
})