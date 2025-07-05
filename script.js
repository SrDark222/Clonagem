document.getElementById('cloneForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const url = document.getElementById('url').value.trim();
  const method = document.getElementById('method').value;

  const cloneCss = document.getElementById('cloneCss').checked;
  const cloneJs = document.getElementById('cloneJs').checked;
  const cloneImgs = document.getElementById('cloneImgs').checked;
  const cloneZip = document.getElementById('cloneZip').checked;
  const clonePng = document.getElementById('clonePng').checked;

  const userAgent = document.getElementById('userAgent')?.value || '';
  const delay = Number(document.getElementById('delay')?.value) || 200;
  const depth = Number(document.getElementById('depth')?.value) || 3;

  // Show loading or disable button
  const btn = e.target.querySelector('button');
  btn.disabled = true;
  btn.textContent = 'Clonando...';

  try {
    // Simula chamada à API
    // Aqui você chama backend real, enviando configs pra fazer scraping

    // Fake delay pra demo
    await new Promise(r => setTimeout(r, 1500));

    // Fake retorno
    const fakePreview = 'https://via.placeholder.com/600x400.png?text=Preview+do+site';
    const fakeZipUrl = 'https://example.com/site_clonado.zip';

    // Atualiza preview
    const img = document.getElementById('previewImg');
    img.src = fakePreview;
    img.hidden = false;

    // Atualiza botão download
    const dl = document.getElementById('downloadZip');
    dl.href = fakeZipUrl;
    dl.hidden = false;

  } catch (err) {
    alert('Erro na clonagem: ' + err.message);
  } finally {
    btn.disabled = false;
    btn.textContent = 'Iniciar Clonagem';
  }
});
