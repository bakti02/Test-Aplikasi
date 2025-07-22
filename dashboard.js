// Ambil data user dari localStorage (simulasi login)
document.getElementById("username").textContent = 
    localStorage.getItem("user") || "Pengguna";

// Logout
document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "index.html";
});

// Fungsi Top Up (simulasi)
function topup() {
    const amount = prompt("Masukkan jumlah top up (IDR):");
    if (amount) {
        alert(`Top up ${amount} IDR berhasil! (simulasi)`);
        // Di sini nanti bisa tambah logika update saldo
    }
}

// Fetch harga kripto (simulasi - nanti bisa ganti dengan API CoinGecko)
function updateCryptoPrices() {
    // Harga dummy
    document.getElementById("btc-price").textContent = "500,000,000";
    document.getElementById("eth-price").textContent = "30,000,000";
}

updateCryptoPrices();
