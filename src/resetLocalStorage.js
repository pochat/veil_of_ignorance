   function resetLocalStorage() {

        // Remove the data name from the storage
        localStorage.removeItem("currentQuestion");
        localStorage.removeItem("currentPlayerChoice");
        localStorage.removeItem("questionIndex");

        // Reset the player name and assign: Not born yet
        localStorage.setItem("playerName", 'Not born yet')
    }

export default resetLocalStorage;