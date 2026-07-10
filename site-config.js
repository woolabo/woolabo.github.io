window.E1_SITE = {
  // Replace this file or point to another image with the same portrait ratio.
  appScreen: "/assets/app-home.png",
  // Paste the published iCloud Shortcut URL here when it is ready.
  shortcutUrl: ""
};

const appScreen = document.querySelector("#app-screen");
const shortcutLink = document.querySelector("#shortcut-link");

if (appScreen && window.E1_SITE.appScreen) {
  appScreen.src = window.E1_SITE.appScreen;
}

if (shortcutLink && window.E1_SITE.shortcutUrl) {
  shortcutLink.href = window.E1_SITE.shortcutUrl;
  shortcutLink.removeAttribute("aria-disabled");
} else if (shortcutLink) {
  shortcutLink.addEventListener("click", (event) => event.preventDefault());
}
