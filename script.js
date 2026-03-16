function clearForm() {
  if (!confirm('Clear all entered values?')) return;
  document.getElementById('clientName').value = '';
  document.querySelectorAll('[data-total]').forEach(inp => inp.value = '');
  recalc();
}

const dateInput = document.getElementById('formDate');
const today = new Date();
dateInput.value = today.toISOString().slice(0, 10);

const yearInput = document.getElementById('year');
yearInput.value = today.getFullYear();

function recalc() {
  const inputs = document.querySelectorAll('[data-total]');
  let sum = 0;
  inputs.forEach(inp => {
    const v = parseFloat(inp.value);
    if (!isNaN(v) && v > 0) sum += v;
  });
  document.getElementById('totalDisplay').textContent =
    '$' + sum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

document.querySelectorAll('[data-total]').forEach(inp => {
  inp.addEventListener('input', recalc);
});
