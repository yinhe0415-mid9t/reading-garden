import { libraryData } from "../data.js";

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

export function renderSeasons(){
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

