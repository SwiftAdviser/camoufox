// Keep generated Retype sidebar links on the official documentation site.
function updatePreviewNavigation() {
  document.querySelectorAll('.sidebar a[href]').forEach((link) => {
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || url.pathname === new URL('./', window.location.href).pathname) return;
    const target = url.pathname === '/python/geoip/'
      ? new URL('./', window.location.href).href
      : new URL(url.pathname + url.search + url.hash, 'https://camoufox.com').href;
    if (link.href !== target) link.href = target;
  });
}
new MutationObserver(updatePreviewNavigation).observe(document.documentElement, {
  childList: true,
  subtree: true
});
document.addEventListener('DOMContentLoaded', updatePreviewNavigation);
