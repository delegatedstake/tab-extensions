/* globals chrome */

// https://developer.chrome.com/extensions/runtime#event-onInstalled
chrome.runtime.onInstalled.addListener(function (object) {
  try {
    // On install, open a welcome tab.
    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
      const postInstallURL = 'https://www.exploreos.com/'
      chrome.tabs.create({ url: postInstallURL })
    }
  } catch (e) {
    console.error(e)
  }
})

// On uninstall, open a post-uninstall page to get feedback.
// https://developer.chrome.com/extensions/runtime#method-setUninstallURL
try {
  const postUninstallURL = 'https://www.exploreos.com/uninstalled/'
  chrome.runtime.setUninstallURL(postUninstallURL)
} catch (e) {
  console.error(e)
}
