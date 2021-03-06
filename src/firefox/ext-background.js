/* globals browser */

// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled
browser.runtime.onInstalled.addListener(function (object) {
  try {
    // On install, open a welcome tab.
    if (object.reason === browser.runtime.OnInstalledReason.INSTALL) {
      const postInstallURL = 'https://www.exploreos.com/'
      browser.tabs.create({ url: postInstallURL })
    }
  } catch (e) {
    console.error(e)
  }
})

// On uninstall, open a post-uninstall page to get feedback.
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/setUninstallURL
try {
  const postUninstallURL = 'https://www.exploreos.com/uninstall/'
  browser.runtime.setUninstallURL(postUninstallURL)
} catch (e) {
  console.error(e)
}
