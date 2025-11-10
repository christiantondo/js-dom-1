console.log("JS ok")


document.querySelector("#onoff").addEventListener("click", () => {
    
    // Gestione lampadina
    document.querySelector("#whitelamp").classList.toggle("lamp-visible");
    document.querySelector("#whitelamp").classList.toggle("lamp-invisible");
    document.querySelector("#yellowlamp").classList.toggle("lamp-invisible");
    document.querySelector("#yellowlamp").classList.toggle("lamp-visible");
    
    // Gestione button
    const buttoncontent = document.getElementById("onoff").innerHTML;
    
    if (buttoncontent == "Accendi") {
        document.getElementById("onoff").innerHTML = "Spegni"
    } else {
        document.getElementById("onoff").innerHTML = "Accendi"
    }
    
    // Design button
     document.querySelector("#onoff").classList.toggle("btn-warning");
     document.querySelector("#onoff").classList.toggle("btn-outline-warning");

     // Body light
     document.querySelector("#body-light").classList.toggle("bg-dark");
     document.querySelector("#body-light").classList.toggle("bg-warning");
});