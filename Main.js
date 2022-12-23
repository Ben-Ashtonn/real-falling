function getKeyString(x, y) {
    return '${x}x${y}';
}

function (){
    
    let playerId;
    let playerRef;
    
    firebase.auth().onAuthStateChanged(user) => {
        if(
        playerId = user.uid;
        playerRef = firebase.database().ref('players/${playerId}');
        
        playerRef.set({
            id: playerId,
            name: "",
            x: 10,
            y: 10,
        })
    })
    
    firebase.auth().signInAnonymously()

})();