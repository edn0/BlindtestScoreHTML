class player {
  constructor(name, playerID, score) {
  this.name = name;
  this.playerID = playerID;
  this.score = score;

}
}

var playersList = [];

function createPlayers() {

  // Fetch names entered in the input boxes
  var player0Name = document.getElementById("player0.name").value;
  var player1Name = document.getElementById("player1.name").value;
  var player2Name = document.getElementById("player2.name").value;
  var player3Name = document.getElementById("player3.name").value;
  // Send those submitted names to the playersList to be used by the player constructor up there
  playersList.push(player0Name, player1Name, player2Name, player3Name);

  // For loop that will use the constructor to create new players
  for (let i in playersList) {
      playersList[i] = new player(playersList[i], i, 0);
      console.log(playersList[i]);
  }

  return playersList;
}

function scoreUp(playerID){

  // Select object in playerList by index
  var scoringPlayer = playersList[playerID]; 

  // Assign current player score to variable to operate on
  var playerScore = scoringPlayer.score; 
  playerScore++; 

  // Set the player score to var
  scoringPlayer.score = playerScore; 

  // Concatenate to target scoring player
  let playerScoreItem = "player" + playerID + "Score"; // Concatenate to target scoring player

  // Update the HTML element
  document.getElementById(playerScoreItem).innerHTML = playerScore;
}

function submitVideo(){

  // Fetching the URL from the input area
  let url = document.getElementById("addressBar").value;
  console.log(url);

  /**
  * Get YouTube ID from various YouTube URL
  * @author: takien
  * @url: http://takien.com
  * For PHP YouTube parser, go here http://takien.com/864
  */
  var ID = '';
  url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if(url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  }
  else {
    ID = url;
  }
  console.log(ID);

  // Formatting URL for it to contain /embed/ and the video ID
  url = ("https://www.youtube.com/embed/" + ID);
  console.log(url + ": url");


  // Replace the URL inside the iframe
  let iframe = document.getElementById("video");
  iframe.src = url;
  
  
  

}

function pickAvatar(playerID, avatarID) {

  avatarChosen = "avatar" + avatarID;
  avatarFrame = "avatarFrame" + playerID;
  // Fetch the player's avatarFrame
  var list = document.getElementById(avatarFrame);
  // Fetch the chosen avatar
  avatarChosen = list.getElementsByClassName(avatarChosen);

  // Fetch content of avatar frame and wipe it
  var avatarFrameContent = document.getElementById(avatarFrame);
  avatarFrameContent.innerHTML = "";
  // And the insert the new avatar frame
  var avatarInsert = document.createElement("div");
  avatarInsert.className = "avatarFull" + avatarID;
  avatarFrameContent.appendChild(avatarInsert);
}