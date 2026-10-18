'use strict';
const characters = [
 {name:'프람벨',image:'assets/characters/p1.png',detailImage:'assets/characters/pi1.png',role:'느긋한 시골살이를 꿈꾸는 동거인',species:'흡혈귀',icon:'☾',meta:'여성 · 100세 (외견 25세) · 162cm',quote:'“…이거는 토마토 쥬스야. 아마도.”',details:[['어떤 이웃인가요?','도시의 소음에 지쳐 솔안리로 이사 온 실내파 흡혈귀. 도도하고 무심해 보여도 조용히 자기 몫을 해요. 움직임과 말은 적지만 집안일과 정돈은 깔끔합니다. 책과 다큐멘터리를 좋아해요.'],['당신과의 이야기','어째서인지 당신의 피에서 특별히 맛있는 냄새를 느껴요. 당신의 피를 마시면 생기가 돌고 감각도 예민해집니다. 가끔 필요한 피와 햇빛을 피할 양산, 그리고 비밀을 함께 챙겨 주세요.'],['솔안리에서의 하루','저택 2층 큰 방에 살아요. 마을 지리는 아직 서툴고, 문 앞까지 찾아오는 주민들의 관심에 적응 중. ']]},
 {name:'유나',image:'assets/characters/p4.png',detailImage:'assets/characters/pi4.png',role:'에너지 넘치는 진료소의 새 얼굴',species:'인랑',icon:'✧',meta:'여성 · 100세 (외견 24세) · 156cm',quote:'“야호! 놀러왔어!”',details:[['어떤 이웃인가요?','장난기 많고 활발하지만 마음은 순한 인랑. 혼나면 금세 울먹이기도 해요. 호기심이 많아 여러 면허와 자격증을 갖췄고 일도 잘하지만, 엉뚱한 물건이나 과한 수량을 가져오는 장난으로 종종 구박받아요.'],['오랜 친구와 함께','프람벨과는 어린 시절부터 친구. 비슷한 시기에 마을로 왔고, 프람벨이 사람들과 친해지길 바라요.'],['솔안리에서의 하루','진료소에서 간호사로 일하며 병원 안 휴게실에서 숙식해요. 문을 쾅 열 정도로 동작이 큽니다.']]},
 {name:'윤연주',image:'assets/characters/p2.png',detailImage:'assets/characters/pi2.png',role:'말보다 마음이 먼저 기다린 소꿉친구',species:'인간',icon:'♡',meta:'여성 · 21세 · 155cm',quote:'“너 온다고 기다린 건 아니거든.”',details:[['어떤 이웃인가요?','솔직하게 마음을 표현하기 어려운 츤데레. 어릴 적 잠시 마을에 놀러 왔던 당신과 가까워졌고, 그때부터 좋아했어요. 다시 오겠다는 약속을 기억하며 마을에 남아 있었지만 먼저 그 이야기를 꺼내려 하지는 않아요.'],['당신과의 이야기','마을을 떠나고 싶은 마음과 당신을 기다리는 마음 사이에서 시간을 보냈어요. 연애 경험이 없어 다가가는 것도 서툴지만, 무심한 말 뒤에 오래된 애정이 숨어 있습니다.'],['솔안리에서의 하루','부모님이 상솔 슈퍼를 운영해요. ']]},
 {name:'주소현',image:'assets/characters/p3.png',detailImage:'assets/characters/pi3.png',role:'마음을 먼저 살피는 다정한 선생님',species:'인간',icon:'✿',meta:'여성 · 30세 · 160cm',quote:'“오늘은 같이 저녁 드실래요?”',details:[['어떤 이웃인가요?','외지에서 온 성실하고 상냥한 분교 교사. 사람을 좋아하고 늘 주변을 챙겨요. 다만 눈치가 조금 느려 프람벨의 정체는 전혀 모르고 있어요.'],['함께 사는 일상','프람벨의 저택 1층 작은 방에서 월세를 내며 살아요. 동거인이 방 안에만 있는 것이 걱정돼 식사와 일상을 살뜰히 챙깁니다.'],['솔안리에서의 하루','교장 선생님과 함께 작은 분교의 아이들을 가르칩니다. 학교에서든 집에서든, 누군가의 하루에 자연스럽게 다정함을 보태는 사람이에요.']]},
 {name:'윤재희',image:'assets/characters/p6.png',detailImage:'assets/characters/pi6.png',role:'모르는 척도 잘하는 만능 해결사',species:'인간',icon:'☼',meta:'남성 · 28세 · 185cm',quote:'“고장 난 거 있어? 어디 한번 보자.”',details:[['어떤 이웃인가요?','성실하면서도 능글맞고 호쾌한 동네 해결사. 눈치가 빠르고 손재주도 좋아 수리와 여러 문제 해결을 도맡아요. 알면서도 모른 척하는 데 능숙합니다.'],['가족과 이웃','연주를 아끼는 오빠이자, 동생의 짝사랑을 알고 짓궂게 놀리는 장본인. 프람벨이 인간이 아닐지도 모른다고 속으로 의심하지만 굳이 캐묻지는 않아요.'],['솔안리에서의 하루','상솔 슈퍼와 창고를 관리해요. ']]},
 {name:'황도진',image:'assets/characters/p5.png',detailImage:'assets/characters/pi5.png',role:'잔소리까지 섬세한 마을 의사',species:'인간',icon:'＋',meta:'남성 · 34세 · 186cm',quote:'“아프면 참지 말고 와.”',details:[['어떤 이웃인가요?','무뚝뚝하고 현실적이며 조금 다혈질인 의사. 빈말을 하지 않고 한숨도 종종 쉬지만, 섬세한 의술과 환자를 걱정하는 잔소리에는 진심이 담겨 있어요.'],['의외의 인기','아이들을 대하는 데 서툴러 뚝딱거리지만, 정작 마을 아이들에게는 인기 만점이에요. '],['솔안리에서의 하루','진료소 뒤 아주 작은 주택에서 숙식해요.']]}
];
const grid = document.getElementById('character-grid');
characters.forEach((character, index) => {
 const button = document.createElement('button');
 button.className = 'character-card'; button.type = 'button';
 button.setAttribute('aria-label', `${character.name} 상세 소개 보기`);
 button.setAttribute('aria-haspopup', 'dialog');
 button.innerHTML = `<div class="portrait"><img class="portrait-image" src="${character.image}" alt="" loading="lazy"><span class="card-index">NEIGHBOR / 0${index+1}</span><span class="species">${character.species}</span></div><div class="card-content"><div class="card-heading"><h3>${character.name}</h3><span>↗</span></div><p class="card-subtitle">${character.role}</p><p class="card-quote">${character.quote}</p></div>`;
 button.addEventListener('click', () => openCharacter(character, button)); grid.append(button);
});
const dialog = document.getElementById('character-dialog');
const closeButton = dialog.querySelector('.modal-close');
let returnFocus = null, closeTimer = null, isClosing = false;
function openCharacter(character, trigger) {
 clearTimeout(closeTimer); isClosing = false; returnFocus = trigger;
 document.getElementById('modal-character-image').src = character.detailImage;
 document.getElementById('modal-character-image').alt = character.name + ' 캐릭터 일러스트';
 document.getElementById('modal-role').textContent = character.role;
 document.getElementById('modal-name').textContent = character.name;
 document.getElementById('modal-meta').textContent = `${character.species} · ${character.meta}`;
 document.getElementById('modal-quote').textContent = character.quote;
 const details = document.getElementById('modal-details'); details.replaceChildren();
 character.details.forEach(([title, content]) => { const h = document.createElement('h3'); const p = document.createElement('p'); h.textContent = title; p.textContent = content; details.append(h,p); });
 document.body.classList.add('modal-open'); dialog.showModal(); dialog.scrollTop = 0;
 requestAnimationFrame(() => { if (!isClosing && dialog.open) dialog.classList.add('is-open'); });
 closeButton.focus({preventScroll:true});
}
function closeCharacter() {
 if (!dialog.open || isClosing) return;
 isClosing = true; dialog.classList.remove('is-open');
 closeTimer = setTimeout(() => {dialog.close();}, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 230);
}
closeButton.addEventListener('click', closeCharacter);
dialog.addEventListener('cancel', event => {event.preventDefault(); closeCharacter();});
dialog.addEventListener('click', event => { if(event.target === dialog) {const r=dialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) closeCharacter();} });
dialog.addEventListener('close', () => {document.body.classList.remove('modal-open'); dialog.classList.remove('is-open'); isClosing=false; returnFocus?.focus({preventScroll:true});});
const checks = [...document.querySelectorAll('.daily-card input')];
checks.forEach(input => input.addEventListener('change', () => { const done=checks.filter(check=>check.checked).length; document.querySelector('.daily-message').textContent=done===checks.length?'오늘도 다정한 하루를 보냈네요. 내일 또 만나요! ♡':done?`${done}개의 작은 순간을 챙겼어요. 당신의 속도로 즐겨요. ♡`:'모두 하지 않아도 괜찮아요. ♡'; }));

// Loop through the supplied hero illustrations with a soft crossfade.
(() => {
 const frame=document.querySelector('.hero-slideshow');
 if(!frame)return;
 const slides=Array.from({length:6},(_,i)=>'assets/slideshow/'+(i+1)+'.webp');
 const layers=[...frame.querySelectorAll('.slide-image')];
 const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if(reducedMotion)return;
 slides.slice(2).forEach(src=>{const preload=new Image();preload.src=src;});
 let index=0, activeLayer=0;
 window.setInterval(()=>{
  const nextIndex=(index+1)%slides.length;
  const nextLayer=1-activeLayer;
  const incoming=layers[nextLayer];
  const reveal=()=>{incoming.classList.add('is-active');layers[activeLayer].classList.remove('is-active');index=nextIndex;activeLayer=nextLayer;};
  if(incoming.getAttribute('src')===slides[nextIndex]&&incoming.complete)reveal();
  else{incoming.onload=reveal;incoming.src=slides[nextIndex];}
 },5200);
})();
