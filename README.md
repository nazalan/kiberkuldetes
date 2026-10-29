# KiberKüldetés | CyberQuest

**Szituációalapú, gamifikált kiberbiztonsági oktatási prototípus középiskolások számára.**

**A scenario-based, gamified cybersecurity education prototype for secondary school students.**

🇭🇺 [Magyar](#magyar) | 🇬🇧 [English](#english)

---

## Magyar

### A projektről

A KiberKüldetés egy interaktív, webalapú oktatási prototípus, amelynek célja a középiskolás tanulók kiberbiztonsági tudatosságának fejlesztését támogató gyakorlási lehetőség biztosítása.

Az alkalmazás hétköznapi digitális szituációkat mutat be, amelyekben a felhasználónak három lehetséges cselekvés közül kell kiválasztania a legbiztonságosabbat. Minden döntést azonnali, magyarázó visszajelzés követ, amely segít megérteni a választás mögötti kiberbiztonsági kockázatokat és alapelveket.

A projekt a Budapesti Műszaki és Gazdaságtudományi Egyetem Gazdaság- és Társadalomtudományi Karán készített TDK-dolgozat részeként valósult meg.

### Oktatási témakörök

Az alkalmazás hat kiberbiztonsági szituációt tartalmaz:

1. Adathalász üzenetek felismerése
2. Megtévesztő webáruházak és online vásárlási csalások
3. Jelszóismétlés és fiókbiztonság
4. Váratlan többfaktoros hitelesítési kérések
5. Személyes adatok megosztása a közösségi médiában
6. Hamis csomagkézbesítési értesítések

A szituációk célja, hogy a tanulók ne pusztán biztonsági szabályokat idézzenek fel, hanem konkrét döntési helyzetekben alkalmazzák ismereteiket.

### Az alkalmazás működése

- Hat egymást követő, hétköznapi kiberbiztonsági szituáció.
- Szituációnként három válaszlehetőség.
- Minden választáshoz külön magyarázó visszajelzés.
- A helyes és helytelen döntések vizuális megkülönböztetése.
- Tapasztalati pontok (XP) gyűjtése.
- A teljesített feladatok arányát mutató haladásjelző.
- A feladatsor végén eredményösszesítés.
- Újrakezdési lehetőség.

A helyes első válasz 20 XP-t, a helytelen döntés 8 XP-t ér. A hat feladat teljesítésével 48 és 120 közötti pontszám érhető el.

A pontozás játékosítási eszköz, nem tekinthető önálló, validált tudásmérőnek.

### Technológiák

A prototípus a következő technológiákkal készült:

- HTML5
- CSS3
- JavaScript

Az alkalmazás teljes egészében kliensoldalon működik. Nem igényel regisztrációt, adatbázist vagy külön alkalmazásszervert. A felhasználói eredményeket nem tárolja tartósan.

### Kipróbálás

**Online változat:**  
https://nazalan.github.io/kiberkuldetes/

A projekt helyben is futtatható a repozitórium letöltésével és az `index.html` fájl böngészőben történő megnyitásával.

### Tesztelés

Az alkalmazás alapvető működését hat manuális funkcionális tesztesettel ellenőriztem.

A vizsgálat kiterjedt a feladatsor indítására, a pontozásra, a többszöri válaszadás megakadályozására, az eredményképernyőre, az újrakezdésre és a keskeny kijelzős elrendezésre.

Mind a hat végrehajtott teszt sikeresen teljesült.

Ezek az ellenőrzések nem helyettesítik a teljes körű kompatibilitási és hozzáférhetőségi vizsgálatokat.

### Kutatási háttér és korlátok

A KiberKüldetés a következő TDK-dolgozathoz készült:

**Szituációalapú, gamifikált oktatási módszer kidolgozása a középiskolások kiberbiztonsági tudatosságának fejlesztésére**

Budapesti Műszaki és Gazdaságtudományi Egyetem  
Gazdaság- és Társadalomtudományi Kar  
2026

A dolgozat a szakirodalom alapján meghatározott pedagógiai és funkcionális követelményekre épül. A prototípus értékelése a megvalósított funkciók és az oktatási tartalom követelményalapú elemzésével történt.

A fejlesztés jelenlegi szakaszában nem került sor középiskolás tanulók bevonásával végzett hatásvizsgálatra. Ezért az alkalmazás tényleges tanulási eredményessége és motivációs hatása nem tekinthető igazoltnak.

A további fejlesztés célja a feladatbank bővítése, a tanulói visszajelzések összegyűjtése és a megoldás valós oktatási környezetben történő vizsgálata.

---

## English

### About the project

KiberKüldetés (CyberQuest) is an interactive, web-based educational prototype designed to support the development of cybersecurity awareness among secondary school students.

The application presents everyday digital scenarios in which users must select the safest action from three possible choices. Each decision is followed by immediate explanatory feedback that helps users understand the underlying cybersecurity risks and principles.

The project was developed as part of a Scientific Students' Associations (TDK) research project at the Faculty of Economic and Social Sciences, Budapest University of Technology and Economics.

### Educational topics

The application contains six cybersecurity scenarios:

1. Recognizing phishing messages
2. Identifying fraudulent online stores and shopping scams
3. Password reuse and account security
4. Unexpected multi-factor authentication requests
5. Sharing personal information on social media
6. Fake package delivery notifications

The scenarios encourage students to apply cybersecurity knowledge to practical decision-making situations rather than simply recalling security rules.

### Features

- Six sequential, real-world cybersecurity scenarios.
- Three possible actions for each scenario.
- Individual explanatory feedback for every choice.
- Visual distinction between correct and incorrect answers.
- Experience points (XP) as a gamification element.
- A progress indicator based on completed scenarios.
- Final performance summary.
- Option to restart the activity.

A correct first answer awards 20 XP, while an incorrect answer awards 8 XP. Completing all six scenarios results in a score between 48 and 120 XP.

The scoring system is intended as a gamification mechanism and should not be interpreted as an independently validated measure of cybersecurity knowledge.

### Technologies

The prototype was developed using:

- HTML5
- CSS3
- JavaScript

The application runs entirely on the client side and does not require registration, a database, or a dedicated application server. User results are not stored persistently.

### Try the application

**Live demo:**  
https://nazalan.github.io/kiberkuldetes/

The application can also be run locally by downloading the repository and opening `index.html` in a web browser.

### Testing

Six manual functional test cases were executed to verify the application's core functionality.

The tests covered scenario initialization, scoring, prevention of multiple submissions, the results screen, restarting the activity, and responsive layout on narrow screens.

All six executed tests passed.

These tests do not constitute comprehensive browser compatibility or accessibility testing.

### Research background and limitations

The application was developed as part of the following research project:

**Development of a Scenario-Based, Gamified Educational Method for Improving Cybersecurity Awareness among Secondary School Students**

Budapest University of Technology and Economics  
Faculty of Economic and Social Sciences  
2026

The research is based on pedagogical and functional requirements derived from relevant literature. The prototype was evaluated through a requirements-based analysis of its educational content and implemented functionality.

At the current stage, no learning effectiveness study involving secondary school students has been conducted. Therefore, the educational effectiveness and motivational impact of the application have not yet been established.

Future development may include an expanded scenario bank, feedback from students, and evaluation in real educational settings.

---

## Author

**Nagy Zalán**  
Budapest University of Technology and Economics  
2026