let judulBuku = [];
let penulisBuku = [];
let tahunBuku = [];
function tambahBuku() {
    let a = document.getElementById("judul").value.trim();
    let b = document.getElementById("penulis").value.trim();
    let c = document.getElementById("tahun").value.trim();
    //trim() referensi dari GPT, fungsinya agar spasi dianggap kosong atau tidak dianggap

    if (a === "" || b === "" || c === "") {
        alert("Judul, Penulis dan Tahun Terbit Wajib Diisi");
        return;
    }

    judulBuku.push(a);
    penulisBuku.push(b);
    tahunBuku.push(c);

    let teks = "";
    for (let i = 0; i < judulBuku.length; i++) {
        teks += "<tr><td>" + (i+1) + ".</td><td>" + judulBuku[i] + "</td><td>" + penulisBuku[i] + "</td><td>" + tahunBuku[i] + "</td></tr>";
    }

        document.getElementById("hasil").innerHTML = teks;
    }

function cariBuku() {
    let input = document.getElementById("cariBuku").value.toLowerCase();
    let tbody = document.getElementById("hasil");
    let rows = tbody.getElementsByTagName("tr");

    let found = false;

    for (let row of rows) {
        row.style.backgroundColor = "";
    }

    for (let row of rows) {
        let judul = row.cells[1].innerText.toLowerCase();
        if (judul.includes(input) && input !== "") {
            row.style.backgroundColor = "#FFD8A8";
            found = true;
        }
    }

    if (!found && input !== "") {
        alert("Buku Tidak Ditemukan")
    }

}

function hapusBuku() {
    let tbody = document.querySelector("#table tbody");
    if (tbody.lastElementChild) {
        tbody.removeChild(tbody.lastElementChild);
    } else {
        alert("Tidak ada buku yang dapat dihapus")
    }

    //hapus data terakhir dari aray juga, tidak hanya di tabel 
    //referensi dari chatgpt
    judulBuku.pop()
    penulisBuku.pop()
    tahunBuku.pop()
} 