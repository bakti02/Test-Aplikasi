// Tampilkan semua transaksi pending
function loadPendingTransactions() {
  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  const pending = transactions.filter(tx => tx.status === 'pending');
  
  pending.forEach(tx => {
    const row = `
      <tr>
        <td>${tx.id}</td>
        <td>${tx.user_email}</td>
        <td>${tx.type}</td>
        <td>${tx.amount} ${tx.crypto}</td>
        <td>
          <button onclick="approveTransaction(${tx.id})">Approve</button>
        </td>
      </tr>
    `;
    document.getElementById('transactions-table').innerHTML += row;
  });
}

// Approve transaksi
function approveTransaction(id) {
  const transactions = JSON.parse(localStorage.getItem('transactions'));
  const txIndex = transactions.findIndex(tx => tx.id === id);
  transactions[txIndex].status = 'completed';
  localStorage.setItem('transactions', JSON.stringify(transactions));
  alert('Transaksi disetujui!');
}
