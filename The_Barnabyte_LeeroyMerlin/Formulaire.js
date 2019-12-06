/**
 * File:   jsFile.js
 * Author: arousic
 *
 * Created on 18 avril 2019, 14:45
 */

"use strict";

function checkBoxVis1() {
    if(document.getElementById("Checkbox_Vis1").checked == true){
    	document.getElementById("Checkbox_Vis2").checked = false;
    	document.getElementById("Checkbox_Vis3").checked = false;
    }
}

function checkBoxVis2() {
	if(document.getElementById("Checkbox_Vis2").checked == true){
    	document.getElementById("Checkbox_Vis1").checked = false;
    	document.getElementById("Checkbox_Vis3").checked = false;
    }
}

function checkBoxVis3() {
	if(document.getElementById("Checkbox_Vis3").checked == true){
    	document.getElementById("Checkbox_Vis2").checked = false;
    	document.getElementById("Checkbox_Vis1").checked = false;
    }
}

function checkBoxCouleur1() {
	if(document.getElementById("Checkbox_Couleur1").checked == true){
    	document.getElementById("Checkbox_Couleur2").checked = false;
    	document.getElementById("Checkbox_Couleur3").checked = false;
    	document.getElementById("Checkbox_Couleur4").checked = false;
    	document.getElementById("Checkbox_Couleur5").checked = false;
    	document.getElementById("Image_Rose_Bonbon").src = "Vert_Leroy.png";
    	document.getElementById("Image_Fushia").src = "Fushia.jpg";
    	document.getElementById("Image_Mauve").src = "Mauve.jpg";
    	document.getElementById("Image_Joli").src = "Rose_Joli.jpg";
    	document.getElementById("Label_Couleur1").innerHTML = "le VERT biensûr";
    	document.getElementById("Label_Couleur2").innerHTML = "Fushia";
    	document.getElementById("Label_Couleur3").innerHTML = "Mauve";
    	document.getElementById("Label_Couleur4").innerHTML = "Ce dégradé parce qu'il est joli";
    }
}

function checkBoxCouleur2() {
	if(document.getElementById("Checkbox_Couleur2").checked == true){
    	document.getElementById("Checkbox_Couleur1").checked = false;
    	document.getElementById("Checkbox_Couleur3").checked = false;
    	document.getElementById("Checkbox_Couleur4").checked = false;
    	document.getElementById("Checkbox_Couleur5").checked = false;
    	document.getElementById("Image_Fushia").src = "Vert_Leroy.png";
    	document.getElementById("Image_Mauve").src = "Mauve.jpg";
    	document.getElementById("Image_Joli").src = "Rose_Joli.jpg";
    	document.getElementById("Image_Rose_Bonbon").src = "Rose_Bonbon.jpg";
    	document.getElementById("Label_Couleur2").innerHTML = "le VERT biensûr";
    	document.getElementById("Label_Couleur1").innerHTML = "Rose Bonbon";
    	document.getElementById("Label_Couleur3").innerHTML = "Mauve";
    	document.getElementById("Label_Couleur4").innerHTML = "Ce dégradé parce qu'il est joli";
    }
}

function checkBoxCouleur3() {
	if(document.getElementById("Checkbox_Couleur3").checked == true){
    	document.getElementById("Checkbox_Couleur1").checked = false;
    	document.getElementById("Checkbox_Couleur2").checked = false;
    	document.getElementById("Checkbox_Couleur4").checked = false;
    	document.getElementById("Checkbox_Couleur5").checked = false;
    	document.getElementById("Image_Mauve").src = "Vert_Leroy.png";
    	document.getElementById("Image_Joli").src = "Rose_Joli.jpg";
    	document.getElementById("Image_Rose_Bonbon").src = "Rose_Bonbon.jpg";
    	document.getElementById("Image_Fushia").src = "Fushia.jpg";
    	document.getElementById("Label_Couleur3").innerHTML = "le VERT biensûr";
    	document.getElementById("Label_Couleur1").innerHTML = "Rose Bonbon";
    	document.getElementById("Label_Couleur4").innerHTML = "Ce dégradé parce qu'il est joli";
    	document.getElementById("Label_Couleur2").innerHTML = "Fushia";
    }
}

function checkBoxCouleur4() {
	if(document.getElementById("Checkbox_Couleur4").checked == true){
    	document.getElementById("Checkbox_Couleur1").checked = false;
    	document.getElementById("Checkbox_Couleur2").checked = false;
    	document.getElementById("Checkbox_Couleur3").checked = false;
    	document.getElementById("Checkbox_Couleur5").checked = false;
    	document.getElementById("Image_Joli").src = "Vert_Leroy.png";
    	document.getElementById("Image_Rose_Bonbon").src = "Rose_Bonbon.jpg";
    	document.getElementById("Image_Mauve").src = "Mauve.jpg";
    	document.getElementById("Image_Fushia").src = "Fushia.jpg";
    	document.getElementById("Label_Couleur4").innerHTML = "le VERT biensûr";
    	document.getElementById("Label_Couleur2").innerHTML = "Fushia";
    	document.getElementById("Label_Couleur1").innerHTML = "Rose Bonbon";
    	document.getElementById("Label_Couleur3").innerHTML = "Mauve";
    }
}

function checkBoxCouleur5() {
	if(document.getElementById("Checkbox_Couleur5").checked == true){
    	document.getElementById("Checkbox_Couleur1").checked = false;
    	document.getElementById("Checkbox_Couleur2").checked = false;
    	document.getElementById("Checkbox_Couleur3").checked = false;
    	document.getElementById("Checkbox_Couleur4").checked = false;
    	document.getElementById("Image_Joli").src = "Rose_Joli.jpg";
    	document.getElementById("Image_Rose_Bonbon").src = "Rose_Bonbon.jpg";
    	document.getElementById("Image_Mauve").src = "Mauve.jpg";
    	document.getElementById("Image_Fushia").src = "Fushia.jpg";
    	document.getElementById("Label_Couleur2").innerHTML = "Fushia";
    	document.getElementById("Label_Couleur1").innerHTML = "Rose Bonbon";
    	document.getElementById("Label_Couleur3").innerHTML = "Mauve";
    	document.getElementById("Label_Couleur4").innerHTML = "Ce dégradé parce qu'il est joli";
    }
}


   
