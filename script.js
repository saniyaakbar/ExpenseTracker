var btn = document.querySelector("button");
var tble = document.querySelector("#display")
var row = 1;

btn.addEventListener("click", function(){
    var nme = document.querySelector("#nme").value
    var dte = document.querySelector("#dte").value
    var qty = document.querySelector("#qty").value
    var cost = document.querySelector("#cost").value


    console.log(nme)
    console.log(dte)
    console.log(qty)

    if(!nme || !dte || !qty || !cost){
        alert("Please fill all details")
        return;
    }
    else{
        var newRow = tble.insertRow(row)

        var clm1 = newRow.insertCell(0)
        var clm2 = newRow.insertCell(1)
        var clm3 = newRow.insertCell(2)
        var clm4 = newRow.insertCell(3)

        clm1.textContent = nme
        clm2.textContent = dte
        clm3.textContent = qty
        clm4.textContent = cost

        var sum = 0;
        sum = clm4
    }
})