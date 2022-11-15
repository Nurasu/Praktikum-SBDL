<?php
/*koneksi ke database*/
$DB = new mysqli("localhost", "root", "", "data_mhs_sif"); //sesuaikan
if (mysqli_connect_errno()) {
    echo ("failed: " . mysqli_connect_error());
    exit();
}

$varData = json_decode($_GET['parData']);
$varJmlData = sizeof($varData);
for ($varIndex = 0; $varIndex < $varJmlData; $varIndex++) {
    echo "nim: " . $varData[$varIndex]->nim . "<br/>";
    echo "nama: " . $varData[$varIndex]->nama . "<br/>";
    echo "kd prodi: " . $varData[$varIndex]->kdProdi . "<br/>";
    echo "<br/>";
}
echo"cek db". "<br/>";
echo "Jumlah Data: " . sizeof($varData);
/*query simpan data ke tabel*/
$simpanData = $DB->prepare("insert into mhs_2021(nim, nama,
kdProdi) values (?, ?, ?)");
$simpanData->bind_param('sss', $varKode, $varNama, $varProdi);
$varIndex = 0;
while ($varIndex < $varJmlData) {
    $varKode = $varData[$varIndex]->nim;
    $varNama = $varData[$varIndex]->nama;
    $varProdi = $varData[$varIndex]->kdProdi;
    if ($simpanData->execute()) {
        echo "<br/>Success";
        header("location:index.html");
    } else {
        die("<br/>Failed: " . htmlspecialchars($simpanData->error));
    };
    $varIndex++;
}
