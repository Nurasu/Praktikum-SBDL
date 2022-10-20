var data = [
                {tahun:2000,jenis:"padi",hasil:20},
				{tahun:2001,jenis:"padi",hasil:40},
				{tahun:2002,jenis:"padi",hasil:60},
				{tahun:2003,jenis:"padi",hasil:50},
				{tahun:2004,jenis:"padi",hasil:30},
				{tahun:2005,jenis:"padi",hasil:40},
				{tahun:2006,jenis:"padi",hasil:40},
				{tahun:2007,jenis:"padi",hasil:50},
				{tahun:2000,jenis:"jagung",hasil:30},
				{tahun:2001,jenis:"jagung",hasil:40},
				{tahun:2002,jenis:"jagung",hasil:40},
				{tahun:2003,jenis:"jagung",hasil:50},
				{tahun:2004,jenis:"jagung",hasil:20},
				{tahun:2005,jenis:"jagung",hasil:40},
				{tahun:2006,jenis:"jagung",hasil:60},
				{tahun:2007,jenis:"jagung",hasil:50}
    
  ]; //isi data produksi.json

  function hapus(){ 

      document.getElementById("tbldata").innerHTML=""; 
      } //fungsi hapus
      
  function btnShowTbl() {
    var tabledata = document.getElementById("tbldata");
    tabledata.setAttribute("style", "display: revert;");

    if (tabledata.childElementCount <= 1) {
      for (i = 0; i < data.length; i++) {
        baris = document.createElement("tr");

        isi = document.createElement("td");
        isi.setAttribute("id", "showTahun"); //
        isi.innerText = data[i].tahun;
        baris.appendChild(isi);

        isi = document.createElement("td");
        isi.setAttribute("id", "showJenis"); //
        isi.innerText = data[i].jenis;
        baris.appendChild(isi);

        isi = document.createElement("td");
        isi.setAttribute("id", "showHasil"); //
        isi.innerText = data[i].hasil;
        baris.appendChild(isi);
        tabledata.appendChild(baris);
      }
    }

    var h = document.querySelectorAll(
      "#showTahun, #showJenis, #showHasil, #thTahun, #thJenis, #thHasil"
    );
    for (var i = 0; i < h.length; i++) {
      h[i].setAttribute("style", "display:revert;");
    }
  } //fungsi show data

  function btnShowTahun() {
    var e = document.querySelectorAll("#showTahun");
    for (var i = 0; i < e.length; i++) {
      e[i].setAttribute("style", "display:revert;");
    }
    var h = document.querySelectorAll("#showJenis, #showHasil");
    for (var i = 0; i < h.length; i++) {
      h[i].setAttribute("style", "display:none;");
    }
    document.getElementById("thTahun").style.display = "revert";
    document.getElementById("thJenis").style.display = "none";
    document.getElementById("thHasil").style.display = "none";
  } //fungsi filter tahun
  function btnShowJenis() {
    var e = document.querySelectorAll("#showJenis");
    for (var i = 0; i < e.length; i++) {
      e[i].setAttribute("style", "display:revert;");
    }
    var h = document.querySelectorAll("#showTahun, #showHasil");
    for (var i = 0; i < h.length; i++) {
      h[i].setAttribute("style", "display:none;");
    }
    document.getElementById("thTahun").style.display = "none";
    document.getElementById("thJenis").style.display = "revert";
    document.getElementById("thHasil").style.display = "none";
  } //fungsi filter jenis
  function btnShowHasil() {
    var e = document.querySelectorAll("#showHasil");
    for (var i = 0; i < e.length; i++) {
      e[i].setAttribute("style", "display:revert;");
    }
    var h = document.querySelectorAll("#showTahun, #showJenis");
    for (var i = 0; i < h.length; i++) {
      h[i].setAttribute("style", "display:none;");
    }
    document.getElementById("thTahun").style.display = "none";
    document.getElementById("thJenis").style.display = "none";
    document.getElementById("thHasil").style.display = "revert";
    /*  document.querySelectorAll("#showTahun").style.display = "none"; */
  } //fungsi filter hasil