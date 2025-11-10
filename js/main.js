console.log("JS ok")


document.querySelector("#button").addEventListener("click", () => {
    console.log("cliccato");

    document.querySelector("#whitelamp").classList.remove("lamp-visible");
    document.querySelector("#whitelamp").classList.add("lamp-invisible");
    document.querySelector("#yellowlamp").classList.remove("lamp-invisible");
    document.querySelector("#yellowelamp").classList.add("lamp-visible");
    

});