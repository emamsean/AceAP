
let player = {};
const quizzes = {
 
  "AP Biology": [
    { topic: "Cell Structure and Function", question: "Which organelle is responsible for energy production?", options: ["Mitochondria", "Nucleus", "Ribosome", "Chloroplast"], answer: "Mitochondria" },
    { topic: "Cell Structure and Function", question: "What structure surrounds all cells and regulates entry and exit?", options: ["Nucleus", "Cytoplasm", "Cell membrane", "Cell wall"], answer: "Cell membrane" },
    { topic: "Genetics", question: "What molecule carries genetic information?", options: ["RNA", "Protein", "DNA", "ATP"], answer: "DNA" },
    { topic: "Genetics", question: "What is the shape of a DNA molecule?", options: ["Double helix", "Single strand", "Triple helix", "Circle"], answer: "Double helix" },
    { topic: "Evolution", question: "What is the term for changes in species over time?", options: ["Reproduction", "Evolution", "Migration", "Isolation"], answer: "Evolution" },
    { topic: "Evolution", question: "Who proposed natural selection?", options: ["Einstein", "Newton", "Darwin", "Mendel"], answer: "Darwin" },
    { topic: "Ecology", question: "What do we call all living and nonliving things in an area?", options: ["Community", "Population", "Ecosystem", "Biome"], answer: "Ecosystem" },
    { topic: "Ecology", question: "Which level of ecological organization includes all biotic and abiotic factors?", options: ["Community", "Ecosystem", "Population", "Species"], answer: "Ecosystem" },
    { topic: "Physiology", question: "Which system delivers oxygen to body tissues?", options: ["Digestive", "Respiratory", "Circulatory", "Nervous"], answer: "Circulatory" },
    { topic: "Physiology", question: "What part of the brain controls heartbeat and breathing?", options: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"], answer: "Medulla" }
  ],
   "AP Chemistry": [
    { topic: "Atomic Structure", question: "What is the atomic number of carbon?", options: ["6", "12", "14", "8"], answer: "6" },
    { topic: "Atomic Structure", question: "Which subatomic particle has no charge?", options: ["Electron", "Proton", "Neutron", "Photon"], answer: "Neutron" },
    { topic: "Chemical Bonding", question: "What type of bond involves shared electrons?", options: ["Ionic", "Covalent", "Hydrogen", "Metallic"], answer: "Covalent" },
    { topic: "Chemical Bonding", question: "What is the shape of a water molecule?", options: ["Linear", "Bent", "Tetrahedral", "Trigonal"], answer: "Bent" },
    { topic: "Thermodynamics", question: "What is the unit of enthalpy?", options: ["Kelvin", "Joule", "Mole", "Pascal"], answer: "Joule" },
    { topic: "Thermodynamics", question: "What type of reaction releases heat?", options: ["Endothermic", "Exothermic", "Isothermal", "Adiabatic"], answer: "Exothermic" },
    { topic: "Equilibrium", question: "What does Le Chatelier's Principle predict?", options: ["Direction of shift", "Energy levels", "Bond strength", "Electron configuration"], answer: "Direction of shift" },
    { topic: "Equilibrium", question: "What happens when pressure is increased on a system at equilibrium?", options: ["Shift to fewer moles of gas", "No change", "Shift to more moles of gas", "Stops reaction"], answer: "Shift to fewer moles of gas" }
  ],
  "AP Calculus": [
    { topic: "Limits", question: "What is the limit of sin(x)/x as x approaches 0?", options: ["0", "1", "Infinity", "Undefined"], answer: "1" },
    { topic: "Limits", question: "What is the notation for a left-hand limit?", options: ["lim x→a−", "lim x→a+", "lim x→a", "lim x=a"], answer: "lim x→a−" },
    { topic: "Derivatives", question: "What is the derivative of x^3?", options: ["3x^2", "x^2", "x^3", "3x"], answer: "3x^2" },
    { topic: "Derivatives", question: "What rule is used for (fg)'?", options: ["Chain Rule", "Product Rule", "Quotient Rule", "Sum Rule"], answer: "Product Rule" },
    { topic: "Integrals", question: "What is ∫x dx?", options: ["x", "x^2", "x^2/2", "2x"], answer: "x^2/2" },
    { topic: "Integrals", question: "What is ∫e^x dx?", options: ["e^x", "ln x", "1/x", "x e^x"], answer: "e^x" },
    { topic: "Applications of Derivatives", question: "What is a critical point?", options: ["Where f'(x)=0 or undefined", "Where f(x)=0", "Where f''(x)=0", "Max value"], answer: "Where f'(x)=0 or undefined" },
    { topic: "Applications of Derivatives", question: "What does the first derivative tell us?", options: ["Slope", "Area", "Curvature", "Intercept"], answer: "Slope" }
  ],
  "AP Environmental Science": [
    { topic: "Ecosystems", question: "Which biome has the highest biodiversity?", options: ["Tundra", "Desert", "Tropical Rainforest", "Grassland"], answer: "Tropical Rainforest" },
    { topic: "Ecosystems", question: "What process moves carbon from the atmosphere to plants?", options: ["Respiration", "Decomposition", "Photosynthesis", "Evaporation"], answer: "Photosynthesis" },
    { topic: "Biodiversity", question: "What is biodiversity?", options: ["Variety of species", "Number of ecosystems", "Amount of rainfall", "Human population"], answer: "Variety of species" },
    { topic: "Biodiversity", question: "What is a keystone species?", options: ["Most abundant species", "Rare species", "Species with large ecosystem impact", "Top predator"], answer: "Species with large ecosystem impact" },
    { topic: "Pollution", question: "Which pollutant causes acid rain?", options: ["Carbon dioxide", "Sulfur dioxide", "Methane", "Ozone"], answer: "Sulfur dioxide" },
    { topic: "Pollution", question: "What is the primary cause of eutrophication?", options: ["Acid rain", "Pesticides", "Nutrient runoff", "Ozone depletion"], answer: "Nutrient runoff" }
  ],
  "AP Literature": [
    { topic: "Poetry Analysis", question: "Which of these is a common feature of a sonnet?", options: ["14 lines", "Free verse", "Rhyming couplets", "Epic length"], answer: "14 lines" },
    { topic: "Poetry Analysis", question: "What is iambic pentameter?", options: ["10 syllables per line, alternating stress", "Free meter", "12 syllables per line", "Prose style"], answer: "10 syllables per line, alternating stress" },
    { topic: "Prose Fiction", question: "Who is the narrator of 'The Great Gatsby'?", options: ["Gatsby", "Nick Carraway", "Daisy", "Tom"], answer: "Nick Carraway" },
    { topic: "Prose Fiction", question: "Which novel features the character Hester Prynne?", options: ["The Scarlet Letter", "Pride and Prejudice", "Jane Eyre", "Moby Dick"], answer: "The Scarlet Letter" },
    { topic: "Drama", question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Marlowe", "Sophocles", "Chekhov"], answer: "Shakespeare" },
    { topic: "Drama", question: "What is a soliloquy?", options: ["A speech to oneself on stage", "A dialogue", "A monologue to others", "Comic relief"], answer: "A speech to oneself on stage" },
    { topic: "Literary Devices", question: "What is a metaphor?", options: ["Comparison without like or as", "Exaggeration", "Simile", "Onomatopoeia"], answer: "Comparison without like or as" },
    { topic: "Literary Devices", question: "What is personification?", options: ["Giving human traits to non-humans", "A kind of poem", "An unreliable narrator", "A tragic flaw"], answer: "Giving human traits to non-humans" },
    { topic: "Reading Comprehension", question: "What is the tone of a passage?", options: ["The author's attitude", "The setting", "The conflict", "The theme"], answer: "The author's attitude" },
    { topic: "Reading Comprehension", question: "What is a theme in literature?", options: ["Main idea or message", "Plot summary", "Character list", "Setting"], answer: "Main idea or message" }
  ],
  "AP U.S. Government": [
    { topic: "Foundations of American Democracy", question: "What document outlines the structure of the U.S. government?", options: ["Declaration of Independence", "Articles of Confederation", "U.S. Constitution", "Federalist Papers"], answer: "U.S. Constitution" },
    { topic: "Foundations of American Democracy", question: "What concept divides power between national and state governments?", options: ["Federalism", "Checks and Balances", "Republicanism", "Democracy"], answer: "Federalism" },
    { topic: "Civil Liberties and Rights", question: "Which amendment guarantees freedom of speech?", options: ["First", "Second", "Fifth", "Tenth"], answer: "First" },
    { topic: "Civil Liberties and Rights", question: "Which court case established judicial review?", options: ["Marbury v. Madison", "Brown v. Board", "Roe v. Wade", "Gideon v. Wainwright"], answer: "Marbury v. Madison" },
    { topic: "Political Participation", question: "What is the primary method for citizens to influence government?", options: ["Protests", "Voting", "Lobbying", "Debating"], answer: "Voting" },
    { topic: "Political Participation", question: "Which group raises and spends money to influence elections?", options: ["PACs", "Congress", "Supreme Court", "Agencies"], answer: "PACs" }
  ],
  "AP Statistics": [
    { topic: "Exploring One-Variable Data", question: "What is the median of [3, 5, 7, 9, 11]?", options: ["7", "5", "6", "9"], answer: "7" },
    { topic: "Exploring One-Variable Data", question: "Which measure of central tendency is most affected by outliers?", options: ["Mean", "Median", "Mode", "Range"], answer: "Mean" },
    { topic: "Two-Variable Data", question: "What does a correlation coefficient measure?", options: ["Causation", "Strength of a linear relationship", "Probability", "Variance"], answer: "Strength of a linear relationship" },
    { topic: "Two-Variable Data", question: "What type of plot shows the relationship between two quantitative variables?", options: ["Histogram", "Dotplot", "Scatterplot", "Boxplot"], answer: "Scatterplot" },
    { topic: "Collecting Data", question: "What is a simple random sample?", options: ["Sample with stratified grouping", "Sample where every individual has equal chance", "Sample by convenience", "Survey of volunteers"], answer: "Sample where every individual has equal chance" },
    { topic: "Collecting Data", question: "What is the purpose of a control group in an experiment?", options: ["To eliminate the need for variables", "To serve as a comparison", "To ensure randomization", "To simplify analysis"], answer: "To serve as a comparison" },
    { topic: "Probability", question: "What is the probability of flipping heads on a fair coin?", options: ["0", "0.25", "0.5", "1"], answer: "0.5" },
    { topic: "Probability", question: "If events A and B are independent, what is P(A and B)?", options: ["P(A) + P(B)", "P(A) * P(B)", "P(A)/P(B)", "P(A) - P(B)"], answer: "P(A) * P(B)" },
    { topic: "Inference", question: "What does a confidence interval estimate?", options: ["The population size", "The sampling error", "A population parameter", "A statistic"], answer: "A population parameter" },
    { topic: "Inference", question: "What is a null hypothesis in a significance test?", options: ["The expected result", "The claim to test", "The alternative", "The sample mean"], answer: "The claim to test" }
  ],
"AP World History": [
    { topic: "Ancient Civilizations", question: "Which river valley civilization was in Mesopotamia?", options: ["Indus", "Nile", "Tigris-Euphrates", "Yellow"], answer: "Tigris-Euphrates" },
    { topic: "Ancient Civilizations", question: "What writing system did the Sumerians develop?", options: ["Hieroglyphics", "Cuneiform", "Sanskrit", "Latin"], answer: "Cuneiform" },
    { topic: "Trade Routes", question: "Which route connected China to the Mediterranean?", options: ["Spice Route", "Silk Road", "Atlantic Route", "Triangular Trade"], answer: "Silk Road" },
    { topic: "Trade Routes", question: "What goods were primarily traded on the Trans-Saharan route?", options: ["Spices and silk", "Gold and salt", "Tea and porcelain", "Wine and wool"], answer: "Gold and salt" },
    { topic: "Modern Conflicts", question: "Which war began in 1914?", options: ["World War I", "World War II", "Vietnam War", "Cold War"], answer: "World War I" },
    { topic: "Modern Conflicts", question: "Which event started World War II?", options: ["Pearl Harbor", "German invasion of Poland", "D-Day", "Battle of Britain"], answer: "German invasion of Poland" }
  ],
  "AP Physics": [
    { topic: "Mechanics", question: "What is the unit of force?", options: ["Newton", "Pascal", "Joule", "Watt"], answer: "Newton" },
    { topic: "Mechanics", question: "What is Newton's Second Law?", options: ["F = ma", "E = mc^2", "V = IR", "P = IV"], answer: "F = ma" },
    { topic: "Mechanics", question: "What is kinetic energy's formula?", options: ["1/2 mv^2", "mv", "ma", "v^2/2"], answer: "1/2 mv^2" },
    { topic: "Mechanics", question: "What is the acceleration due to gravity?", options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "11 m/s²"], answer: "9.8 m/s²" },
    { topic: "Mechanics", question: "Which quantity is conserved in a collision?", options: ["Momentum", "Force", "Velocity", "Power"], answer: "Momentum" },
    { topic: "Waves and Optics", question: "What type of wave is light?", options: ["Longitudinal", "Transverse", "Torsional", "Standing"], answer: "Transverse" },
    { topic: "Waves and Optics", question: "What property of a wave determines pitch?", options: ["Frequency", "Amplitude", "Speed", "Phase"], answer: "Frequency" },
    { topic: "Waves and Optics", question: "What is the speed of light in vacuum?", options: ["3×10^8 m/s", "1×10^6 m/s", "3×10^6 m/s", "1.5×10^8 m/s"], answer: "3×10^8 m/s" },
    { topic: "Waves and Optics", question: "What does a convex lens do?", options: ["Converges light", "Diverges light", "Reflects light", "Blocks light"], answer: "Converges light" },
    { topic: "Waves and Optics", question: "What is the unit of frequency?", options: ["Hertz", "Decibel", "Newton", "Joule"], answer: "Hertz" },
    { topic: "Electricity and Magnetism", question: "What is Ohm's Law?", options: ["V = IR", "F = ma", "E = mc^2", "P = IV"], answer: "V = IR" },
    { topic: "Electricity and Magnetism", question: "What is the unit of electric current?", options: ["Ampere", "Volt", "Watt", "Ohm"], answer: "Ampere" },
    { topic: "Electricity and Magnetism", question: "What is the charge of a proton?", options: ["+1", "-1", "0", "+2"], answer: "+1" },
    { topic: "Electricity and Magnetism", question: "What is the direction of magnetic field around a wire?", options: ["Circular", "Straight", "Spiral", "Random"], answer: "Circular" },
    { topic: "Electricity and Magnetism", question: "What does a transformer change?", options: ["Voltage", "Current", "Resistance", "Capacitance"], answer: "Voltage" },
    { topic: "Thermodynamics", question: "Which law states that energy cannot be created or destroyed?", options: ["First law", "Second law", "Zeroth law", "Third law"], answer: "First law" },
    { topic: "Thermodynamics", question: "What is the measure of average kinetic energy?", options: ["Temperature", "Pressure", "Heat", "Volume"], answer: "Temperature" },
    { topic: "Thermodynamics", question: "What is heat transfer through a fluid?", options: ["Convection", "Conduction", "Radiation", "Compression"], answer: "Convection" },
    { topic: "Thermodynamics", question: "Which process occurs at constant temperature?", options: ["Isothermal", "Adiabatic", "Isobaric", "Isochoric"], answer: "Isothermal" },
    { topic: "Thermodynamics", question: "What is the SI unit of heat?", options: ["Joule", "Calorie", "Watt", "Kelvin"], answer: "Joule" },
    { topic: "Modern Physics", question: "What particle is emitted in beta decay?", options: ["Electron", "Proton", "Neutron", "Photon"], answer: "Electron" },
    { topic: "Modern Physics", question: "What is the photoelectric effect?", options: ["Ejection of electrons by light", "Light bending in prism", "Refraction", "Emission of heat"], answer: "Ejection of electrons by light" },
    { topic: "Modern Physics", question: "Who explained the photoelectric effect?", options: ["Einstein", "Newton", "Bohr", "Curie"], answer: "Einstein" },
    { topic: "Modern Physics", question: "What is a photon?", options: ["Quantum of light", "Quantum of charge", "Sound wave", "Electric field"], answer: "Quantum of light" },
    { topic: "Modern Physics", question: "What does E=mc^2 represent?", options: ["Mass-energy equivalence", "Kinetic energy", "Heat flow", "Wave speed"], answer: "Mass-energy equivalence" }
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
