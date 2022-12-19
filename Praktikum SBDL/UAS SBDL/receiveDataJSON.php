<?php
//Koneksi Database --Untuk proses keep/update data--
    $DB = new mysqli("localhost", "root", "", "data_mhs_sif");
    
    if (mysqli_connect_errno()) {
        echo ("gagal koneksi, pesan kesalahan: " . mysqli_connect_error());
        exit();
    }

    $arr_dt = json_decode($_GET['parData']);
    $arr_jml = sizeof($arr_dt);
    $simpanData = $DB->prepare("INSERT INTO mhs_2021(nim,nama,kdProdi) VALUES (?, ?, ?)");
    $simpanData->bind_param('sss', $nim, $nama, $kdProdi);
    $i = 0;

    while ($i < $arr_jml) {
        $nim = $arr_dt[$i]->nim;
        $nama = $arr_dt[$i]->nama;
        $kdProdi = $arr_dt[$i]->kdProdi;
        
        if ($simpanData->execute()) {
            header("location:sendDataJSON.html");
        } else {
            echo ("<br/>Failed To Save Data");
        };
        $i++;
    }
?>
