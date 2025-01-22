

// Function to fetch data from local storage and display it on the results page
document.addEventListener("DOMContentLoaded", () => {
    // const displayResults = () => {
 
    //     const currentUserJSON = localStorage.getItem("currentUser");
    //     const currentUser = currentUserJSON ? JSON.parse(currentUserJSON) : null;
 
    //     if (currentUser) {
    //         // Update the results page elements with the current user's data
    //         document.getElementById("currentUser").textContent = currentUser.name;
    //         document.getElementById("score").textContent = currentUser.score;
    //         document.getElementById("total").textContent = "100"; // Adjust the total score as needed
    //         document.getElementById("feedback").textContent = getFeedback(currentUser.score);
    //     } else {
    //         // If no current user exists, display a default message
    //         document.getElementById("currentUser").textContent = "N/A";
    //         document.getElementById("score").textContent = "N/A";
    //         document.getElementById("total").textContent = "N/A";
    //         document.getElementById("feedback").textContent = "No results found.";
    //     }
    // };

// Mock user data for demonstration purposes
const user = {
    name: "John Doe",
    playHistory: [
      { score: 80, total: 100, date: "2025-01-20",  },
      { score: 90, total: 100, date: "2025-01-19",  },
      { score: 70, total: 100, date: "2025-01-18", },
    ],
  };
  
  // Populate user information
  document.getElementById("currentUser").textContent = user.name;
  
  // Populate game history
  const playHistoryTable = document.querySelector("#playHistory tbody");
  
  user.playHistory.forEach((entry) => {
    const row = document.createElement("tr");
  
    row.innerHTML = `
      <td>${entry.date}</td>
      <td>${entry.category}</td>
      <td>${entry.score} / ${entry.total}</td>
    `;
  
    playHistoryTable.appendChild(row);
  });
});