# Reflektion

### Reflektionen baseras på hur koden ser ut i commit "Add Reflektion.md file".

## Kapitel 2

| Namn               | Förklaring                                                                                                                                                                                                 |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| checkAnswer        | **Use intention-revealing names:** Namnet checkAnswer gör att man förstår att metoden kommer att kolla svaret, men säger inte så mycket mer om vad som händer i metoden. Ett längre namn behövs för att förklara vad som kollas och returneras. Dessutom framgår det inte av titeln att metoden även ökar upp värdet för numberOfGuesses varje gång den körs. |
| useOtherTheme      | **Use intention-revealing names:** Oklart vad metoden betyder om man inte läser kommentaren. Vad menas med other theme?                                                                                       |
| theme              | **Use searchable names:** Ordet theme förekommer på många ställen i koden så att hitta en variabel som heter theme kan bli svårt om man använder sökfunktionen.                                               |
| itemArray          | **Make meaningful distinctions:** itemArray förekommer på många ställen i koden, men heter lite olika (itemArray och themeArray) trots att innehållet är detsamma. Det hade varit bättre att använda samma variabel. |
| answerWithFeedback | **Avoid disinformation:** I checkAnswer metoden förekommer flera variabler som kan förvirra användaren av modulen. Dels finns det en parameter som heter answer som innehåller en array med svar från spelaren. Sen skapas en answerFromPlayer variabel som innehåller answer och därefter en array som heter answerWithFeedback, men det är inte tydligt att answer den här gången kommer från computer istället. Det vore bättre att kalla den för feedbackFromComputer eller något liknande. |



## Kapitel 3

| Metodnamn och länk eller kod | Antal rader         | Reflektion |
|------------------------------|---------------------|------------|
| checkAnswer                  | 26                  | Small / Do one thing / Reading Code from Top to Bottom: Lång metod som bryter mot många principer då den förutom att vara lång även gör mer än en sak och att indenteringen varierar istället för att öka längre ner i koden. <br> Structure programming: Metoden innehåller 2 retursatser vilket inte följer reglerna för “structure programming. Eftersom metoden inte är kort så borde jag undvika 2 retursatser. <br> Command query separation: Metoden returnerar både resultvärden och förändrar tillståndet för en privatvariabel vilket bryter mot principen Command query separation. |
| setItemArray                 | 21                  | Don’t repeat yourself (DRY): Metoden förekommer både i ComputerRow och Theme klassen, vilket går emot DRY-principen, men då metoderna gör lite olika saker i klasserna så bör jag fundera på om jag bör ge någon av metoderna ett tydligare namn. <br> Small: Metoden i Theme klassen är lång och innehåller många if satser och mycket data. Jag bör fundera på om den kan skrivas på något bättre sätt genom att exempelvis hämta innehållet i arrayerna från någon annanstans genom en loop. |
| setOtherTheme                | 11                  | Prefer exceptions to returning error codes: Metoden innehåller två if-satser som båda kastar ett felmeddelande. Ett alternativ skulle kunna vara att kasta ett exception istället. <br> Use Descriptive names: Lite oklart vad metoden gör om man inte läser kommentaren. |
| generateRow                  | 9                   | Small: Koden skulle kunna förkortas ner genom att plocka bort onödiga deklarationer av variabler som exempelvis rowLength eftersom man istället kan använda this.numberOfItems även inne i loopen. Även nextItem skulle kunna plockas bort. |
| setNumberOfItems             | 8                   | Don’t repeat yourself (DRY): Metoden förekommer både i ComputerRow och Computer klassen, vilket går emot DRY-principen. Jag bör se över ifall jag kan ändra koden för att undvika duplicering. <br> Have no side effects/Do one thing: I Computer klassen sätter setNumberOfItems metoden ett värde för this.numberOfItems och anropar this.createComputerRow, vilket bryter mot Do one thing principen och Have no side effects eftersom det låter som att metoden bara ska sätta ett värde. |



## Reflektion kap 2

När jag har arbetat med L2 så har jag funderat lite extra när jag har namngett mina klasser, variabler och metoder, men när jag läste kapitel 2 en andra gång så insåg jag att det fortfarande finns områden där jag behöver förbättra min namngivning. Bla tycker jag att det är klurigt att namnge variabler och metoder som betyder samma eller ungefär samma sak, men som behöver olika namn för att kompilatorn ska fungera, så det är ett område som jag behöver öva på. Jag har även varit lite dålig på att använda lite längre och mer beskrivande namn, eftersom jag tänkt att det är bra om de är så korta som möjligt. Jag anser fortfarande att det är viktigt för läsbarheten att namnen är korta om de förekommer i loopar eller väldigt frekvent i koden, men i övriga fall så tycker jag att det är bättre med längre namn om det krävs för att beskriva metoden eller variabeln på ett bra sätt utan att användaren av koden behöver läsa kommentarerna för att förstå. 

När jag reflekterar över reglerna i kapitel 2 så anser jag att det är några regler som jag har varit bra på att följa. Bland annat har jag varit noggrann med att använda namn som går att uttala (Use pronounceable names) och undvikit humoristiska namn (Don´t be cute). Jag har även varit noggrann med att bara använda verb för att namnge mina metoder eftersom de ska “göra något”. 
I tidigare projekt har jag råkat mixa användningen av get och fetch vilket brutit mot regeln “Pick one word per concept”, så i den här uppgiften har jag varit extra noga med att bara använda get. Jag vet att jag vid ett flertal tillfällen även har råkat göra fel åt andra hållet då jag har använt samma ord för att namnge olika typer av variabler, metoder och funktioner vilket inte följer principen “Don´t Pun”. 


## Reflektion kap 3

När jag läser kapitel 3 så är det första som jag kommer att tänka på är storleken på metoderna. Jag har tidigare skrivit både långa och korta metoder, beroende på hur problemet som jag behöver lösa ser ut. Jag inser nu att jag behöver arbeta mer med att försöka korta ner metoderna så mycket som möjligt. Anledningen till att jag har skrivit långa metoder tidigare är dels för att det är enklare, men också för att jag som nybörjare tycker att det är lättare att läsa koden då. En lång metod med tydliga namn på variabler är för mig tydligare än många metoder där jag behöver hoppa mellan metoder och klasser. Koden för monopolspelet i kursen 1dv502 är ett exempel på välskriven kod med korta metoder, men för mig som nybörjare var det svårt att läsa koden då jag behövde hoppa mellan metoder och klasser för att förstå vad som hände.
Förutom att jag behöver minska storleken på metoderna så behöver jag även öva på att se till så att en metod bara gör en sak för att inte bryta mot principen Do one thing. För att lättare kunna se om metoden bara gör en sak så ska jag vara uppmärksam på om indenteringen minskar längre ner i koden (Reading code from top to bottom). Tidigare har det hänt att mina metoder/funktioner både har gjort något och returnerat något och även gjort något som inte finns med i metodnamnet, men det ska jag försöka undvika framöver för att inte bryta mot principerna Command query separation och Have no side effects.  


## Reflektion - övergripande

Det har varit en omställning att gå från att fokusera på att lösa ett problem till att fokusera på kodkvalitet och kommunikation av kod. Första året i utbildningen var väldigt stressig så även om man gärna ville lägga mer tid på att förbättra sin kod, så var det svårt att hinna med det eftersom det hela tiden dök upp nya uppgifter som vi behövde lösa. Därför uppskattar jag den här kursen extra mycket. Min ambition är att bli en så bra kodskrivare som möjligt och att underlätta för andra att använda min kod. 

Jag inser när jag läser Clean Code att det finns mycket jag behöver förbättra. När det gäller namngivningen så känner jag att jag har kommit längre än när det gäller utformandet av metoder/funktioner. Jag känner att jag har förbättrat mitt sätt att namnge klasser, variabler och metoder sen i våras, men såklart har jag en hel del att öva på även när det gäller namngivning. När det gäller metoderna så finns det mycket kvar att förbättra, vilket jag hoppas hinna med när jag arbetar med L3. Mitt mål är att undvika att bryta mot så många principer som möjligt vilket kommer bli en stor utmaning eftersom jag troligtvis kommer tycka att koden blir rörigare än innan då jag inte är van vid att arbeta på det sättet. 

Jag ska även försöka lägga lite extra tid på felhantering, då jag inte är nöjd med resultatet i modulen i L2. I våras använde jag mig främst av try/catch satser vilket är bättre enligt “Prefer exceptions to returning error code” principen, men när jag arbetade med modulen så använde jag istället throw Error satser eftersom det var det som jag tyckte lät smidigast när jag läste dokumentationen för Typescript. Anledningen till att jag valde Typescript är för att jag vill skapa en webbapplikation i L3 och jag misstänker att om jag samtidigt vill öva på objektorientering så är Typescript det mest passande språket.
