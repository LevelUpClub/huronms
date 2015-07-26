

<script> 



    function goPlay() {
        var userChoice = prompt("Do you choose rock, paper, or scissors?",'');
        var computerChoice = Math.random();
        if (computerChoice >= 0 && computerChoice <= 0.33)
        {
          computerChoice = "rock";
        }
        else if (computerChoice >= 0.34 && computerChoice <= 0.66)
        {
            computerChoice = "paper";
        }
        else 
        {
            computerChoice = "scissors";
        }
        document.getElementById('user').innerHTML = userChoice;
        document.getElementById('computer').innerHTML = computerChoice;
        document.getElementById('result').innerHTML = compare(userChoice,computerChoice);
    }

    function compare(user,computer) {
        if (user === computer) {
            return "The result is a tie!";
        }
        else if (user === "rock") {
            if (computer === "scissors") {
                return "rock wins! congrats!";
            }
            else if (computer === "paper") {
                return "paper wins. try again.";
            }
        }
        else if (user === "paper") {
            if (computer === "scissors") {
                return "scissors wins. try again.";
            }
            else if (computer === "rock") {
                return "paper wins! congrats!";
            }
        }
        else if (user === "scissors") {
            if (computer === "rock") {
                return "rock wins. try again.";
            }
            else if (computer === "paper") {
                return "scissors wins! congrats!";
            }
        }
    }

    </script>