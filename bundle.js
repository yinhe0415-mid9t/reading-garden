// ========================================
// Reading Garden — Content Database
// Each section populates daily via date/random
// ========================================

// ── 每日女性历史 ──
const historyEvents = [
  {
    date: "7.13", year: 1977,
    event: "联合国正式设立国际妇女研究及训练中心，推动全球范围内的女性议题学术化与政策化。",
    keywords: ["女性研究", "制度", "学术", "政策"]
  },
  {
    date: "7.14", year: 1915,
    event: "美国女医生、出生控制运动先驱玛格丽特·桑格被捕，因其在诊所向女性提供避孕信息。这场审判引发了关于女性身体自主权的全国性辩论。",
    keywords: ["生育权", "身体自主", "医疗正义", "女医生"]
  },
  {
    date: "7.15", year: 1834,
    event: "伦敦成立了世界上第一所女子护士培训学校，由伊丽莎白·弗莱创办。在此之前，护理被视为低贱职业，女性几乎没有专业训练的通道。",
    keywords: ["女性教育", "职业", "医学", "护理"]
  },
  {
    date: "7.18", year: 1923,
    event: "美国女作家、人类学家佐拉·尼尔·赫斯顿进入巴纳德学院，成为该校第一位非裔美国学生。她的作品为黑人女性经验留下了不可替代的记录。",
    keywords: ["文学", "种族", "教育", "非裔女性"]
  },
  {
    date: "7.20", year: 1960,
    event: "西丽玛沃·班达拉奈克在斯里兰卡宣誓就任总理，成为世界上第一位女性政府首脑。她的当选打破了女性无法担任最高政治领导人的全球性偏见。",
    keywords: ["政治", "领导力", "总理", "亚洲"]
  },
  {
    date: "7.23", year: 1848,
    event: "美国纽约州塞内卡瀑布城举行了第一届女性权利大会。会议发表了《情感宣言》，以独立宣言为蓝本，标志着美国女权运动的正式起点。",
    keywords: ["女权运动", "宣言", "政治权利", "19世纪"]
  },
  {
    date: "7.26", year: 1990,
    event: "《美国残疾人法案》（ADA）签署生效。女性残疾权利活动家朱迪·休曼的长期抗争是推动该法案通过的关键力量之一。",
    keywords: ["残障权利", "交叉性", "女性活动家"]
  },
  {
    date: "7.28", year: 1932,
    event: "美国飞行员阿梅莉亚·埃尔哈特成为第一位独自飞越大西洋的女性。她的勇气不仅打破了航空领域的性别藩篱，也重新定义了公众对女性能力的想象。",
    keywords: ["航空", "探险", "勇气", "打破偏见"]
  },
  {
    date: "8.1", year: 1920,
    event: "美国宪法第十九修正案正式生效，赋予美国女性投票权。这是超过七十年女性选举权运动的里程碑，但原住民女性、亚裔和非裔女性在此后多年仍被剥夺这一权利。",
    keywords: ["投票权", "宪法", "平等", "选举"]
  },
  {
    date: "8.6", year: 1945,
    event: "广岛原子弹爆炸后，日本女画家丸木位里和丸木俊开始创作《广岛之恋》系列绘画。丸木俊以女性视角记录了战争与核灾难对平民的影响。",
    keywords: ["战争", "艺术", "核武器", "反战"]
  },
  {
    date: "8.9", year: 1936,
    event: "杰西·欧文斯在柏林奥运会上赢得四枚金牌，而同期的美国女运动员海伦·斯蒂芬斯也赢得两枚金牌。然而女性运动员获得的媒体关注和赞助远不及男性。",
    keywords: ["体育", "奥运", "性别差距", "运动员"]
  },
  {
    date: "8.18", year: 1920,
    event: "田纳西州以极其微弱的优势批准了第十九修正案，使美国女性投票权最终成为宪法条文。投下关键一票的年轻议员哈里·伯恩的母亲曾写信敦促他「做个好人」。",
    keywords: ["投票权", "宪法", "母亲", "历史转折"]
  },
  {
    date: "8.26", year: 1970,
    event: "全美女性大游行——「女性争取平等罢工」——在纽约第五大道举行，约五万名女性走上街头，要求平等就业、平等薪酬和生育自主权。",
    keywords: ["游行", "平等", "薪酬", "女性运动"]
  },
  {
    date: "9.5", year: 1977,
    event: "美国宇航局首次公开招募女性宇航员候选人。此前航天计划完全由男性主导。首批女性候选人中有物理学家萨莉·莱德，她后来成为美国第一位进入太空的女性。",
    keywords: ["NASA", "太空", "科学", "女性宇航员"]
  },
  {
    date: "9.13", year: 1953,
    event: "美国社会学家、民权活动家保利·默里首次提出「简·克劳」法律理论，后来成为罗诉韦德案中被引用的重要平等保护论据。默里也是第一位获得法学博士学位的非裔美国人。",
    keywords: ["法律", "平等保护", "堕胎权", "非裔女性"]
  },
  {
    date: "9.19", year: 2011,
    event: "联合国妇女署正式启动「他为她」（HeForShe）全球团结运动，由亲善大使艾玛·沃特森发起。该运动邀请男性参与推动性别平等。",
    keywords: ["联合国", "性别平等", "运动", "男性参与"]
  },
];

// ── Kindle 摘录 ──
const highlights = [
  {
    title: "看不见的女性",
    author: "Caroline Criado Perez",
    highlight: "默认男性数据作为标准，导致女性经验被系统性忽略。从城市规划到药物测试，女性身体的缺席不是意外，而是结构性的。",
    dateAdded: "2026.07.10",
    tags: ["数据偏见", "医疗", "女性健康", "城市规划"]
  },
  {
    title: "性别麻烦",
    author: "Judith Butler",
    highlight: "性别不是一种稳定的身份，而是一种被时间性建构的表演。性别的「真实性」不过是社会规范通过重复行为自然化的结果。",
    dateAdded: "2026.07.08",
    tags: ["性别理论", "表演性", "社会建构", "哲学"]
  },
  {
    title: "第二性",
    author: "Simone de Beauvoir",
    highlight: "女人不是天生的，而是后天成为的。文明对性别的塑造从出生就开始了——它不是生物学事实，而是文明的产品。",
    dateAdded: "2026.07.05",
    tags: ["存在主义", "女性主义", "社会建构", "经典"]
  },
  {
    title: "我们应该都是女性主义者",
    author: "Chimamanda Ngozi Adichie",
    highlight: "我们教女孩缩小自己。我们教女孩说抱歉。我们教女孩要讨人喜欢。但如果我们教女孩的不是如何被喜欢，而是如何被尊重呢？",
    dateAdded: "2026.07.03",
    tags: ["教育", "文化", "尊重", "女孩"]
  },
  {
    title: "The Power",
    author: "Naomi Alderman",
    highlight: "当力量转移时，世界不会变得仁慈——但力量的分配会改变。重要的不是谁拥有力量，而是人们如何对待没有力量的人。",
    dateAdded: "2026.06.28",
    tags: ["虚构", "权力", "性别", "科幻"]
  },
  {
    title: "父权制与资本主义",
    author: "上野千鹤子",
    highlight: "家庭主妇的劳动并非「不产生价值」，而是其价值被资本主义与父权制共同隐匿了。无偿家务劳动是劳动力再生产的基础，却被排除在经济核算之外。",
    dateAdded: "2026.06.20",
    tags: ["马克思主义", "家务劳动", "资本主义", "日本女性主义"]
  },
  {
    title: "她们和她们",
    author: "安小庆 等",
    highlight: "每一个敢于说出自己故事的女人，都在为沉默者开辟一条路。个人叙述从来不是个人的——它是政治的，是历史的一部分。",
    dateAdded: "2026.06.15",
    tags: ["口述历史", "个人叙事", "中国女性"]
  },
  {
    title: "女性与权力",
    author: "Mary Beard",
    highlight: "西方文化传统中，女性的声音一旦进入公共领域就被视为不可接受的。这种对女性公开言说的排斥，从荷马史诗时代就开始了。",
    dateAdded: "2026.06.10",
    tags: ["古典学", "公共领域", "声音", "历史"]
  },
  {
    title: "一间自己的房间",
    author: "Virginia Woolf",
    highlight: "一个女人如果要想写小说，必须有钱，和一间属于自己的房间。物质自由是精神自由的前提——这个结论至今没有过时。",
    dateAdded: "2026.06.05",
    tags: ["文学", "写作", "经济独立", "女性创作"]
  },
  {
    title: "Of Woman Born",
    author: "Adrienne Rich",
    highlight: "母职作为一种社会制度，与被体验的母子关系之间存在着深刻的断裂。制度化的母职限制了女性，而母职体验本身可以是赋权的。",
    dateAdded: "2026.05.28",
    tags: ["母职", "制度", "体验", "女性主义经典"]
  },
];

// ── 来源池（种子概念） ──
const concepts = [
  {
    name: "Care Economy",
    nameCn: "照护经济",
    explain: "家庭劳动、育儿、照护老人——这些被经济学家长期定义为「非生产性」的劳动，实际上是社会运转的根基。GDP 不计算照护劳动，本身就是一个政治选择。女性主义经济学家指出，当照护劳动被纳入经济模型，全球 GDP 将增加约 40%。",
    recs: "推荐阅读方向：女性主义经济学",
    tags: ["劳动", "经济", "女性主义", "照护"]
  },
  {
    name: "Intersectionality",
    nameCn: "交叉性",
    explain: "种族、性别、阶级、性取向等社会身份不是彼此独立的，而是相互交织的压迫系统。只分析性别而不考虑种族和阶级，就会忽略黑人女性和白人女性截然不同的生活经验。这个概念由法律学者 Kimberlé Crenshaw 于1989年提出。",
    recs: "推荐阅读：Kimberlé Crenshaw 相关著作",
    tags: ["种族", "性别", "阶级", "理论", "交叉性"]
  },
  {
    name: "Gender Data Gap",
    nameCn: "性别数据缺口",
    explain: "从汽车安全带到药物临床试验，绝大多数数据收集以男性身体为标准。女性被视为「变异」或「小号男性」，导致女性在医疗、交通、科技等领域被系统性边缘化。数据缺口本身就是一种权力结构的可视化。",
    recs: "推荐阅读：《看不见的女性》Caroline Criado Perez",
    tags: ["数据", "医疗", "科技", "偏见"]
  },
  {
    name: "Reproductive Justice",
    nameCn: "生育正义",
    explain: "超越「选择权」框架的生育权利理论。它不仅关心堕胎的合法性，还关心：女性是否有能力生育孩子？是否有能力不生育？是否有能力在安全的环境中养育孩子？这三条构成了生育正义的核心。",
    recs: "推荐阅读方向：生殖正义运动 SisterSong",
    tags: ["生育", "正义", "医疗", "权利"]
  },
  {
    name: "The Male Gaze",
    nameCn: "男性凝视",
    explain: "电影理论家 Laura Mulvey 提出的概念，描述在主流叙事电影中，女性被呈现为男性欲望的被动客体而非独立主体。摄影机视角默认是异性恋男性的，女性观众被迫以男性视角来观看自己的身体。",
    recs: "推荐阅读：Laura Mulvey《Visual Pleasure and Narrative Cinema》",
    tags: ["电影", "媒体", "凝视", "女性主义理论"]
  },
  {
    name: "Emotional Labor",
    nameCn: "情绪劳动",
    explain: "不仅指服务业中需要管理表情的劳动，更指女性在家庭和亲密关系中承担的无形情感工作——记住家人的生日、营造节日氛围、维护关系和谐。这些劳动不被看见，但消耗大量心理能量。",
    recs: "推荐阅读：Arlie Russell Hochschild《The Managed Heart》",
    tags: ["劳动", "情绪", "家庭", "心理学"]
  },
  {
    name: "Bystander Intervention",
    nameCn: "旁观者干预",
    explain: "性别暴力的预防不只是受害者或施暴者的事。旁观者——看到不当言行的人——有能力通过干预改变事件走向。从职场性骚扰到街头骚扰，每个旁观者的沉默或行动都在塑造文化。",
    recs: "推荐阅读方向：Hollaback! Bystander Intervention 培训",
    tags: ["暴力预防", "社区", "行动", "文化"]
  },
];

// ── 来源池（每日文章） ──
const articles = [
  {
    source: "The Guardian",
    title: "Women's health is being short-changed by medical research that ignores biological sex",
    keywords: ["女性健康", "医学研究", "性别数据", "临床试验"]
  },
  {
    source: "Nature",
    title: "How gender stereotypes in AI perpetuate real-world inequalities",
    keywords: ["AI伦理", "性别偏见", "算法", "科技"]
  },
  {
    source: "Harvard Business Review",
    title: "The simple truth about the gender pay gap — and what to do about it",
    keywords: ["薪酬差距", "经济", "职场", "政策"]
  },
  {
    source: "Aeon",
    title: "Why emotional labour is still women's work — and how to change that",
    keywords: ["情绪劳动", "性别角色", "家庭", "关系"]
  },
  {
    source: "The New York Times",
    title: "The mothers who became the world's first computer programmers",
    keywords: ["科技史", "女性先驱", "编程", "计算机"]
  },
  {
    source: "JSTOR Daily",
    title: "The forgotten history of women's self-defense movements",
    keywords: ["女性自卫", "历史", "身体自主", "运动"]
  },
  {
    source: "The Guardian",
    title: "From #MeToo to collective action: how workplace harassment became a labour issue",
    keywords: ["工作场所", "性骚扰", "劳工权利", "集体行动"]
  },
  {
    source: "Nature",
    title: "The case for including sex as a biological variable in every study",
    keywords: ["科学研究", "性别变量", "方法论", "医学"]
  },
  {
    source: "Aeon",
    title: "Feminism wasn't supposed to make women busier — but it did",
    keywords: ["女性主义", "时间", "效率", "倦怠"]
  },
  {
    source: "Harvard Business Review",
    title: "Research: Why women ask for raises less often — and how to fix it",
    keywords: ["薪酬谈判", "职场行为", "自信", "制度"]
  },
];

// ── 阅读记录 ──
function generateTrend() {
  var weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return weekdays.map(function(d, i) {
    // Last 4 days have higher reading, first 3 days lower
    var h = i >= 3 ? (0.5 + Math.random() * 1.5) : (0.3 + Math.random() * 1.2);
    return { day: d, hours: Math.round(h * 10) / 10 };
  });
}

function totalHours(trend) {
  return trend.reduce(function(s, d) { return s + d.hours; }, 0);
}

function avgHours(trend) {
  return Math.round((totalHours(trend) / trend.length) * 10) / 10;
}

function getTodayReading() {
  var trend = generateTrend();
  var total = totalHours(trend);
  return {
    weekHours: Math.round(total * 10) / 10,
    monthHours: Math.round(total * 4.3 * 10) / 10,
    readingDays: trend.filter(function(d) { return d.hours > 0.5; }).length,
    trend: trend,
    readingStreak: Math.floor(Math.random() * 5) + 3,
  };
}

// Fix reading seasons
const readingSeasons = [
  {
    name: "Summer 2026",
    books: [
      { title: "性别麻烦", author: "Judith Butler" },
      { title: "看不见的女性", author: "Caroline Criado Perez" },
      { title: "The Power", author: "Naomi Alderman" },
    ],
  },
  {
    name: "Spring 2026",
    books: [
      { title: "第二性", author: "Simone de Beauvoir" },
      { title: "她们和她们", author: "安小庆 等" },
      { title: "Of Woman Born", author: "Adrienne Rich" },
    ],
  },
  {
    name: "Winter 2025",
    books: [
      { title: "女性与权力", author: "Mary Beard" },
      { title: "一间自己的房间", author: "Virginia Woolf" },
    ],
  },
];

// ── Daily Picker — determinstic from date string ──
function seedFrom(str) {
  var n = 0;
  for (var i = 0; i < str.length; i++) n = ((n << 5) - n) + str.charCodeAt(i);
  return Math.abs(n);
}

function pickOne(arr, seed) {
  return arr[seed % arr.length];
}

function pickN(arr, n, seed) {
  var shuffled = arr.slice();
  var s = seed;
  for (var i = shuffled.length - 1; i > 0; i--) {
    var j = s % (i + 1);
    s = (s * 1103515245 + 12345) | 0;
    var tmp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = tmp;
  }
  return shuffled.slice(0, Math.min(n, shuffled.length));
}

var today = new Date();
var dateKey = (today.getMonth() + 1) + "." + today.getDate();
var dailySeed = seedFrom(today.toDateString());

function getDailyHistory() {
  var match = historyEvents.filter(function(e) { return e.date === dateKey; });
  if (match.length > 0) return match[0];
  return pickOne(historyEvents, dailySeed);
}

function getDailyHighlights() {
  return pickN(highlights, 3, dailySeed + 100);
}

function getDailyConcept() {
  return pickOne(concepts, dailySeed + 200);
}

function getDailyArticle() {
  return pickOne(articles, dailySeed + 300);
}

// Keep backward compat for existing view imports
var todayData = getDailyHistory();
var marginsData = {
  concept: getDailyConcept(),
  article: getDailyArticle(),
};
var libraryData = (function() {
  var r = getTodayReading();
  r.seasons = readingSeasons;
  return r;
})();


function initRouter(onNavigate) {
  document.querySelectorAll("[data-view]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const v = btn.dataset.view;
      navigate(v);
      if (onNavigate) onNavigate(v);
    });
  });
}

function navigate(viewName) {
  document.querySelectorAll(".view").forEach((el) => el.classList.remove("view--active"));
  const target = document.getElementById("view-" + viewName);
  if (target) target.classList.add("view--active");
  document.querySelectorAll("[data-view]").forEach((btn) => {
    btn.classList.toggle("nav-link--active", btn.dataset.view === viewName);
  });
}



function renderGarden() {
  var evt = getDailyHistory();
  document.getElementById("view-garden").innerHTML =
    '<svg class="fern-divider" viewBox="0 0 80 20" fill="none" stroke="#B8B0A0" stroke-width="0.7" stroke-linecap="round"><path d="M10 14 Q25 12 40 8 Q55 4 70 6"/><path d="M18 13 Q14 8 22 11"/><path d="M30 10 Q26 5 34 8"/><path d="M42 8 Q38 3 46 6"/><path d="M54 6 Q50 3 58 5"/></svg>' +
    '<div class="specimen-label">' +
    '<svg class=\"seed-icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#888\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22V6\"/><path d=\"M12 6c-3 0-5 3-5 6s2 4 5 3\"/><path d=\"M12 6c3 0 5 3 5 6s-2 4-5 3\"/></svg>' +
    '<p class="title">Garden</p>' +
    '<p class="subtitle">a seed of history</p>' +
    '</div>' +
    '<p class="event-date">' + evt.date + '</p>' +
    '<p class="event-body"><span class="event-year">' + evt.year + '</span> &middot; ' + evt.event + '</p>' +
    '<div class="event-keywords">' + evt.keywords.map(function(k){return'<span class="event-keyword">'+k+'</span>';}).join("") + '</div>';
}




function renderLeaves(){
  var c = getDailyConcept();
  var a = getDailyArticle();
  document.getElementById("view-leaves").innerHTML =
    '<svg class="fern-divider" viewBox="0 0 80 20" fill="none" stroke="#B8B0A0" stroke-width="0.7" stroke-linecap="round"><path d="M10 14 Q25 12 40 8 Q55 4 70 6"/><path d="M18 13 Q14 8 22 11"/><path d="M30 10 Q26 5 34 8"/><path d="M42 8 Q38 3 46 6"/><path d="M54 6 Q50 3 58 5"/></svg>' +
    '<div class="specimen-label">' +
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V10"/><path d="M12 10c-3 1-5 3-5 6s2 4 5 3"/><path d="M12 10c3 1 5 3 5 6s-2 4-5 3"/></svg>' +
    '<p class="title">Leaves</p>' +
    '<p class="subtitle">a thought unfolding</p>' +
    '</div>' +
    '<p class="leaf-title">' + c.name + '</p>' +
    '<p class="leaf-subtitle">' + c.nameCn + '</p>' +
    '<p class="leaf-body">' + c.explain + '</p>' +
    '<p class="leaf-rec">' + c.recs + '</p>' +
    '<div class="leaf-tags">' + c.tags.map(function(t){return'<span class="leaf-tag">'+t+'</span>';}).join("") + '</div>' +
    '<hr class="inner-divider" />' +
    '<div class="specimen-label">' +
    '<p class="title" style="margin-top:0">Seeds</p>' +
    '<p class="subtitle">worth reading</p>' +
    '</div>' +
    '<p class="article-source">' + a.source + '</p>' +
    '<p class="article-title">' + a.title + '</p>' +
    '<div class="leaf-tags">' + a.keywords.map(function(k){return'<span class="leaf-tag">'+k+'</span>';}).join("") + '</div>';
}




function ls(key){try{return JSON.parse(localStorage.getItem(key))}catch(e){return null}}
function lss(key,val){localStorage.setItem(key,JSON.stringify(val))}
function todayKey(){return new Date().toISOString().slice(0,10)}

function getSessions(){return ls("rg_sessions")||[]}
function getActive(){return ls("rg_active")}
function setActive(s){if(s)lss("rg_active",s);else localStorage.removeItem("rg_active")}
function getLastSession(){return ls("rg_last_session")}
function setLastSession(s){if(s)lss("rg_last_session",s);else localStorage.removeItem("rg_last_session")}

function getRealTrend(){
  var sessions=getSessions(),days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var today=new Date(),result=[];
  for(var i=6;i>=0;i--){
    var d=new Date(today);d.setDate(d.getDate()-i);
    var key=d.toISOString().slice(0,10),total=0;
    sessions.forEach(function(s){if(s.date===key)total+=s.hours});
    result.push({day:days[d.getDay()],hours:Math.round(total*10)/10});
  }
  return result;
}

function getRealStats(){
  var sessions=getSessions();
  var week=0,month=0,blooms=0;
  var now=new Date(),weekAgo=new Date(now);weekAgo.setDate(weekAgo.getDate()-7);
  var monthAgo=new Date(now);monthAgo.setDate(monthAgo.getDate()-30);
  sessions.forEach(function(s){
    if(s.date>=weekAgo.toISOString().slice(0,10))week+=s.hours;
    if(s.date>=monthAgo.toISOString().slice(0,10)){month+=s.hours;blooms++}
  });
  return{weekHours:Math.round(week*10)/10,monthHours:Math.round(month*10)/10,blooms:blooms};
}


function getFernSVG(min){
  if(min<30)return'<svg class="calendar-fern" viewBox="0 0 14 10" fill="none" stroke="#bbb" stroke-width="0.6" stroke-linecap="round"><path d="M2 8 Q4 5 7 3 Q10 2 12 2"/><path d="M9 4 Q8 2 10 3"/></svg>';
  if(min<60)return'<svg class="calendar-fern" viewBox="0 0 18 12" fill="none" stroke="#888" stroke-width="0.7" stroke-linecap="round"><path d="M2 10 Q5 7 9 4 Q13 2 16 2"/><path d="M6 8 Q5 5 8 6"/><path d="M11 5 Q10 3 13 4"/></svg>';
  return'<svg class="calendar-fern" viewBox="0 0 22 14" fill="none" stroke="#555" stroke-width="0.8" stroke-linecap="round"><path d="M2 12 Q6 8 11 4 Q16 2 20 2"/><path d="M5 10 Q4 6 8 7"/><path d="M10 6 Q9 3 13 4"/><path d="M15 4 Q14 2 17 3"/></svg>';
}

function buildCalendar(){
  var s=getSessions(),n=new Date(),y=n.getFullYear(),m=n.getMonth();
  var startDay=new Date(y,m,1).getDay(),daysInMonth=new Date(y,m+1,0).getDate();
  var mn=["January","February","March","April","May","June","July","August","September","October","November","December"];
  var daily={};
  s.forEach(function(e){
    var p=e.date.split("-");
    if(parseInt(p[0])===y&&parseInt(p[1])===m+1)daily[e.date]=(daily[e.date]||0)+e.hours*60;
  });
  var dc=0,tm=0,mx=0;
  Object.keys(daily).forEach(function(d){dc++;tm+=daily[d];if(daily[d]>mx)mx=daily[d];});
  var h='<div class="specimen-label"><p class="title" style="margin-top:0">Reading Calendar</p><p class="subtitle">'+mn[m]+" "+y+'</p></div><div class="calendar-grid">';
  ["Su","Mo","Tu","We","Th","Fr","Sa"].forEach(function(d){h+='<div class="cal-hdr">'+d+"</div>";});
  for(var i=0;i<startDay;i++)h+='<div class="cal-cell"></div>';
  for(var d=1;d<=daysInMonth;d++){
    var key=y+"-"+(m<9?"0":"")+(m+1)+"-"+(d<10?"0":"")+d,min=daily[key]||0;
    h+='<div class="cal-cell"><span class="cal-day">'+d+"</span>";
    if(min>0)h+=getFernSVG(min);
    h+="</div>";
  }
  h+="</div>";
  var mxH=Math.floor(mx/60),mxM=Math.round(mx%60);
  h+='<div class="calendar-stats">'+dc+" days &middot; "+Math.round(tm/60*10)/10+'h &middot; '+(mxH>0?mxH+"h ":"")+mxM+"min max</div>";
  return h;
}
function getTodayHours(){
  var sessions=getSessions(),today=todayKey(),total=0;
  sessions.forEach(function(s){if(s.date===today)total+=s.hours});
  return Math.round(total*10)/10;
}

function chartSVG(trend){
  var w=600,h=200,pl=50,pr=20,pt=20,pb=30;
  var plotW=w-pl-pr,plotH=h-pt-pb,ymax=Math.max(3,Math.ceil(Math.max.apply(null,trend.map(function(d){return d.hours}))*1.2));
  if(ymax<1)ymax=3;
  var xStep=plotW/(trend.length-1);
  var pts=trend.map(function(d,i){return{x:pl+i*xStep,y:pt+plotH-(d.hours/ymax)*plotH,label:d.day,hours:d.hours};});
  var poly=pts.map(function(p){return p.x+","+p.y;}).join(" ");
  var avg=trend.reduce(function(s,d){return s+d.hours;},0)/trend.length;
  var avgY=pt+plotH-(avg/ymax)*plotH;
  var yt=[];for(var v=0;v<=ymax;v++){yt.push({v:v,y:pt+plotH-(v/ymax)*plotH})}
  var svg='<svg class="chart-svg" viewBox="0 0 "+w+" "+h+"">';
  svg+=yt.map(function(t){return'<line x1="'+pl+'" y1="'+t.y+'" x2="'+(pl+plotW)+'" y2="'+t.y+'" class="chart-grid"/>';}).join("");
  svg+=yt.map(function(t){return'<text x="'+(pl-8)+'" y="'+(t.y+3)+'" class="chart-label" text-anchor="end">'+t.v+'</text>';}).join("");
  svg+='<line x1="'+pl+'" y1="'+avgY+'" x2="'+(pl+plotW)+'" y2="'+avgY+'" class="chart-avg-line"/>';
  svg+='<text x="'+(pl+plotW+2)+'" y="'+(avgY+3)+'" class="chart-avg-label">avg</text>';
  svg+='<polyline points="'+poly+'" class="chart-line"/>';
  svg+=pts.map(function(p){return'<circle cx="'+p.x+'" cy="'+p.y+'" r="2" class="chart-dot"/>';}).join("");
  svg+=pts.map(function(p){return'<text x="'+p.x+'" y="'+(h-pb+16)+'" class="chart-label" text-anchor="middle">'+p.label+'</text>';}).join("");
  svg+=pts.map(function(p){return p.hours>0?'<text x="'+p.x+'" y="'+(p.y-9)+'" class="chart-val">'+p.hours+'h</text>':"";}).join("");
  svg+='</svg>';return svg;
}

function renderSeasons(){
  var fern = '<svg class=\"fern-divider\" viewBox=\"0 0 80 20\" fill=\"none\" stroke=\"#B8B0A0\" stroke-width=\"0.7\" stroke-linecap=\"round\"><path d=\"M10 14 Q25 12 40 8 Q55 4 70 6\"/><path d=\"M18 13 Q14 8 22 11\"/><path d=\"M30 10 Q26 5 34 8\"/><path d=\"M42 8 Q38 3 46 6\"/><path d=\"M54 6 Q50 3 58 5\"/></svg>';
  var sessions=getSessions();
  var stats=sessions.length>0?getRealStats():{weekHours:libraryData.weekHours,monthHours:libraryData.monthHours,blooms:libraryData.readingDays};
  var active=getActive();
  var lastSession=getLastSession();

  var html=fern + 
    '<div class="specimen-label">' +
    '<svg class=\"rings-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#888\" stroke-width=\"1\" stroke-linecap=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"7\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\"/></svg>' +
    '<p class="title">Seasons</p>' +
    '<p class="subtitle">rings of growth</p>' +
    '</div>';

  if(active){
    var st=new Date(active.start);
    var el=Math.floor((Date.now()-st)/1000);
    var eh=Math.floor(el/3600),em=Math.floor((el%3600)/60),es=el%60;
    html+='<div class="session-area">';
    
    
    html+='<svg class=\"session-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22V8\"/><path d=\"M12 8c-4 0-7 3-7 7s3 5 7 3\"/><path d=\"M12 8c4 0 7 3 7 7s-3 5-7 3\"/><path d=\"M8 10c0-2 2-3 4-2\"/><path d=\"M16 10c0-2-2-3-4-2\"/></svg> <span class="session-action" id="btn-end-session">End Reading</span>';
    html+='</div>';
  } else if(lastSession){
    var lst=new Date(lastSession.start);var lend=new Date(lastSession.end);
    var lh=Math.floor(lastSession.hours);var lm=Math.round((lastSession.hours%1)*60);
    html+='<div class="session-area">';
    
    
    html+='<span class="session-action" id="btn-done-session">Done</span>';
    html+='</div>';
  } else {
    html+='<div class="session-area">';
    html+='<svg class=\"session-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22V10\"/><path d=\"M12 10c-3 1-5 3-5 6s2 4 5 3\"/><path d=\"M12 10c3 1 5 3 5 6s-2 4-5 3\"/></svg> <span class="session-action" id="btn-start-session">Start Reading</span>';
    html+='</div>';
  }

  html+='<svg class=\"rings-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#888\" stroke-width=\"1\" stroke-linecap=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"7\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\"/></svg>';

  html+='<div class="stats-bloom">';
  html+='<p class="bloom-count">' + stats.blooms + ' blooms</p>';
  html+='<p class="bloom-label">sessions this month</p>';
  html+='</div>';
  html+='<p class="stats-reading">' + stats.monthHours + 'h of reading</p>';

  
  html+=buildCalendar();
  ;

  

  document.getElementById("view-seasons").innerHTML=html;
  setTimeout(function(){setupSession()},0);

}

function setupSession(){
  var startBtn=document.getElementById("btn-start-session");
  var endBtn=document.getElementById("btn-end-session");
  var doneBtn=document.getElementById("btn-done-session");
  if(startBtn)startBtn.addEventListener("click",function(){setActive({start:new Date().toISOString()});renderSeasons();});
  if(endBtn)endBtn.addEventListener("click",function(){
    var act=getActive();if(!act)return;
    var start=new Date(act.start);var end=new Date();
    var hours=Math.round((end-start)/3600000*10)/10;if(hours<0.1)hours=0.1;
    var sessions=getSessions();var today=todayKey();
    sessions.push({date:today,start:act.start,end:end.toISOString(),hours:hours});
    lss("rg_sessions",sessions);setActive(null);setLastSession({start:act.start,end:end.toISOString(),hours:hours});
    renderSeasons();
  });
  if(doneBtn)doneBtn.addEventListener("click",function(){setLastSession(null);renderSeasons();});
}








const RENDER = { garden: renderGarden, seasons: renderSeasons, leaves: renderLeaves };
var rendered = {};

document.addEventListener("DOMContentLoaded", () => {
  var now = new Date();
  document.getElementById("header-date").textContent =
    now.toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric", weekday: "long" });

  renderGarden();
  rendered.garden = true;

  initRouter((v) => {
    if (!rendered[v]) {
      var fn = RENDER[v];
      if (fn) fn();
      rendered[v] = true;
    }
  });
});