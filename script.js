let currentType = "english100";

const quizInfo = {
  english100: {
    title: "英語クイズ100問",
    desc: "初級・中級・上級の英語クイズに挑戦できます。"
  },
  word: {
    title: "英単語クイズ",
    desc: "基本英単語を4択で学べる初心者向けクイズです。"
  },
  toeic: {
    title: "TOEICクイズゲーム",
    desc: "TOEIC頻出単語・文法・ビジネス英語のクイズです。"
  }
};

const quizData = {
  english100: [
    {q:"apple の意味は？", c:["りんご","みかん","ぶどう","ばなな"], a:"りんご"},
    {q:"dog の意味は？", c:["犬","猫","鳥","魚"], a:"犬"},
    {q:"I ___ a student.", c:["am","is","are","be"], a:"am"},
    {q:"He ___ my brother.", c:["is","am","are","be"], a:"is"},
    {q:"however の意味は？", c:["しかしながら","そのため","例えば","さらに"], a:"しかしながら"},
    {q:"therefore の意味は？", c:["したがって","しかし","例えば","一方で"], a:"したがって"}
  ],

  word: [
    {q:"book の意味は？", c:["本","机","椅子","鉛筆"], a:"本"},
    {q:"water の意味は？", c:["水","火","風","土"], a:"水"},
    {q:"school の意味は？", c:["学校","病院","駅","銀行"], a:"学校"},
    {q:"teacher の意味は？", c:["先生","医者","警察官","料理人"], a:"先生"},
    {q:"happy の意味は？", c:["幸せな","悲しい","怒った","眠い"], a:"幸せな"},
    {q:"beautiful の意味は？", c:["美しい","古い","弱い","簡単な"], a:"美しい"}
  ],

  toeic: [
    {q:"increase の意味は？", c:["減少する","増加する","閉じる","壊す"], a:"増加する"},
    {q:"available の意味は？", c:["利用可能な","危険な","暗い","遅い"], a:"利用可能な"},
    {q:"purchase の意味は？", c:["購入する","売る","壊す","閉じる"], a:"購入する"},
    {q:"conference の意味は？", c:["会議","工場","契約","銀行"], a:"会議"},
    {q:"deadline の意味は？", c:["締切","利益","成功","工事"], a:"締切"},
    {q:"invoice の意味は？", c:["請求書","契約","地図","広告"], a:"請求書"}
  ]
};

let questions = [];
let current = 0;
let score = 0;
let answered = false;

const quizList = document.getElementById("quizList");

quizList.innerHTML = Object.keys(quizInfo).map(type => `
  <button onclick="changeQuiz('${type}')" id="tab-${type}">
    ${quizInfo[type].title}
  </button>
`).join("");

function changeQuiz(type){
  currentType = type;

  const info = quizInfo[type];

  document.title = info.title;
  document.getElementById("pageTitle").textContent = info.title;
  document.getElementById("pageDesc").textContent = info.desc;

  document.querySelectorAll("nav button").forEach(btn => {
    btn.classList.remove("active");
  });

  document.getElementById(`tab-${type}`).classList.add("active");

  questions = shuffle([...quizData[type]]);
  current = 0;
  score = 0;
  answered = false;

  showQuestion();
}

function shuffle(array){
  return array.sort(() => Math.random() - 0.5);
}

function showQuestion(){
  answered = false;

  if(current >= questions.length){
    showFinish();
    return;
  }

  const q = questions[current];

  document.getElementById("counter").textContent =
    `${current + 1} / ${questions.length}`;

  document.getElementById("score").textContent =
    `スコア: ${score}`;

  document.getElementById("question").textContent = q.q;
  document.getElementById("result").textContent = "";

  document.getElementById("progressBar").style.width =
    `${(current / questions.length) * 100}%`;

  document.getElementById("choices").innerHTML =
    shuffle([...q.c]).map(choice => `
      <button onclick="checkAnswer(this,'${choice}')">${choice}</button>
    `).join("");
}

function checkAnswer(button, choice){
  if(answered) return;
  answered = true;

  const q = questions[current];
  const buttons = document.querySelectorAll("#choices button");

  buttons.forEach(btn => {
    btn.disabled = true;

    if(btn.textContent === q.a){
      btn.classList.add("correct");
    }
  });

  if(choice === q.a){
    score++;
    button.classList.add("correct");
    document.getElementById("result").textContent = "正解！";
  }else{
    button.classList.add("wrong");
    document.getElementById("result").textContent =
      `不正解。正解は「${q.a}」`;
  }

  document.getElementById("score").textContent = `スコア: ${score}`;

  setTimeout(() => {
    current++;
    showQuestion();
  }, 1200);
}

function showFinish(){
  document.getElementById("progressBar").style.width = "100%";
  document.getElementById("counter").textContent = "終了";
  document.getElementById("question").textContent = "結果発表";

  document.getElementById("choices").innerHTML = `
    <div class="finish">
      <p>${questions.length}問中 ${score}問 正解！</p>
      <button onclick="changeQuiz('${currentType}')">もう一度挑戦する</button>
    </div>
  `;

  document.getElementById("result").textContent = "";
}

changeQuiz("english100");
