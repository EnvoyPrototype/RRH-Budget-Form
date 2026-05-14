function parseAmount(val) {
  return parseFloat(String(val).replace(/[$,]/g, '')) || 0;
}

function formatCurrency(n) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function attachCurrencyFormatting(input) {
  input.addEventListener('focus', () => {
    input.value = input.value.replace(/[$,]/g, '');
  });
  input.addEventListener('blur', () => {
    const raw = parseFloat(input.value);
    input.value = !isNaN(raw) && input.value.trim() !== '' ? formatCurrency(raw) : '';
    recalc();
  });
}

function clearForm() {
  if (!confirm('Clear all entered values?')) return;
  document.getElementById('clientName').value = '';
  document.getElementById('incomeInput').value = '';
  document.querySelectorAll('[data-total], .other-label').forEach(inp => inp.value = '');
  recalc();
}

const dateInput = document.getElementById('formDate');
dateInput.value = new Date().toISOString().slice(0, 10);

function recalc() {
  const incomeSum = parseAmount(document.getElementById('incomeInput').value);

  let expenseSum = 0;
  document.querySelectorAll('[data-total]').forEach(inp => {
    const v = parseAmount(inp.value);
    if (v > 0) expenseSum += v;
  });

  const balance = incomeSum - expenseSum;
  const neutral = incomeSum === 0 && expenseSum === 0;

  document.getElementById('incomeDisplay').textContent = formatCurrency(incomeSum);
  document.getElementById('totalDisplay').textContent = formatCurrency(expenseSum);

  const balanceEl = document.getElementById('balanceDisplay');
  if (neutral) {
    balanceEl.textContent = formatCurrency(0);
    balanceEl.className = 'summary-value balance-neutral';
  } else if (balance >= 0) {
    balanceEl.textContent = 'Surplus  ' + formatCurrency(balance);
    balanceEl.className = 'summary-value balance-positive';
  } else {
    balanceEl.textContent = 'Deficit  ' + formatCurrency(Math.abs(balance));
    balanceEl.className = 'summary-value balance-negative';
  }
}

const incomeInput = document.getElementById('incomeInput');
attachCurrencyFormatting(incomeInput);
incomeInput.addEventListener('input', recalc);

document.querySelectorAll('[data-total]').forEach(inp => {
  attachCurrencyFormatting(inp);
  inp.addEventListener('input', recalc);
});

// Generate aria-labels from table row text so screen readers announce each field
document.querySelectorAll('.budget-table tr').forEach(row => {
  const catCell = row.querySelector('td.cat');
  const amtInput = row.querySelector('td.amt input');
  if (!catCell || !amtInput) return;
  const label = catCell.querySelector('input') ? 'Other expense' : catCell.textContent.trim();
  if (label) amtInput.setAttribute('aria-label', label);
});
