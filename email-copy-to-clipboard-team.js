<!-- Popup element -->
<div id="copy-popup" style="
  position: absolute;
  background: #333;
  color: #fff;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 13px;
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
  z-index: 9999;
  transition: opacity 0.3s ease;
">Copied Email to Your Clipboard</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('copy-popup');

  document.body.addEventListener('click', function (e) {
    const el = e.target.closest('.email');
    if (!el) return;

    e.preventDefault();

    const mailto = el.getAttribute('href');
    const email = mailto.replace(/^mailto:/, '');

    navigator.clipboard.writeText(email).then(() => {
      // Get element position
      const rect = el.getBoundingClientRect();

      // Position the popup just below the clicked link
      popup.style.top = `${window.scrollY + rect.bottom + 6}px`;
      popup.style.left = `${window.scrollX + rect.left}px`;
      popup.style.opacity = 1;

      // Hide popup after 2s
      setTimeout(() => {
        popup.style.opacity = 0;
      }, 2000);
    }).catch(err => {
      console.error('Clipboard write failed', err);
    });
  });
});
</script>
