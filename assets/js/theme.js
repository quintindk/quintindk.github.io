(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var logo = document.getElementById('brand-logo');

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    if (logo) {
      logo.src = theme === 'light'
        ? '/assets/img/logo-light.svg'
        : '/assets/img/logo-dark.svg';
    }
    if (btn) btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
  }

  apply(root.getAttribute('data-theme') || 'dark');

  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      try { localStorage.setItem('theme', next); } catch (e) {}
      apply(next);
    });
  }
})();
