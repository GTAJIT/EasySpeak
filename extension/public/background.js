chrome.runtime.onInstalled.addListener(() => {
  chrome.sidePanel
    .setPanelBehavior({
      openPanelOnActionClick: true
    })
    .catch((error) => console.error("SidePanel error:", error));
});