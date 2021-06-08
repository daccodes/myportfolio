var naveng=["Home", "About Me", "What I Do", "My Jobs", "Contacts"];
var navita=["Home", "Chi Sono", "Cosa Faccio", "I miei Lavori", "Contatti"];

var MainTitlesIta=[
  "Chi Sono",
  "Uno sviluppatore Full-Stack Javascript e un programmatore entusiasta. Amo imparare nuove tecnologie e condividere le mie conoscenze",
  "Cosa Faccio",
  "Mi occupo della realizzazione di Siti Web responsive, Web Applications, curando sia la parte con la quale l'utente interagisce direttamente (FrontEnd),sia tutto quello che sta dietro un sito, quello che non si vede ma che ne permette il funzionamento generale (Backend)",
  "Tecnologie Utilizzate",
  "I miei lavori",
  "Contattami!",
  "Invia"
];
var MainTitlesEng=[
  "About Me",
  "A Full-Stack JavaScript developer and coding enthusiast. I love investigating new technologies and sharing my knowledge.",
  "What I Do",
  "I deal with the creation of responsive Websites, Web Applications, taking care of both the part with which the user interacts directly (FrontEnd), and everything behind a website,  what the user cannot see, but which allows its general functioning ( Backend)",
  "Used Technologies",
  "My Jobs", 
  "Contact Me!",
  "Send"
];
var CardsIta=[
  "Siti Web Responsive",
  "I siti che realizzo sono completamente responsive, ovvero adattano la loro visualizzazione su qualsiasi dispositivo automaticamente in base alle dimensioni dello schermo",
  "Vai agli ultimi Siti Web",
  "Contenuti Web per Digital Signage",
  "Sviluppo contenuti per quella che è la 'segnaletica digitale': una forma di comunicazione audiovisiva basata sulla distribuzione di contenuti multimediali e messaggi in formato digitale, su schermi elettronici, in spazi pubblici e privati.",
  "Visualizza i contenuti",
  "Applicazioni Web",
  "CMS, E-Commerce, PWA",
  "Vedi Live"
];
var CardsEng=[
  "Responsive WebSites",
  "The sites I create are completely responsive, and that means they automatically adapt their display on any device based on the size of the screen",
  "Go to lasts websites",
  "Web contents for Digital Signage",
  "Content development for what is 'digital signage': a form of audiovisual communication based on the distribution of multimedia content and messages in digital format on electronic screens in public and private spaces",
  "View the contents",
  "Web Applications",
  "CMS, E-Commerce, PWA",
  "See Live"
];
var testoita=["Un mare di creatività"]
var testoeng=["A sea of creativity"]
   
var ita="ita";
var eng="eng";
var num=0;
function Nonèpari(num)
{
    if (isNaN(num) == false)
    {
        return (num %2 == 1 ?  true : false);
    }
    else
    {
        return null;
    }
}

function defaultlang(){
    document.getElementById("navhome").innerHTML=navita[0];
    document.getElementById("navaboutme").innerHTML=navita[1];
    document.getElementById("navwhatido").innerHTML=navita[2];
    document.getElementById("navworks").innerHTML=navita[3];
    document.getElementById("navcontacts").innerHTML=navita[4];
    document.getElementById("lang").style.backgroundImage="url(./assets/uk.png)";
    document.getElementById("Titolo1").innerHTML=MainTitlesIta[0];
    document.getElementById("Descrizione1").innerHTML=MainTitlesIta[1];
    document.getElementById("Titolo2").innerHTML=MainTitlesIta[2];
    document.getElementById("Descrizione2").innerHTML=MainTitlesIta[3];
    document.getElementById("Titolo3").innerHTML=MainTitlesIta[4];
    document.getElementById("Titolo4").innerHTML=MainTitlesIta[5];
    document.getElementById("Cardtitle1").innerHTML=CardsIta[0];
    document.getElementById("Carddesc1").innerHTML=CardsIta[1];
    document.getElementById("Cardbutton1").innerHTML=CardsIta[2];
    document.getElementById("Cardtitle2").innerHTML=CardsIta[3];
    document.getElementById("Carddesc2").innerHTML=CardsIta[4];
    document.getElementById("Cardbutton2").innerHTML=CardsIta[5];
    document.getElementById("Cardtitle3").innerHTML=CardsIta[6];
    document.getElementById("Carddesc3").innerHTML=CardsIta[7];
    document.getElementById("Cardbutton3").innerHTML=CardsIta[8];
    document.getElementById("subtitleheader").innerHTML=testoita[0];
    document.getElementById("contactme").innerHTML=MainTitlesIta[6];
    document.getElementById("user_name").placeholder="Nome";
    document.getElementById("user_email").placeholder="E-mail";
    document.getElementById("user_message").placeholder="Messaggio";
    document.getElementById("button").value=MainTitlesIta[7];
    document.getElementById("modaltit").innerHTML="Inviato!";
    document.getElementById("mailalert").innerHTML="Grazie, verrai ricontattato al più presto. :)";
    document.getElementById("closebutton").innerHTML="Chiudi";
  }
function cambialang(){
  //var parola="ita";
  num++;
  if(Nonèpari(num)==false){
    //alert(ita);
    document.getElementById("navhome").innerHTML=navita[0];
    document.getElementById("navaboutme").innerHTML=navita[1];
    document.getElementById("navwhatido").innerHTML=navita[2];
    document.getElementById("navworks").innerHTML=navita[3];
    document.getElementById("navcontacts").innerHTML=navita[4];
    document.getElementById("lang").style.backgroundImage="url(./assets/uk.png)";
    document.getElementById("Titolo1").innerHTML=MainTitlesIta[0];
    document.getElementById("Descrizione1").innerHTML=MainTitlesIta[1];
    document.getElementById("Titolo2").innerHTML=MainTitlesIta[2];
    document.getElementById("Descrizione2").innerHTML=MainTitlesIta[3];
    document.getElementById("Titolo3").innerHTML=MainTitlesIta[4];
    document.getElementById("Titolo4").innerHTML=MainTitlesIta[5];
    document.getElementById("Cardtitle1").innerHTML=CardsIta[0];
    document.getElementById("Carddesc1").innerHTML=CardsIta[1];
    document.getElementById("Cardbutton1").innerHTML=CardsIta[2];
    document.getElementById("Cardtitle2").innerHTML=CardsIta[3];
    document.getElementById("Carddesc2").innerHTML=CardsIta[4];
    document.getElementById("Cardbutton2").innerHTML=CardsIta[5];
    document.getElementById("Cardtitle3").innerHTML=CardsIta[6];
    document.getElementById("Carddesc3").innerHTML=CardsIta[7];
    document.getElementById("Cardbutton3").innerHTML=CardsIta[8];
    document.getElementById("subtitleheader").innerHTML=testoita[0];
    document.getElementById("contactme").innerHTML=MainTitlesIta[6];
    document.getElementById("user_name").placeholder="Nome";
    document.getElementById("user_email").placeholder="E-mail";
    document.getElementById("user_message").placeholder="Messaggio";
    document.getElementById("button").value=MainTitlesIta[7];
    document.getElementById("modaltit").innerHTML="Messaggio inviato!";
    document.getElementById("mailalert").innerHTML="Grazie, verrai ricontattato al più presto. :)";
    document.getElementById("closebutton").innerHTML="Chiudi";
  }else{
    //alert(eng);
    document.getElementById("navhome").innerHTML=naveng[0];
    document.getElementById("navaboutme").innerHTML=naveng[1];
    document.getElementById("navwhatido").innerHTML=naveng[2];
    document.getElementById("navworks").innerHTML=naveng[3];
    document.getElementById("navcontacts").innerHTML=naveng[4];
    document.getElementById("lang").style.backgroundImage="url(./assets/it.png)";
    document.getElementById("Titolo1").innerHTML=MainTitlesEng[0];
    document.getElementById("Descrizione1").innerHTML=MainTitlesEng[1];
    document.getElementById("Titolo2").innerHTML=MainTitlesEng[2];
    document.getElementById("Descrizione2").innerHTML=MainTitlesEng[3];
    document.getElementById("Titolo3").innerHTML=MainTitlesEng[4];
    document.getElementById("Titolo4").innerHTML=MainTitlesEng[5];
    document.getElementById("Cardtitle1").innerHTML=CardsEng[0];
    document.getElementById("Carddesc1").innerHTML=CardsEng[1];
    document.getElementById("Cardbutton1").innerHTML=CardsEng[2];
    document.getElementById("Cardtitle2").innerHTML=CardsEng[3];
    document.getElementById("Carddesc2").innerHTML=CardsEng[4];
    document.getElementById("Cardbutton2").innerHTML=CardsEng[5];
    document.getElementById("Cardtitle3").innerHTML=CardsEng[6];
    document.getElementById("Carddesc3").innerHTML=CardsEng[7];
    document.getElementById("Cardbutton3").innerHTML=CardsEng[8];
    document.getElementById("subtitleheader").innerHTML=testoeng[0];
    document.getElementById("contactme").innerHTML=MainTitlesEng[6];
    document.getElementById("user_name").placeholder="Name";
    document.getElementById("user_email").placeholder="E-mail";
    document.getElementById("user_message").placeholder="Message";
    document.getElementById("button").value=MainTitlesEng[7];
    document.getElementById("modaltit").innerHTML="Message sent!";
    document.getElementById("mailalert").innerHTML="Thanks, you will be contacted as soon as possible. :)";
    document.getElementById("closebutton").innerHTML="Close";
  }
  
}
