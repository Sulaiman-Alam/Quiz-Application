// Reference top the question

// // This is the new stuff Jenny added:
// const readUsers = () => {
//   const usersJSON = localStorage.getItem("users");
//   return usersJSON ? JSON.parse(usersJSON) : []; // Return parsed users or an empty array
// };


// const writeUsers = (users) => {
//   localStorage.setItem("users", JSON.stringify(users)); // Save the users array as JSON
// };


const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

const TimerDisplay = document.querySelector(".time-duration");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0; // what question you are on
let availableQuestions = [];  // empty array for remaining questions
let timer = null; // declare timer variable
const QUIZ_TIME_LIMIT = 15; // 15 seconds limit for each question
let currentTime = QUIZ_TIME_LIMIT;

// Timer reset function
const resetTimer = () => {
clearInterval(timer);
currentTime = QUIZ_TIME_LIMIT;
TimerDisplay.textContent = `${currentTime}s`;

}


// Timer start function
const startTimer = () => {
timer = setInterval(() => {
currentTime--;
 TimerDisplay.textContent = `${currentTime}s`;

if (currentTime <= 0) {
clearInterval(timer);
}
}, 1000);
}


// JSON file with questions referencing



// JSON FILE QUESTIONS

let questions = [  {
      "question": "A flashing red traffic light signifies that a driver should do what?",
      "A": "stop",
      "B": "speed up",
      "C": "proceed with caution",
      "D": "honk the horn",
      "answer": "A"
    }, {
      "question": "A knish is traditionally stuffed with what filling?",
      "A": "potato",
      "B": "creamed corn",
      "C": "lemon custard",
      "D": "raspberry jelly",
      "answer": "A"
    }, {
      "question": "A pita is a type of what?",
      "A": "fresh fruit",
      "B": "flat bread",
      "C": "French tart",
      "D": "friend bean dip",
      "answer": "B"
    }, {
      "question": "A portrait that comically exaggerates a person's physical traits is called a what?",
      "A": "landscape",
      "B": "caricature",
      "C": "still life",
      "D": "Impressionism",
      "answer": "B"
    }, {
      "question": "A second-year college student is usually called a what?",
      "A": "sophomore",
      "B": "senior",
      "C": "freshman ",
      "D": "junior ",
      "answer": "A"
    }, {
      "question": "A student who earns a J.D. can begin his or her career as a what?",
      "A": "lawyer",
      "B": "bricklayer",
      "C": "doctor",
      "D": "accountant",
      "answer": "A"
    }, {
      "question": "A triptych is a work of art that is painted on how many panels?",
      "A": "two",
      "B": "three",
      "C": "five",
      "D": "eight",
      "answer": "B"
    }, {
      "question": "According to a famous line from the existentialist play 'No Exit' what is hell?",
      "A": "oneself",
      "B": "other people",
      "C": "little made large",
      "D": "hued in green and blue",
      "answer": "B"
    }, {
      "question": "According to a popular slogan, what state should people not 'mess with'?",
      "A": "New York",
      "B": "Texas",
      "C": "Montana",
      "D": "Rhode Island",
      "answer": "B"
    }, {
      "question": "According to a Yale University study, what smell is the most recognizable to American adults?",
      "A": "tuna",
      "B": "laundry",
      "C": "popcorn",
      "D": "coffee",
      "answer": "D"
    }, {
      "question": "According to folklore, the 'jackalope' is an antlered version of what animal?",
      "A": "chicken",
      "B": "rabbit",
      "C": "moose",
      "D": "snake",
      "answer": "B"
    }, {
      "question": "According to Greek mythology, who was Apollo's twin sister?",
      "A": "Aphrodite",
      "B": "Artemis",
      "C": "Venus",
      "D": "Athena",
      "answer": "B"
    }, {
      "question": "According to legend, if you give someone the 'evil eye' what are you doing?",
      "A": "cursing them",
      "B": "blessing a child",
      "C": "counting money",
      "D": "passing time",
      "answer": "A"
    }, {
      "question": "According to legend, in what country are you most likely to meet a leprechaun?",
      "A": "Ireland",
      "B": "Poland",
      "C": "Greenland",
      "D": "Scotland",
      "answer": "A"
    }, {
      "question": "According to the American Kennel Club, what is the most popular breed of dog in the US as of 1999?",
      "A": "Poodle",
      "B": "Beagle",
      "C": "German shepherd",
      "D": "Labrador retriever",
      "answer": "D"
    }, {
      "question": "According to the Bible, Moses and Aaron had a sister named what?",
      "A": "Jochebed",
      "B": "Ruth",
      "C": "Leah",
      "D": "Miriam",
      "answer": "D"
    }, {
      "question": "According to the children's nursery rhyme, what type of ocean did Columbus sail in 1492?",
      "A": "calm",
      "B": "blue",
      "C": "windy",
      "D": "really big",
      "answer": "B"
    }, {
      "question": "According to the Mother Goose nursery rhyme, which child is full of woe?",
      "A": "Monday's child",
      "B": "Wednesday's child",
      "C": "Thursday's child",
      "D": "Saturday's child",
      "answer": "B"
    }, {
      "question": "According to the popular saying, what should you do 'when in Rome'?",
      "A": "watch your wallet",
      "B": "see the Coliseum",
      "C": "as the Romans do",
      "D": "don't drink the water",
      "answer": "C"
    }, {
      "question": "According to the proverb, necessity is the mother of what?",
      "A": "Invention",
      "B": "Luck",
      "C": "Problems",
      "D": "Procrastination",
      "answer": "A"
    }, {
      "question": "According to the title of a popular children's TV show, what color is Bear's big house?",
      "A": "red",
      "B": "green",
      "C": "purple",
      "D": "blue",
      "answer": "D"
    }, {
      "question": "According to the USDA, which food group should you eat the most servings of per day?",
      "A": "vegetables",
      "B": "dairy",
      "C": "meats",
      "D": "breads",
      "answer": "D"
    },
];


// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
      questionCounter = 0;
      score = 0;
      availableQuestions = [...questions];
      console.log(availableQuestions);
      // startTimer();
      getNewQuestion();
};

getNewQuestion = () => { // function to reload a new question

  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    // return alert(`Game over! Your score: ${score}`);
  
    // // This is the new stuff Jenny added:
    // let name = prompt("Your quiz is over, please enter your name to get your score:");
    // let users = readUsers();


    // if (name !== null && name.trim() !== "") {
    //   const currentUser = {
    //     name: name.trim(),
    //     score: score, 
    //   };

    //   // Save current user to localStorage
    //   localStorage.setItem("currentUser", JSON.stringify(currentUser));


    //   // Add current user to the leaderboard
    //   users.push(currentUser);
    //   writeUsers(users);


    //   alert("Your score has been saved!");
    // } 
    // else {
    //   alert("No name entered. Score not saved.");
    // }
    // window.location.replace("/Results/results.html");
  }
       
      questionCounter++;
      const questionIndex = Math.floor(Math.random() * availableQuestions.length);  // Get a random number for the newQuestion
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;
        
        resetTimer(); // Reset the timer
          startTimer(); // Start the timer

        // Grab out choices and iterate 
        choices.forEach( choice => {
        
            const letter = choice.dataset["letter"];
            choice.innerText = `${letter}: ${currentQuestion[letter]}`;
        });

        // Remove the current question from the available questions
      availableQuestions.splice(questionIndex, 1);
      acceptingAnswers = true;
};

// Add event listeners to the choices
choices.forEach( choice => {


      const letter = choice.dataset["letter"]; // Using data-letter
      choice.innerText = currentQuestion["letter"];
      
      choice.addEventListener("click", e => {
            if (!acceptingAnswers) return;
        

            acceptingAnswers = false;
            const selectedOption = e.target;
            const selectedAnswer = selectedOption.dataset["letter"];

            const classToApply = 
            selectedAnswer === currentQuestion.answer ? "correct" : "incorrect";

            selectedOption.classList.add(classToApply);

            //UPDATE SCORE IF THE ANSWER IS CORRECT
            if (classToApply === "correct") {
                  score += CORRECT_BONUS;
            }

            // Delay before loading the next question
            setTimeout(() => {
              // clearInterval(timer);// reset the timer
                  selectedOption.classList.remove(classToApply);
                  getNewQuestion();
            }, 1000);

      });
})
startGame();





