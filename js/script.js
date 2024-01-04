// Mini-Project RevoU
// I Nyoman Marcel Mahardika 

function hitungLuas() {
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(base) || isNaN(height)) {
        document.getElementById("luasResult").innerHTML = "Masukkan nilai untuk alas dan tinggi <br><br>";
        document.getElementById("luasResult").style.display = "block";
    } else {
        var luas = 0.5 * base * height;
        document.getElementById("luasResult").innerHTML = "L = 1/2 x a x t <br> L = 1/2 x " + base + " x " + height + "<br> L = " + luas.toFixed(2) + "<br><br>";
        document.getElementById("luasResult").style.display = "block";
    }
}

function hitungKeliling() {
    var side1 = parseFloat(document.getElementById("side1").value);
    var side2 = parseFloat(document.getElementById("side2").value);
    var side3 = parseFloat(document.getElementById("side3").value);

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        document.getElementById("kelilingResult").innerHTML = "Masukkan nilai untuk panjang semua sisi <br><br>";
        document.getElementById("kelilingResult").style.display = "block";
    } else {
        var keliling = side1 + side2 + side3;
        document.getElementById("kelilingResult").innerHTML = "K = S1 + S2 + S3 <br> K = " + side1 + " + " + side2 + " + " + side3 + "<br> K = " + keliling.toFixed(2);
        document.getElementById("kelilingResult").style.display = "block";
    }
}


function showLuas() {
    document.getElementById("luas").style.display = "block";
    document.getElementById("keliling").style.display = "none";
}
function showKeliling() {
    document.getElementById("luas").style.display = "none";
    document.getElementById("keliling").style.display = "block";
}


function validateInput(id) {
    var input = document.getElementById(id);
    input.value = input.value.replace(/[^\d.,]/g, '');
}
document.getElementById('base').addEventListener('input', function() {
    validateInput('base');
});
document.getElementById('height').addEventListener('input', function() {
    validateInput('height');
});
document.getElementById('side1').addEventListener('input', function() {
    validateInput('side1');
});
document.getElementById('side2').addEventListener('input', function() {
    validateInput('side2');
});
document.getElementById('side3').addEventListener('input', function() {
    validateInput('side3');
});

function formReset() {
    document.getElementById('formLuas').reset();
    document.getElementById('luasResult').style.display = "none";
    document.getElementById('formKeliling').reset();
    document.getElementById('kelilingResult').style.display = "none";
}