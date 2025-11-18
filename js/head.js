// js/head.js
(function () {
  // GitHub Pages のプロジェクトサイト用ベースパス
  const BASE_PATH = '/kinoto-research';

  function loadHeadFragment() {
    const url = `${BASE_PATH}/partials/head.html`;

    fetch(url)
      .then(function (res) {
        if (!res.ok) {
          throw new Error('HTTP ' + res.status + ' for ' + url);
        }
        return res.text();
      })
      .then(function (html) {
        // 読み込んだHTMLを <head> に追加
        const tpl = document.createElement('template');
        tpl.innerHTML = html;
        document.head.appendChild(tpl.content);
      })
      .catch(function (err) {
        console.error('[head] Failed to load head fragment:', url, err);
      });
  }

  // DOMのパースが終わったら実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeadFragment);
  } else {
    loadHeadFragment();
  }
})();
