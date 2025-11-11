//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  skin: "STANDARD", //skin can be "STANDARD", "TABLET", "RETRO" or "FUTURISTIC".
  //backgroundImg: "NONE", //background can be "NONE" or a URL.
  actionAfterSolve: "NONE", //actionAfterSolve can be "NONE" or "SHOW_MESSAGE".
  //message: "Custom message",

  mazeWidth: 8, //Width of the maze (number of cells horizontally)
  mazeHeight: 4, //Height of the maze (number of cells vertically)
  startPoint: { x: 1, y: 1 }, //Coordinates of the start point of the maze
  endPoint: { x: 8, y: 4 }, //Coordinates of the end point of the maze
  // mazePaddingTop: "2%", //Padding top of the maze inside the container
  // mazePaddingBottom: "2%", //Padding bottom of the maze inside the container
  // mazePaddingLeft: "2%", //Padding left of the maze inside the container
  // mazePaddingRight: "2%", //Padding right of the maze inside the container
  showStart: "TRUE", //Whether to show the start point
  showEnd: "TRUE", //Whether to show the end point
  // mazeBgImg: "https://i.pinimg.com/1200x/90/a7/63/90a7636289190f4852d27c4cee8ae9b2.jpg",
  lineColor: "NONE", //Color of the lines connecting the buttons

  //Settings that will be automatically specified by the Escapp server
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [1],
    rtc: false,
    preview: false,
  },
};
