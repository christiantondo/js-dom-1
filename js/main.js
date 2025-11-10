console.log("JS ok")


document.querySelector("#button").addEventListener("click", () => {
    console.log("lampadina accesa");

    document.querySelector("#whitelamp").classList.toggle("lamp-visible");
    document.querySelector("#whitelamp").classList.toggle("lamp-invisible");
    document.querySelector("#yellowlamp").classList.toggle("lamp-invisible");
    document.querySelector("#yellowlamp").classList.toggle("lamp-visible");

});