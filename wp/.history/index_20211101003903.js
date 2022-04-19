var bt = document.getElementById("sub");
bt.addEventListener("click", function () {
    link = document.getElementById("ylink").value;
    target = document.getElementById("iframe");
    target.setAttribute("src", link);
    
})