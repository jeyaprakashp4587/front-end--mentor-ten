function names(){
    let card = document.getElementById("card-details").value;
    let name = document.getElementById("name");
    name.innerHTML = card;  
}
// card number
function numbers(){
    let num = document.getElementById("card-number").value.replace(/(\d{4})(?!\s|$)/gm, `$1 `)
    .match(/(?:\d{4} ?){0,3}(?:\d{0,4})?/);
    let number = document.getElementById("number");
    number.innerHTML = num;   
}
// card month-year
function months(){
    let mon = document.getElementById("month").value;
    let m = document.getElementById("mo");
    m.innerHTML = mon;
}
function years(){
    let yr = document.getElementById("ye").value;
    let year = document.getElementById("yea");
    year.innerHTML = yr;
}

// cv
function cvcs(){
    let cv = document.getElementById("cvc").value;
    let cvc = document.getElementById("cv");
    cvc.innerHTML = cv;
}
