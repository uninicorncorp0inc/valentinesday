onEvent("label3", "click", function( ) {
  playSound("Perfecta-cancion-para-dedicar-el-14-de-febrero-(San-Valent-n)---.mp3", true);
  onEvent("label7", "click", function( ) {
    stopSound("Perfecta-cancion-para-dedicar-el-14-de-febrero-(San-Valent-n)---.mp3");
  });
  onEvent("label6", "click", function( ) {
    stopSound("Perfecta-cancion-para-dedicar-el-14-de-febrero-(San-Valent-n)---.mp3");
    playSound("assets/No-matter-where-you-are---Us-The-Duo---sub-espa-ol.mp3", true);
  });
  onEvent("label5", "click", function( ) {
    stopSound("assets/No-matter-where-you-are---Us-The-Duo---sub-espa-ol.mp3");
    playSound("Perfecta-cancion-para-dedicar-el-14-de-febrero-(San-Valent-n)---.mp3", true);
  });
  onEvent("goldensong", "click", function( ) {
    playSound("assets/I-Will-Wait.mp3", false);
    setScreen("heartsssssssss");
  });
  onEvent("label14", "click", function( ) {
    stopSound("assets/I-Will-Wait.mp3");
    playSound("El-Libro-De-La-Vida---Live-Life-(Jesse---Joy).mp3", false);
  });
});
onEvent("button1", "click", function( ) {
  setScreen("screen1");
});
