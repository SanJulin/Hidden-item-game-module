# Reflektion


| Namn                | Reflektion och regler från Clean Code |
|---------------------|---------------------------------------|
| Computer            |                                       |
| createComputerRow   |                                       |
| checkAnswer         |                                       |
| getNumberOfGuesses  |                                       |
| computerRow         |                                       |
| numberOfItems       |                                       |
| numberOfGuesses     |                                       |
| Theme               |                                       |
| getAvailableThemes  | Pick one word per concept: Jag har valt att använda set och get i alla mina klasser istället för att blanda in liknande koncept. |
| useOtherTheme       | Use intention-revealing names: Oklart vad metoden betyder om man inte läser kommentaren. Vad menas med other theme? |
| setItemArray        |                                       |
| theme               | Use searchable names: Ordet theme förekommer på många ställen i koden så att hitta en variabel som heter theme kan bli svårt om man använder sökfunktionen. |
| itemArray           | Make meaningful distinctions: itemArray förekommer på många ställen i koden, men heter lite olika (itemArray och themeArray) trots att innehållet är detsamma. Det hade varit bättre att använda samma variabel. |
| availableThemes     |                                       |
| answerWithFeedback  | Avoid disinformation: I checkAnswer metoden förekommer flera variabler som kan förvirra användaren av modulen. Dels finns det en parameter som heter answer som innehåller en array med svar från spelaren. Sen skapas en answerFromPlayer variabel som innehåller answer och därefter en array som heter answerWithFeedback, men det är inte tydligt att answer den här gången kommer från computer istället. Det vore bättre att kalla den för feedbackFromComputer eller något liknande. |

### Reflektionen baseras på hur koden ser ut i commit "Add Reflektion.md file".

| Metodnamn och länk eller kod | Antal rader (ej ws) | Reflektion |
|------------------------------|---------------------|------------|
| checkAnswer                  | 26                  | Small / Do one thing / Reading Code from Top to Bottom: Lång metod som bryter mot många principer då den förutom att vara lång även gör mer än en sak och indenteringen varierar istället för att öka längre ner i koden. <br> Structure programming: Metoden innehåller 2 retursatser vilket inte följer reglerna för “structure programming. Eftersom metoden inte är kort så borde jag undvika 2 retursatser. Command query separation: 
Metoden returnerar både resultvärden och förändrar tillståndet för en privatvariabel vilket bryter mot principen Command query separation.
|
| setItemArray                 | 21                  | Don’t repeat yourself (DRY): Metoden förekommer både i ComputerRow och Theme klassen, vilket går emot DRY-principen, men då metoderna gör lite olika saker i klasserna så bör jag fundera på om jag bör ge någon av metoderna ett tydligare namn. <br> Small: Metoden i Theme klassen är lång och innehåller många if satser och mycket data. Jag bör fundera på om den kan skrivas på något bättre sätt genom att exempelvis hämta innehållet i arrayerna från någon annanstans genom en loop. |
| setOtherTheme                | 11                  | Prefer exceptions to returning error codes: Metoden innehåller två if-satser som båda kastar ett felmeddelande. Ett alternativ skulle kunna vara att kasta ett exception istället. <br> Use Descriptive names: Lite oklart vad metoden gör om man inte läser kommentaren. |
| generateRow                  | 9                   | Small: Koden skulle kunna förkortas ner genom att plocka bort onödiga deklarationer av variabler som exempelvis rowLength eftersom man istället kan använda this.numberOfItems även inne i loopen. Även nextItem skulle kunna plockas bort. |
| setNumberOfItems             | 8                   | Don’t repeat yourself (DRY): Metoden förekommer både i ComputerRow och Computer klassen, vilket går emot DRY-principen. Jag bör se över ifall jag kan ändra koden för att undvika duplicering. <br> Have no side effects/Do one thing: I Computer klassen sätter setNumberOfItems metoden ett värde för this.numberOfItems och anropar this.createComputerRow, vilket bryter mot Do one thing principen och Have no side effects eftersom det låter som att metoden bara ska sätta ett värde. |


## Reflektion kap 3
När jag läser kapitel 3 så är det första som jag kommer att tänka på är storleken på metoderna. Jag har tidigare skrivit både långa och korta metoder, beroende på hur problemet som jag behöver lösa ser ut. Jag inser nu att jag behöver arbeta mer med att försöka korta ner metoderna så mycket som möjligt. Anledningen till att jag har skrivit långa metoder tidigare är dels för att det är enklare, men också för att jag som nybörjare tycker att det är lättare att läsa koden då. En lång metod med tydliga namn på variabler är för mig tydligare än många metoder där jag behöver hoppa mellan metoder och klasser. Koden för monopolspelet i kursen 1dv502 är ett exempel på välskriven kod med korta metoder, men för mig som nybörjare var det svårt att läsa koden då jag behövde hoppa mellan metoder och klasser för att förstå vad som hände. 

