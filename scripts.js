function calculatetip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let servicequal = document.getElementById('servicequal').value;
    let numpeople = document.getElementById('people').value;

    if (bill == '' | servicequal == 0){
        alert("por favor, prencha os valores")
        return;
    }

    if (numpeople == "" | numpeople <= 1) {
        numpeople = 1;
        document.getElementById('each').style.display = "nome"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * servicequal) / numpeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totaltip').style.display = "block";
    }

    document.getElementById('totaltip').style.display = "none";
    document.getElementById('each').style.display = "none";

    document.getElementById('tipsform').addEventListener('submit', calculatetip);