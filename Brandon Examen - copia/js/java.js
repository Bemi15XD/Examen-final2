
<script>
  // 🔹 Script: hace que cada imagen gire al hacer clic
  document.querySelectorAll('.galeria img').forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('rotar');
    });
  });
</script>

</body>
</html>