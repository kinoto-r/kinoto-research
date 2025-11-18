(function () {
  const REPO_NAME = 'kinoto-research';

  function getBasePath() {
    const path = window.location.pathname || '';
    if (path.startsWith('/' + REPO_NAME + '/')) {
      return '/' + REPO_NAME;
    }
    return '';
  }

  function loadFragment(targetId, fileName) {
    const host = document.getElementById(targetId);
    if (!host) return;

    const base = getBasePath();
    const url = `${base}/partials/${fileName}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} for ${url}`);
        }
        return res.text();
      })
      .then((html) => {
        host.innerHTML = html;
      })
      .catch((err) => {
        console.error('[layout] Failed to load fragment:', url, err);
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadFragment('site-header', 'header.html');
    loadFragment('site-footer', 'footer.html');
  });
})();
