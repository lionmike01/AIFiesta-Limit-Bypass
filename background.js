chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      if (details.url.includes("/api/chat/message-count")) {
        console.log("Request detected (blocked by declarativeNetRequest):", details.url);
      }
    },
    { urls: ["*://api-v2.aifiesta.ai/*"] }
  );