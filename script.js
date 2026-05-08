function clearForm() {
  if (!confirm('Clear all entered values?')) return;
  document.getElementById('clientName').value = '';
  document.getElementById('incomeInput').value = '';
  document.querySelectorAll('[data-total], .other-label').forEach(inp => inp.value = '');
  recalc();
}

const dateInput = document.getElementById('formDate');
const today = new Date();
dateInput.value = today.toISOString().slice(0, 10);


function recalc() {
  const incomeVal = parseFloat(document.getElementById('incomeInput').value);
  const incomeSum = (!isNaN(incomeVal) && incomeVal > 0) ? incomeVal : 0;

  let expenseSum = 0;
  document.querySelectorAll('[data-total]').forEach(inp => {
    const v = parseFloat(inp.value);
    if (!isNaN(v) && v > 0) expenseSum += v;
  });

  const balance = incomeSum - expenseSum;
  const fmt = n => '$' + Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  document.getElementById('incomeDisplay').textContent = fmt(incomeSum);
  document.getElementById('totalDisplay').textContent = fmt(expenseSum);

  const balanceEl = document.getElementById('balanceDisplay');
  balanceEl.textContent = (balance < 0 ? '-' : '') + fmt(balance);
  balanceEl.className = 'summary-value ' + (incomeSum === 0 && expenseSum === 0 ? 'balance-neutral' : balance >= 0 ? 'balance-positive' : 'balance-negative');
}

document.getElementById('incomeInput').addEventListener('input', recalc);
document.querySelectorAll('[data-total]').forEach(inp => {
  inp.addEventListener('input', recalc);
});
