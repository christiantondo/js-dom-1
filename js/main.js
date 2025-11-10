console.log("JS ok")


document.querySelector("#button").addEventListener("click", () => {
    console.log("lampadina accesa");

    document.querySelector("#whitelamp").classList.remove("lamp-visible");
    document.querySelector("#whitelamp").classList.add("lamp-invisible");
    document.querySelector("#yellowlamp").classList.remove("lamp-invisible");
    document.querySelector("#yellowlamp").classList.add("lamp-visible");

});