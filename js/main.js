console.log("JS ok")


document.querySelector("#onoff").addEventListener("click", () => {
    
    document.querySelector("#whitelamp").classList.toggle("lamp-visible");
    document.querySelector("#whitelamp").classList.toggle("lamp-invisible");
    document.querySelector("#yellowlamp").classList.toggle("lamp-invisible");
    document.querySelector("#yellowlamp").classList.toggle("lamp-visible");
    
    const buttoncontent = document.getElementById("onoff").innerHTML;
    
    if (buttoncontent == "Accendi") {
        document.getElementById("onoff").innerHTML = "Spegni"
    } else {
        document.getElementById("onoff").innerHTML = "Accendi"
    }
    
});