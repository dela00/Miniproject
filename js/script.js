function hitungLuasPersegi ()
{
    var sisi, luas;

    sisi = parseInt(document.getElementById("sisi") .value);
    luas = sisi * sisi;
    document.getElementById("luas") .value = luas;
}

function reset ()
{
    var reset;
    document.getElementById("resetData").reset();
}