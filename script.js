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
    {q:"cat の意味は？", c:["猫","犬","馬","牛"], a:"猫"},
    {q:"book の意味は？", c:["本","机","椅子","鉛筆"], a:"本"},
    {q:"water の意味は？", c:["水","火","風","土"], a:"水"},
    {q:"I ___ a student.", c:["am","is","are","be"], a:"am"},
    {q:"He ___ my brother.", c:["is","am","are","be"], a:"is"},
    {q:"They ___ happy.", c:["are","is","am","be"], a:"are"},
    {q:"This is ___ apple.", c:["an","a","the","is"], a:"an"},
    {q:"I like English. の意味は？", c:["私は英語が好きです","私は英語を話せません","私は英語を勉強しません","私は英語の先生です"], a:"私は英語が好きです"},
    {q:"go の過去形は？", c:["went","goed","goes","going"], a:"went"},
    {q:"eat の過去形は？", c:["ate","eated","eats","eating"], a:"ate"},
    {q:"see の過去形は？", c:["saw","seen","seed","seeing"], a:"saw"},
    {q:"however の意味は？", c:["しかしながら","そのため","例えば","さらに"], a:"しかしながら"},
    {q:"therefore の意味は？", c:["したがって","しかし","例えば","一方で"], a:"したがって"},
    {q:"although の意味は？", c:["〜だけれども","〜なので","〜するために","〜するまで"], a:"〜だけれども"},
    {q:"because of の意味は？", c:["〜のために","〜にもかかわらず","〜の代わりに","〜に加えて"], a:"〜のために"},
    {q:"instead of の意味は？", c:["〜の代わりに","〜に加えて","〜のために","〜にもかかわらず"], a:"〜の代わりに"},
    {q:"look forward to の意味は？", c:["楽しみにする","探す","見下ろす","世話をする"], a:"楽しみにする"},
    {q:"It depends. の意味は？", c:["場合によります","それは簡単です","私は反対です","急いでいます"], a:"場合によります"}
  ],

  word: [
    {q:"school の意味は？", c:["学校","病院","駅","会社"], a:"学校"},
    {q:"teacher の意味は？", c:["先生","生徒","医者","警察官"], a:"先生"},
    {q:"student の意味は？", c:["生徒","先生","会社員","運転手"], a:"生徒"},
    {q:"car の意味は？", c:["車","電車","飛行機","船"], a:"車"},
    {q:"train の意味は？", c:["電車","車","自転車","船"], a:"電車"},
    {q:"sun の意味は？", c:["太陽","月","星","雲"], a:"太陽"},
    {q:"moon の意味は？", c:["月","太陽","星","空"], a:"月"},
    {q:"star の意味は？", c:["星","月","太陽","雲"], a:"星"},
    {q:"red の意味は？", c:["赤","青","白","黒"], a:"赤"},
    {q:"blue の意味は？", c:["青","赤","黄色","緑"], a:"青"},
    {q:"white の意味は？", c:["白","黒","赤","緑"], a:"白"},
    {q:"black の意味は？", c:["黒","白","青","赤"], a:"黒"},
    {q:"big の意味は？", c:["大きい","小さい","速い","遅い"], a:"大きい"},
    {q:"small の意味は？", c:["小さい","大きい","高い","低い"], a:"小さい"},
    {q:"happy の意味は？", c:["幸せな","悲しい","怒った","眠い"], a:"幸せな"},
    {q:"sad の意味は？", c:["悲しい","楽しい","強い","弱い"], a:"悲しい"},
    {q:"morning の意味は？", c:["朝","昼","夜","夕方"], a:"朝"},
    {q:"night の意味は？", c:["夜","朝","昼","夕方"], a:"夜"},
    {q:"family の意味は？", c:["家族","友達","先生","会社"], a:"家族"},
    {q:"friend の意味は？", c:["友達","家族","先生","医者"], a:"友達"}
  ],

  toeic: [
    {q:"increase の意味は？", c:["減少する","増加する","閉じる","壊す"], a:"増加する"},
    {q:"available の意味は？", c:["利用可能な","危険な","暗い","遅い"], a:"利用可能な"},
    {q:"purchase の意味は？", c:["購入する","売る","壊す","閉じる"], a:"購入する"},
    {q:"conference の意味は？", c:["会議","工場","契約","銀行"], a:"会議"},
    {q:"deadline の意味は？", c:["締切","利益","成功","工事"], a:"締切"},
    {q:"employee の意味は？", c:["従業員","社長","投資家","客"], a:"従業員"},
    {q:"schedule の意味は？", c:["予定","事故","利益","空港"], a:"予定"},
    {q:"contract の意味は？", c:["契約","工場","広告","交通"], a:"契約"},
    {q:"customer の意味は？", c:["顧客","店員","銀行","技術"], a:"顧客"},
    {q:"profit の意味は？", c:["利益","失敗","輸送","郵便"], a:"利益"},
    {q:"reservation の意味は？", c:["予約","解雇","出張","工事"], a:"予約"},
    {q:"department の意味は？", c:["部署","空港","倉庫","事故"], a:"部署"},
    {q:"invoice の意味は？", c:["請求書","契約","地図","広告"], a:"請求書"},
    {q:"manager の意味は？", c:["管理者","従業員","顧客","学生"], a:"管理者"},
    {q:"warehouse の意味は？", c:["倉庫","会議","利益","工場"], a:"倉庫"},
    {q:"Please reply ____ Friday.", c:["by","on","with","to"], a:"by"},
    {q:"We are interested ____ your product.", c:["in","for","to","on"], a:"in"},
    {q:"The meeting was canceled ____ the storm.", c:["because of","during","despite","while"], a:"because of"},
    {q:"She is responsible ____ marketing.", c:["for","to","on","at"], a:"for"},
    {q:"I look forward to ____ from you.", c:["hearing","hear","heard","hears"], a:"hearing"}
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
