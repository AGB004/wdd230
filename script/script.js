let lastupdate = document.querySelector("#lastupdate");

let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

/* document.getElementById("lastupdate").textContent = new Date().toLocaleDateString("en-US, options");*/
lastupdate.textContent = new Date().toLocaleDateString("en-US, options");