/** @format */
// Guessing Game
function startGuessingGame() {
     const secret = Math.floor(Math.random() * 10) + 1;
     let attempts = 3;
     let msg = "";
     while (attempts > 0) {
          let guess = parseInt(
               prompt(`Guess a number (1-10). Attempts left: ${attempts}`)
          );
          if (guess === secret) {
               msg = `🎉 Correct! The number was ${secret}.`;
               break;
          } else {
               msg = guess > secret ? "Too high!" : "Too low!";
          }
          attempts--;
     }
     if (attempts === 0 && msg !== `🎉 Correct! The number was ${secret}.`) {
          msg = `❌ Out of attempts! The number was ${secret}.`;
     }
     document.getElementById("gameOutput").innerText = msg;
}

// To-Do List
function startTodo() {
     const todos = [];
     let outputDiv = document.getElementById("todoOutput");
     while (true) {
          let command = prompt(
               "Enter a command (add, delete, replace, list, quit):"
          );
          if (!command) continue;
          command = command.toLowerCase();

          if (command === "quit") {
               outputDiv.innerText = "You quit the app.";
               break;
          } else if (command === "add") {
               let newTodo = prompt("Enter new to-do:");
               if (newTodo) todos.push(newTodo);
          } else if (command === "delete") {
               let index = parseInt(prompt("Enter index to delete:"));
               if (!isNaN(index) && index >= 0 && index < todos.length) {
                    todos.splice(index, 1);
               }
          } else if (command === "replace") {
               let index = parseInt(prompt("Enter index to replace:"));
               if (!isNaN(index) && index >= 0 && index < todos.length) {
                    let newValue = prompt("Enter new value:");
                    todos[index] = newValue;
               }
          } else if (command === "list") {
               let list = todos.map((t, i) => `${i}: ${t}`).join("\n");
               alert(list || "No to-dos yet.");
          }
          outputDiv.innerText =
               "Current To-Dos: \n" + (todos.join(", ") || "No to-dos yet.");
     }
}
