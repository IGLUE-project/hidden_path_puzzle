import { flagIcon } from "../icons/mazeIcons";

export const DEFAULT_APP_SETTINGS = {
  skin: "STANDARD",
  backgroundImg: "",
  actionWhenLoadingIfSolved: true,
  message: undefined,
  mazeWidth: 8,
  mazeHeight: 4,
  showStart: true,
  showEnd: true,
  resetImg: "",
  mazePaddingTop: "0%",
  mazePaddingBottom: "0%",
  mazePaddingLeft: "0%",
  mazePaddingRight: "0%",
  clickAudio: "sounds/click_button.wav",
  failAudio: "sounds/wrong.wav",
  correctAudio: "sounds/correct.wav",
};

export const THEMES = {
  STANDARD: "STANDARD",
  TABLET: "TABLET",
  RETRO: "RETRO",
  FUTURISTIC: "FUTURISTIC",
};

export const THEME_ASSETS = {
  [THEMES.STANDARD]: {
    pointImg: () => flagIcon({ color: "#00ac2bff" }),
    clickAudio: "sounds/click_button.wav",
    failAudio: "sounds/wrong.wav",
    resetAudio: "sounds/reset.wav",
    correctAudio: "sounds/correct.wav",
    mazePaddingTop: "0%",
    mazePaddingBottom: "0%",
    mazePaddingLeft: "0%",
    mazePaddingRight: "0%",
  },
  [THEMES.TABLET]: {
    backgroundImg: "images/tablet_bg.png",
    containerImg: "images/tablet_container.png",
    pointImg: () => flagIcon({ color: "#002a77" }),
    resetImg: "",
    clickAudio: "sounds/click_button.wav",
    failAudio: "sounds/wrong.wav",
    resetAudio: "sounds/reset.wav",
    correctAudio: "sounds/correct.wav",
    mazePaddingTop: "0%",
    mazePaddingBottom: "0%",
    mazePaddingLeft: "0%",
    mazePaddingRight: "0%",
  },
  [THEMES.RETRO]: {
    backgroundImg: "images/retro_bg.png",
    mazeBgImg: "images/retro_container.png",
    pointImg: "images/start-point.png",
    resetImg: "images/retro_reset.png",
    clickAudio: "sounds/pencil.wav",
    failAudio: "sounds/tearing-paper.wav",
    resetAudio: "sounds/reset.wav",
    correctAudio: "sounds/correct.wav",
    mazePaddingTop: "7%",
    mazePaddingBottom: "6%",
    mazePaddingLeft: "6%",
    mazePaddingRight: "6%",
  },
  [THEMES.FUTURISTIC]: {
    backgroundImg: "images/futuristic_bg.png",
    containerImg: "images/futuristic_container.png",
    pointImg: () => flagIcon({ color: "#6100ac" }),
    resetImg: "images/futuristic_reset.png",
    clickAudio: "sounds/click_button.wav",
    failAudio: "sounds/wrong.wav",
    resetAudio: "sounds/reset.wav",
    correctAudio: "sounds/correct.wav",
    mazePaddingTop: "0%",
    mazePaddingBottom: "0%",
    mazePaddingLeft: "0%",
    mazePaddingRight: "0%",
  },
};

export const ESCAPP_CLIENT_SETTINGS = {
  imagesPath: "./images/",
};

export const MAIN_SCREEN = "MAIN_SCREEN";
