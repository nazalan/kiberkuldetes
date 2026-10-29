const scenarios = [
  {
    tag: 'GYANÚS ÜZENET', icon: '✉', title: 'Egy sürgető üzenet',
    text: '„Az iskolai fiókod 24 órán belül megszűnik. Jelentkezz be most az alábbi linken!”',
    context: 'Az üzenet ismerős logót használ, de a feladó címe furcsa, és sürget, hogy azonnal cselekedj.',
    choices: [
      { text: 'Megnyitom a linket, hogy gyorsan megmentsem a fiókomat.', correct: false, feedback: 'A sürgetés gyakori trükk: azt szeretné, hogy ellenőrzés nélkül kattints. A link akár egy hamis bejelentkező oldalra is vezethet.' },
      { text: 'Nem kattintok. Külön megnyitom az iskola hivatalos oldalát, vagy megkérdezem az informatikai felelőst.', correct: true, feedback: 'Jó döntés. A szolgáltatást mindig egy ismert, hivatalos címen keresd fel, és az üzenet feladóját is ellenőrizd.' },
      { text: 'Válaszolok az üzenetre, és megkérdezem, valódi-e.', correct: false, feedback: 'A válasz ugyanahhoz a gyanús feladóhoz jut vissza. Ellenőrzéshez használj külön, megbízható csatornát.' }
    ]
  },
  {
    tag: 'MEGTÉVESZTŐ WEBOLDAL', icon: '◎', title: 'Túl jó ajánlat?',
    text: 'Egy közösségi posztban féláron kínálják a népszerű cipőt. A webcímben egy plusz betű van, a fizetéshez pedig sürgetnek.',
    context: 'A weboldal kinézete hasonlít az ismert boltéra, de még sosem hallottál erről a címen működő üzletről.',
    choices: [
      { text: 'Ellenőrzöm a webcímet és a boltról szóló független információkat. Ha gyanús, nem adok meg fizetési adatot.', correct: true, feedback: 'Így van. A lakat ikon vagy a hasonló dizájn önmagában nem bizonyítja, hogy egy oldal valódi. A pontos webcímet és az üzlet hitelességét is ellenőrizd.' },
      { text: 'Megveszem, mert a lakat ikon azt jelenti, hogy az oldal megbízható.', correct: false, feedback: 'A lakat a kapcsolat titkosítását jelzi, nem azt, hogy az oldal üzemeltetője megbízható. A pontos címet és a boltot is ellenőrizd.' },
      { text: 'Megadom a kártyaadataimat, aztán majd figyelem, történik-e valami.', correct: false, feedback: 'A fizetési adatok megadása után nehezebb megelőzni a visszaélést. Előbb ellenőrizd az oldalt, és ne hagyd, hogy a sürgetés döntsön helyetted.' }
    ]
  },
  {
    tag: 'JELSZAVAK', icon: '⌑', title: 'Egy jelszó mindenhol?',
    text: 'Ugyanazt a könnyen megjegyezhető jelszót használod a közösségi oldaladon és az e-mail-fiókodban is.',
    context: 'Egy kevésbé védett szolgáltatás adatai kiszivároghatnak. Mi történik, ha valaki ott megszerzi a jelszavadat?',
    choices: [
      { text: 'Marad minden így, mert a jelszavam hosszú és nehéz kitalálni.', correct: false, feedback: 'Az erős jelszó is kockázatos, ha több helyen használod. Egy kiszivárgott jelszót más fiókoknál is megpróbálhatnak.' },
      { text: 'Minden fontos fiókhoz külön jelszót választok. Jelszókezelővel könnyebb megjegyzés nélkül használni őket.', correct: true, feedback: 'Jó megoldás. A különálló, hosszú jelszavak csökkentik annak esélyét, hogy egyetlen adatszivárgás több fiókodat is veszélybe sodorja.' },
      { text: 'A jelszó végére teszek még egy felkiáltójelet, és akkor mindenhol biztonságos lesz.', correct: false, feedback: 'Egy kis módosítás nem teszi egyedivé a jelszót. A fontos fiókokhoz használj egymástól különböző jelszavakat.' }
    ]
  },
  {
    tag: 'TÖBBFAKTOROS AZONOSÍTÁS', icon: '✳', title: 'Váratlan jóváhagyás',
    text: 'A telefonodon megjelenik egy belépési jóváhagyás, pedig éppen nem próbáltál bejelentkezni.',
    context: 'A felugró ablak azt kéri, hogy hagyd jóvá a belépést. Lehet, hogy valaki a jelszavaddal próbálkozik.',
    choices: [
      { text: 'Jóváhagyom, mert lehet, hogy csak késve érkezett meg a kérésem.', correct: false, feedback: 'Ha nem te indítottad a belépést, ne hagyd jóvá. Az ismétlődő kérések célja lehet, hogy véletlenül elfogadd valamelyiket.' },
      { text: 'Elutasítom. Ha újra előfordul, biztonságos eszközről jelszót cserélek és ellenőrzöm a fiók biztonsági beállításait.', correct: true, feedback: 'Helyes. Az ismeretlen kérést utasítsd el. Az ismétlődő próbálkozás figyelmeztetés: ellenőrizd a fiókodat, és cserélj jelszót.' },
      { text: 'Kikapcsolom a többfaktoros azonosítást, hogy ne zavarjon.', correct: false, feedback: 'A többfaktoros azonosítás extra védelmi réteg. Ne kapcsold ki egy váratlan kérés miatt; inkább utasítsd el, és ellenőrizd a fiókodat.' }
    ]
  },
  {
    tag: 'KÖZÖSSÉGI MÉDIA', icon: '♡', title: 'Egy fotó, több nyom',
    text: 'Indulás előtt kiposztolod, hogy egy hétig nem leszel otthon, mellé pedig feltöltöd a jegyed képét.',
    context: 'A képen látszódhat a jegy vonalkódja, a neved vagy az utazásod részletei is.',
    choices: [
      { text: 'Megosztom, hiszen csak az ismerőseim látják a profilomat.', correct: false, feedback: 'A bejegyzések képernyőképpel továbbküldhetők, a jegyen pedig személyes vagy utazási adat lehet. Érdemes később megosztani, a jegyet pedig kitakarni.' },
      { text: 'Várok a megosztással, a jegyen kitakarom az adatokat, és átnézem, kik láthatják a posztot.', correct: true, feedback: 'Jó döntés. Gondold át, milyen adat látszik a képen, és ne tedd közzé előre, hogy mikor nem vagy otthon.' },
      { text: 'Csak a jegyet teszem ki, mert azon úgysem szerepel jelszó.', correct: false, feedback: 'A jegyen lehetnek azonosításra vagy utazásra használható adatok. Ne ossz meg olyan képet, amelyet más felhasználhat.' }
    ]
  },
  {
    tag: 'ONLINE CSALÁS', icon: '↗', title: 'Csomag érkezik?',
    text: 'SMS-t kapsz: „A csomagod kézbesítése sikertelen. Fizess 490 Ft-ot itt, hogy újra kézbesítsük.”',
    context: 'Nem vársz csomagot, a link rövidített, az üzenet pedig pár órás határidőt ad.',
    choices: [
      { text: 'Nem nyitom meg a linket. A futárszolgálat hivatalos oldalán vagy alkalmazásában ellenőrzöm a küldeményt.', correct: true, feedback: 'Így biztonságosabb. A váratlan díjkérés és a sürgetés gyanús jel. Ellenőrzéshez ne az SMS linkjét használd.' },
      { text: 'Kifizetem a kis összeget, mert 490 Ft nem nagy kockázat.', correct: false, feedback: 'A csalók kis összeggel próbálják elérni, hogy megadd a bankkártyaadataidat. Az üzenetet külön, hivatalos csatornán ellenőrizd.' },
      { text: 'Visszaírok az SMS-re a telefonszámommal, hogy azonosítsák a csomagot.', correct: false, feedback: 'Ne küldj személyes adatot egy gyanús üzenet feladójának. A csomagot a futárcég hivatalos felületén keresd meg.' }
    ]
  }
];

const screens = {
  welcome: document.getElementById('welcome-screen'),
  mission: document.getElementById('mission-screen'),
  finish: document.getElementById('finish-screen')
};
let current = 0;
let xp = 0;
let correctFirstTry = 0;
let answered = false;
const xpTotal = document.getElementById('xp-total');
const choicesBox = document.getElementById('choices');
const feedbackBox = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');

function showScreen(name) {
  Object.entries(screens).forEach(([key, screen]) => screen.classList.toggle('hidden', key !== name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function updateXp(amount) {
  xp += amount;
  xpTotal.textContent = String(xp);
}
function renderScenario() {
  const item = scenarios[current];
  answered = false;
  document.getElementById('scenario-title').textContent = item.title;
  document.getElementById('scenario-icon').textContent = item.icon;
  document.getElementById('scenario-tag').textContent = item.tag;
  document.getElementById('scenario-text').textContent = item.text;
  document.getElementById('scenario-context').textContent = item.context;
  document.getElementById('step-counter').textContent = `${current + 1} / ${scenarios.length}`;
  document.getElementById('progress-fill').style.width = `${((current) / scenarios.length) * 100}%`;
  document.getElementById('category-count').textContent = `${String(current + 1).padStart(2, '0')} / ${String(scenarios.length).padStart(2, '0')} HELYZET`;
  feedbackBox.className = 'feedback hidden';
  feedbackBox.replaceChildren();
  nextButton.classList.add('hidden');
  nextButton.innerHTML = current === scenarios.length - 1 ? 'Eredményem <span aria-hidden="true">→</span>' : 'Következő helyzet <span aria-hidden="true">→</span>';
  choicesBox.replaceChildren();
  item.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = 'choice';
    button.type = 'button';
    button.innerHTML = `<span class="choice-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.querySelector('span:last-child').textContent = choice.text;
    button.addEventListener('click', () => selectChoice(index));
    choicesBox.append(button);
  });
}
function selectChoice(index) {
  if (answered) return;
  answered = true;
  document.getElementById('progress-fill').style.width = `${((current + 1) / scenarios.length) * 100}%`;
  const item = scenarios[current];
  const selected = item.choices[index];
  const buttons = [...choicesBox.querySelectorAll('.choice')];
  buttons.forEach((button, i) => {
    button.disabled = true;
    if (item.choices[i].correct) button.classList.add('correct');
    else if (i === index) button.classList.add('incorrect');
    else button.classList.add('muted');
  });
  if (selected.correct) {
    correctFirstTry += 1;
    updateXp(20);
  } else {
    updateXp(8);
  }
  const title = document.createElement('strong');
  title.textContent = selected.correct ? 'Jó döntés! +20 XP' : 'Ebből is tanulhatsz. +8 XP';
  feedbackBox.replaceChildren(title, document.createTextNode(selected.feedback));
  feedbackBox.classList.remove('hidden');
  if (!selected.correct) feedbackBox.classList.add('wrong');
  nextButton.classList.remove('hidden');
}
function finish() {
  document.getElementById('result-correct').textContent = `${correctFirstTry}/${scenarios.length}`;
  document.getElementById('result-xp').textContent = `${xp} XP`;
  showScreen('finish');
}
document.getElementById('start-button').addEventListener('click', () => {
  current = 0; xp = 0; correctFirstTry = 0; xpTotal.textContent = '0';
  renderScenario(); showScreen('mission');
});
nextButton.addEventListener('click', () => {
  if (current < scenarios.length - 1) { current += 1; renderScenario(); }
  else finish();
});
document.getElementById('restart-button').addEventListener('click', () => {
  current = 0; xp = 0; correctFirstTry = 0; xpTotal.textContent = '0';
  renderScenario(); showScreen('mission');
});
document.getElementById('brand-home').addEventListener('click', event => {
  event.preventDefault(); showScreen('welcome');
});
