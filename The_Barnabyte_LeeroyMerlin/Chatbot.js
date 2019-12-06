/**
 * File:   jsFile.js
 * Author: arousic
 *
 * Created on 18 avril 2019, 14:45
 */

"use strict";
const LeeeeROy = {;

function Chatbot() {
    var question = document.getElementById("Input_Question").value;
    console.log(question);
    switch(question){
    case '' : document.getElementById("Lab_Chatbox").innerHTML = "Mais vous avez oublié de me donner une question, cliquez sur l'aide pour voir les questions."; break;
    case 'Quel est votre nom?' : document.getElementById("Lab_Chatbox").innerHTML = "Je suis Sylvain et j'aime les clés de 12."; break;
    case 'Salut' : document.getElementById("Lab_Chatbox").innerHTML = "Je suis Sylvain et j'aime les clés de 12."; break;
    case 'Bonjour' : document.getElementById("Lab_Chatbox").innerHTML = "Je suis Sylvain et j'aime les clés de 12."; break;
    case 'Quelles sont les qualités requises?' : document.getElementById("Lab_Chatbox").innerHTML = "Un peu toutes celles que vous avez, par exemple, un charisme extraordinaire, un bon relationel, un sens de l'humour, une grosse moustache (homme ou femme) et bien sûr l'endurance."; break;
    case 'Comment vous contacter?' : document.getElementById("Lab_Chatbox").innerHTML = "Via notre téléphone dernière génération : 05 59 90 34 00 ou notre @mail : contact.site.internet@leroymerlin.fr"; break;
    case 'Que vendez vous?' : document.getElementById("Lab_Chatbox").innerHTML = "La boutique est fermée adressez vous à la concurrence. - Merlin Livre II, 2"; break;
    case 'Pourquoi Sylvain?': document.getElementById("Lab_Chatbox").innerHTML = "Ah mais foutez moi la paix! J'ai traversé l'Internet en long en large et en travers! Pareil en Dark Web et Deep Web! Vous croyez que je me souviens de tout les trous du cul a qui j'ai balancé mon laïus! - Merlin, Livre IV, 7"; break;
    case "Avez vous une recette pour ne pas ronfler?" : document.getElementById("Lab_Chatbox").innerHTML = "Il faut vous mettre deux oeufs durs dans la bouche pendant votre sommeil ou bien deux crevettes dans le nez, je ne sais pas bien mais c'est un conseil de druide!"; break;
    case 'Au revoir' : document.getElementById("Lab_Chatbox").innerHTML = "Lundi - 8h - Avec Sylvie à la machine à café."; break;
    default : document.getElementById("Lab_Chatbox").innerHTML = "Votre question n'est peut être pas lisible ou je ne peux vous répondre mais je sais que vous avez le bon profil pour être engagé."; break;
    }
}

function Aide(){
  console.log("TEST");
	 document.getElementById("Lab_Chatbox").innerHTML = "Exemple de question à poser : Quel est votre nom?, Quelles sont les qualités requises?, Comment vous contacter?, Que vendez vous?, Avez vous une recette pour ne pas ronfler?, Pourquoi Sylvain?, et bien sur la politesse Bonjour et Au revoir.";
}

var cpt = -1;
function ImgSuivante() {
  cpt+=1;
  console.log(cpt);
  if (cpt == -1) {
    document.getElementById("img").src= "dj.png";
  }
  if(cpt == 0){
    document.getElementById("img").src= "rick.jpeg";
  }
  if(cpt == 1){
    document.getElementById("img").src= "bob.jpg";
  }
  if(cpt == 2){
    document.getElementById("img").src= "valou.jpg";
  }if(cpt == 3){
    cpt= -2;
    ImgSuivante();
  }
}

function ImgPrecedente() {
  cpt-=1;
  console.log(cpt);
  if (cpt == -1) {
    document.getElementById("img").src= "dj.png";
  }
  if(cpt == 0){
    document.getElementById("img").src= "rick.jpeg";
  }
  if(cpt == 1){
    document.getElementById("img").src= "bob.jpg";
  }
  if(cpt == 2){
    document.getElementById("img").src= "valou.jpg";
  }if(cpt == -2){
    cpt=3;
    ImgPrecedente();
  }
}
