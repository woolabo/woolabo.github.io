window.E1_SITE = {
  // Replace this file or point to another image with the same portrait ratio.
  appScreen: "/assets/app-home.png"
};

const appScreen = document.querySelector("#app-screen");

if (appScreen && window.E1_SITE.appScreen) {
  appScreen.src = window.E1_SITE.appScreen;
}
