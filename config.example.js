//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  skin: "STANDARD", //skin can be "STANDARD", "TABLET", "RETRO" or "FUTURISTIC".
  //backgroundImg: "NONE", //background can be "NONE" or a URL.
  actionAfterSolve: "NONE", //actionAfterSolve can be "NONE" or "SHOW_MESSAGE".
  //message: "Custom message",

  mazeWidth: 8, //Width of the maze (number of cells horizontally)
  mazeHeight: 4, //Height of the maze (number of cells vertically)

  showStart: true, //Show the start point
  startPoint: { x: 1, y: 1 }, //Coordinates of the start point of the maze

  showEnd: true, //Show the end point
  endPoint: { x: 8, y: 4 }, //Coordinates of the end point of the maze
  
  mazeBgImg: "NONE", //maze background can be "NONE" or a URL.
  //mazePaddingTop: "0%", //Padding top of the maze inside the container
  //mazePaddingBottom: "0%", //Padding bottom of the maze inside the container
  //mazePaddingLeft: "0%", //Padding left of the maze inside the container
  //mazePaddingRight: "0%", //Padding right of the maze inside the container
  
  //Settings that will be automatically specified by the Escapp server
  locale: "es",

  escappClientSettings: {
    endpoint: "https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [1],
    rtc: false,
    preview: false
  },
};