window.onload = function() {
  const checkbox = document.getElementById('termosCheckbox');
  const botao = document.getElementById('btnEnviar');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      botao.style.display = 'inline-block';
    } else {
      botao.style.display = 'none';
    }
  });
};
