function getKeyString(x, y) {
  return "${x}x${y}";
}

(function game() {
  let playerId;
  let playerRef;

  firebase.auth().onAuthStateChanged((user) => {
    //if()
    playerId = user.uid;
    playerRef = firebase.database().ref(`players/${playerId}`);

    playerRef.set({
      id: playerId,
      name: "",
      x: 10,
      y: 10,
    });
  });

  firebase.auth().signInAnonymously().catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
})();
