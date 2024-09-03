const questions = [
    {
        question: "Kaheksakümne aasta jooksul jälgiti 200 000 jaanalindu ja ükski neist ei...",
        options: [
            "pistnud pead liiva alla",
            "munenud rohkem kui ühe muna",
            "ei maganud rohkem kui 2 tundi"
        ],
        answer: "pistnud pead liiva alla"
    },
    {
        question: "Aevastamine võib teha palju haiget või olla isegi surmav. Aevastamise ajal võib...",
        options: [
            "tulla ribisse mõra",
            "saad pisivigastuse",
            "südametöö seiskuda, mille tagajärjeks on kiire surm"
        ],
        answer: "tulla ribisse mõra"
    },
    {
        question: "Kui Coca-Colasse ei lisataks värvaineid, oleks see...",
        options: [
            "roheline",
            "läbipaistev",
            "kollane"
        ],
        answer: "roheline"
    },
    {
        question: "Üks inimene kahest miljonist sureb voodist välja kukkumise tagajärjel. Suurema osa sellest statistikast moodustavad...",
        options: [
            "alaealised",
            "vanainimesed",
            "Alkohoolikud"
        ],
        answer: "vanainimesed"
    },
    {
        question: "Kuum vesi kaalub rohkem kui külm vesi. Tõde või väär?",
        options: [
            "Tõde",
            "Väär"
        ],
        answer: "Tõde"
    },
    {
        question: "Eeslid tekitavad aastas rohkem surmaga lõppenud õnnetusi kui lennukid. Tõde või väär?",
        options: [
            "Tõde",
            "Väär"
        ],
        answer: "Tõde"
    },
    {
        question: "Iga päev antakse umbes X vastsündinut üle maailma haiglas valedele vanematele. Mitu?",
        options: [
            "12",
            "32",
            "2"
        ],
        answer: "12"
    },
    {
        question: "Nahkhiired koopast väljudes alati...",
        options: [
            "pöörduvad vasakule",
            "pöörduvad paremale",
            "lendavad otse"
        ],
        answer: "pöörduvad vasakule"
    },
    {
        question: "Autol, mis sõidab 160 km/tunnis, kuluks esimese täheni jõudmiseks...",
        options: [
            "29 miljon aastat",
            "7 nädalat",
            "9 miljardit aastat"
        ],
        answer: "29 miljon aastat"
    },
    {
        question: "Clevelandis, Ohios on keelatud püüda hiiri, kui sul pole...",
        options: [
            "juhiluba",
            "jahiluba",
            "kalastusluba"
        ],
        answer: "jahiluba"
    },
    {
        question: "Kuldkala mälu kestab...",
        options: [
            "3 sek",
            "6 sek",
            "9 sek"
        ],
        answer: "3 sek"
    },
    {
        question: "Inimene kõnnib elu jooksul keskmiselt mitu korda ümber ekvaatori?",
        options: [
            "5",
            "1",
            "10"
        ],
        answer: "5"
    },
    {
        question: "Esimene kirjutusmasina abil kirjutatud raamat oli...",
        options: [
            "Tom Sawyeri seiklused",
            "Romeo ja Julia",
            "Kevade"
        ],
        answer: "Tom Sawyeri seiklused"
    },
    {
        question: "Kaks enim loetavat raamatut maailmas on...",
        options: [
            "Piibel ja Harry Potteri teosed",
            "Koraan ja 1001 öö muinasjutud",
            "Mein Kampf ja Kaamasuutra"
        ],
        answer: "Piibel ja Harry Potteri teosed"
    },
    {
        question: "Väikese Eesti koosseisu kuulub X saart. Mitu?",
        options: [
            "222",
            "2222",
            "22222"
        ],
        answer: "2222"
    },
    {
        question: "Eesti on esimene riik maailmas, kus võeti kasutusele...",
        options: [
            "e-kool",
            "e-residentsus",
            "e-valimised"
        ],
        answer: "e-valimised"
    },
    {
        question: "Kõige unisem imetaja on...",
        options: [
            "laiskloom",
            "koaala",
            "sinivaal"
        ],
        answer: "koaala"
    },
    {
        question: "Kõige kallim spordiala on...",
        options: [
            "vormel 1",
            "Golf",
            "WRC"
        ],
        answer: "vormel 1"
    },
    {
        question: "Kõige venivam element on...",
        options: [
            "naatrium",
            "kuld",
            "heelium"
        ],
        answer: "kuld"
    },
    {
        question: "Kõige raskem puu on...",
        options: [
            "sekvoia",
            "tamm",
            "Eeben"
        ],
        answer: "sekvoia"
    },
    {
        question: "Ainuke loom, keda piiblis ei mainita, on...",
        options: [
            "Siga",
            "Ahv",
            "Kass"
        ],
        answer: "Kass"
    },
    {
        question: "Mis värvi võib olla vähi veri?",
        options: [
            "Roosa",
            "Helesinine",
            "Valge"
        ],
        answer: "Helesinine"
    },
    {
        question: "Millisel elusolendil on tema kehakaalu arvestades kõige suurem aju?",
        options: [
            "Inimesel",
            "Elevandil",
            "Sipelgal"
        ],
        answer: "Sipelgal"
    },
    {
        question: "Milline kuulus kirjanik ei osanud ilma kirjavigadeta praktiliselt mitte ühtegi sõna kirjutada?",
        options: [
            "Hans Christian Andersen",
            "Charles Perrault",
            "Jacob Grimm"
        ],
        answer: "Hans Christian Andersen"
    },
    {
        question: "Kes mõtles välja käärid?",
        options: [
            "Archimedes",
            "Leonardo da Vinci",
            "Tundmatu hiina arst"
        ],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Milline toode on maailmas kõige suurema käibega?",
        options: [
            "Kohv",
            "Bensiin",
            "Tee"
        ],
        answer: "Bensiin"
    },
    {
        question: "Mille kinkis Peipsiäärse valla rahvas Eesti Vabariigile 100-ndaks sünnipäevaks?",
        options: [
            "Sibulavaniku",
            "Lapiteki",
            "100 paari kootud sokke"
        ],
        answer: "Sibulavaniku"
    },
    {
        question: "Milline kuulus kirjanik kirjeldas üksikasjalikult juba 19. sajandil elektriautot, faksi ja elektritooli, mille eest kirjastaja teda idioodiks sõimas?",
        options: [
            "Jules Verne",
            "Mark Twain",
            "Alexandre Dumas"
        ],
        answer: "Jules Verne"
    },
    {
        question: "Milline loom magab päevas vaid paar tundi?",
        options: [
            "Hunt",
            "Mutt",
            "Kaelkirjak"
        ],
        answer: "Kaelkirjak"
    },
    {
        question: "Milline materjal maailmas on peaaegu lõputult taaskasutatav?",
        options: [
            "Metall",
            "Klaas",
            "Puit"
        ],
        answer: "Klaas"
    }
];


let scoreboard = JSON.parse(localStorage.getItem('scoreboard')) || [];

const teamSelectionForm = document.getElementById("team-selection-form");
const quizDiv = document.getElementById("quiz");
const questionsDiv = document.getElementById("questions");
const resultsDiv = document.getElementById("results");
const summary = document.getElementById("summary");
const submitQuizButton = document.getElementById("submit-quiz");
const restartQuizButton = document.getElementById("restart-quiz");
const viewScoreboardButton = document.getElementById("view-scoreboard");
const scoreboardDiv = document.getElementById("scoreboard");
const scoreboardList = document.getElementById("scoreboard-list");
const backToMainButton = document.getElementById("back-to-main");

teamSelectionForm.addEventListener("submit", startQuiz);
submitQuizButton.addEventListener("click", submitQuiz);
restartQuizButton.addEventListener("click", restartQuiz);
viewScoreboardButton.addEventListener("click", showScoreboard);
backToMainButton.addEventListener("click", backToMain);

function startQuiz(event) {
    event.preventDefault();
    quizDiv.style.display = "block";
    teamSelectionForm.style.display = "none";

    questionsDiv.innerHTML = '';
    questions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map((option, i) => `
                <input type="radio" id="question${index}-option${i}" name="question${index}" value="${option}" required>
                <label for="question${index}-option${i}">${option}</label>
            `).join('')}
        `;
        questionsDiv.appendChild(questionElement);
    });
}

function submitQuiz() {
    const results = [];
    let correctCount = 0;
    const teamName = document.getElementById("team-name").value;
    const teamNumber = document.getElementById("team-number").value;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        const userAnswer = selectedOption ? selectedOption.value : "No Answer";
        const isCorrect = userAnswer === q.answer;

        if (isCorrect) correctCount++;

        results.push({
            question: q.question,
            userAnswer: userAnswer,
            correctAnswer: q.answer,
            isCorrect
        });
    });

    const totalQuestions = questions.length;
    const percentageCorrect = Math.round((correctCount / totalQuestions) * 100);

    // Show only the percentage of correct answers
    showSummary(percentageCorrect);

    // Add team's results to the scoreboard
    scoreboard.push({
        teamName: `${teamName} (Team ${teamNumber})`,
        correctCount,
        totalQuestions,
        percentageCorrect,
        results
    });

    // Save the updated scoreboard to localStorage
    localStorage.setItem('scoreboard', JSON.stringify(scoreboard));
}

function showSummary(percentageCorrect) {
    summary.textContent = `Correct answers: ${percentageCorrect}%`;
    resultsDiv.style.display = "block";
    quizDiv.style.display = "none";
}

function showScoreboard() {
    // Sort the scoreboard by percentageCorrect in descending order
    scoreboard.sort((a, b) => b.percentageCorrect - a.percentageCorrect);

    scoreboardList.innerHTML = '';
    scoreboardDiv.style.display = "block";
    resultsDiv.style.display = "none";
    quizDiv.style.display = "none";
    teamSelectionForm.style.display = "none";

    scoreboard.forEach((team, index) => {
        const teamResults = team.results || [];
        const scoreboardItem = document.createElement("li");
        scoreboardItem.innerHTML = `
            ${index + 1}. ${team.teamName} - Correct answers: ${team.percentageCorrect}%
            <button class="details-button" onclick="toggleDetails(${index})">Details</button>
            <div class="details" id="details-${index}" style="display: none;">
                ${teamResults.map(result => `
                    <p>${result.question} - Your Answer: ${result.userAnswer} (${result.isCorrect ? "Correct" : "Incorrect"})</p>
                `).join('')}
            </div>
        `;
        scoreboardList.appendChild(scoreboardItem);
    });
}

function toggleDetails(index) {
    const detailsDiv = document.getElementById(`details-${index}`);
    if (detailsDiv.style.display === "none" || detailsDiv.style.display === "") {
        detailsDiv.style.display = "block";
    } else {
        detailsDiv.style.display = "none";
    }
}

function backToMain() {
    scoreboardDiv.style.display = "none";
    teamSelectionForm.style.display = "block";
}

function restartQuiz() {
    resultsDiv.style.display = "none";
    teamSelectionForm.style.display = "block";
    document.getElementById("team-name").value = '';
    document.getElementById("team-number").value = '1';
}