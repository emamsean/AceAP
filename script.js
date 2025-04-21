
let player = {};
const quizzes = {
  "AP Environmental Science": [
    { topic: "Ecosystems", question: "Which biome has the highest biodiversity?", options: ["Tundra", "Desert", "Tropical Rainforest", "Grassland"], answer: "Tropical Rainforest" },
    { topic: "Ecosystems", question: "What process moves carbon from the atmosphere to plants?", options: ["Respiration", "Decomposition", "Photosynthesis", "Evaporation"], answer: "Photosynthesis" }
  ],
  "AP World History": [
    { topic: "Ancient Civilizations", question: "Which river valley civilization was in Mesopotamia?", options: ["Indus", "Nile", "Tigris-Euphrates", "Yellow"], answer: "Tigris-Euphrates" }
  ],
  "AP Statistics": [
    { topic: "Exploring One-Variable Data", question: "What is the median of [3, 5, 7, 9, 11]?", options: ["7", "5", "6", "9"], answer: "7" }
  ]
};

function loadTabs() {
  const tabs = document.getElementById("tabs");
  tabs.innerHTML = "";
  Object.keys(quizzes).forEach(subject => {
    const btn = document.createElement("button");
    btn.className = "tab";
    btn.textContent = subject;
    btn.onclick = () => showChecklist(subject);
    tabs.appendChild(btn);
  });
}

document.getElementById("startBtn").onclick = function () {
  const name = document.getElementById("userName").value.trim();
  const school = document.getElementById("userSchool").value.trim();
  const country = document.getElementById("userCountry").value.trim();
  if (!name || !school || !country) {
    alert("Please fill out all fields.");
    return;
  }
  player = { name, school, country };
  document.getElementById("userForm").style.display = "none";
  loadTabs();
};

function showChecklist(subject) {
  const checklistContainer = document.getElementById("checklistContainer");
  const topics = [...new Set(quizzes[subject].map(q => q.topic))];
  let html = `<h3>${subject} Topics</h3><ul id='topicChecklist' style='list-style:none;'>`;
  topics.forEach(topic => {
    html += `<li><label><input type='checkbox' class='topic-box' value='${topic}' checked> ${topic}</label></li>`;
  });
  html += `</ul><button onclick="startFilteredQuiz('${subject}')">✅ Start Quiz</button>`;
  checklistContainer.innerHTML = html;
}

function startFilteredQuiz(subject) {
  const selectedTopics = Array.from(document.querySelectorAll(".topic-box:checked")).map(cb => cb.value);
  const allChecked = document.querySelectorAll(".topic-box").length === selectedTopics.length;
  if (!allChecked) {
    alert("Please check all topics before starting the quiz.");
    return;
  }
  const selectedQuestions = [];
  selectedTopics.forEach(topic => {
    const topicQuestions = quizzes[subject].filter(q => q.topic === topic);
    const shuffled = topicQuestions.sort(() => 0.5 - Math.random());
    selectedQuestions.push(...shuffled.slice(0, 5));
  });
  let current = 0;
  let score = 0;

  function showQuestion() {
    const q = selectedQuestions[current];
    document.getElementById("definition").textContent = `Question ${current + 1} of ${selectedQuestions.length}`;
    document.getElementById("question").textContent = q.question;
    const optDiv = document.getElementById("options");
    optDiv.innerHTML = "";
    q.options.forEach(opt => {
      const btn = document.createElement("div");
      btn.className = "option";
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(opt);
      optDiv.appendChild(btn);
    });
  }

  function checkAnswer(answer) {
    const q = selectedQuestions[current];
    const result = document.getElementById("result");
    if (answer === q.answer) {
      result.textContent = "✅ Correct! +10 XP";
      result.style.color = "lightgreen";
      score += 10;
    } else {
      result.textContent = `❌ Incorrect. Answer: ${q.answer}`;
      result.style.color = "salmon";
    }
    setTimeout(() => {
      current++;
      if (current < selectedQuestions.length) {
        showQuestion();
      } else {
        document.getElementById("definition").textContent = "🎉 You've completed the quiz!";
        document.getElementById("question").textContent = "Well done! Select another subject to continue.";
        document.getElementById("options").innerHTML = "";
        document.getElementById("result").textContent = "";
        document.getElementById("scoreSummary").textContent = `🏆 Score: ${score} XP`;
        const row = document.createElement("tr");
        row.innerHTML = `<td>${player.name}</td><td>${player.school}</td><td>${player.country}</td><td>${score}</td>`;
        document.getElementById("leaderboardBody").appendChild(row);
      }
    }, 1500);
  }
  showQuestion();
}

document.getElementById("shareInstagram").onclick = () => {
  const table = document.getElementById("scoreboard");
  html2canvas(table).then(canvas => {
    const imageData = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = imageData;
    a.download = "leaderboard.png";
    a.click();
    alert("📸 Leaderboard image downloaded! You can now post it on Instagram.");
  });
};
