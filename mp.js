
/*makes hidden div appear/disappear with left button. Blocks the other div from appearing while this is visible.*/
function ghosty(){
	var spooky = document.getElementById("spooky");
	var zoomie = document.getElementById("pewpew");
		if (spooky.style.display == "none" && zoomie.style.display == "none"){
		spooky.style.display = "block";
		document.getElementById("firstright").style.backgroundColor="black";
		document.getElementById("firstright").setAttribute("onClick","");
		document.getElementById("firstleft").style.backgroundColor="black";
		document.getElementById("firstleft").setAttribute("onClick","");
		/*changes to the div, with a deeny tiny delay so changes take effect
		after the new story block loads, rather than being in effect instantly*/
		setTimeout(function () {var z = document.getElementsByClassName("story");
			for (var i = 0; i < z.length; i++) {
			z[i].style.backgroundColor = "rgba(176, 178, 183, 0.7)";
			z[i].style.color = "rgb(196, 11, 11)";}}, 20);
		}
		else{
			spooky.style.display = "none";
			document.getElementById("firstright").style.backgroundColor="";
			document.getElementById("firstright").setAttribute("onClick","zappo()");
			document.getElementById("firstleft").style.backgroundColor="";
			document.getElementById("firstleft").setAttribute("onClick","ghosty()");
			setTimeout(function () {var z = document.getElementsByClassName("story");
				for (var i = 0; i < z.length; i++) {
				z[i].style.backgroundColor = "rgba(255,255,255,0.7)";
				z[i].style.color = "black";}}, 2);
		}
	}
		
/*same as above, but different button, different text*/
function zappo(){
	var zoomie = document.getElementById("pewpew");
	var spooky = document.getElementById("spooky");
		if (spooky.style.display == "none" && zoomie.style.display == "none"){
			zoomie.style.display = "block";
			document.getElementByClassName("transform").style.transitionDuration = "10s";
			document.getElementById("firstright").style.backgroundColor="black";
			document.getElementById("firstright").setAttribute("onClick","");
			document.getElementById("firstleft").style.backgroundColor="black";
			document.getElementById("firstleft").setAttribute("onClick","");
			setTimeout(function () {var z = document.getElementsByClassName("story");
				for (var i = 0; i < z.length; i++) {
				z[i].style.backgroundColor = "rgba(239, 239, 7, 0.7)";
				z[i].style.color = "rgb(24, 83, 150)";
				} 
			}, 20);
		}
		else {
			zoomie.style.display = "none";
			spooky.style.display = "none";
			document.getElementByClassName("transform").style.transitionDuration = "1s";
			document.getElementById("firstright").style.backgroundColor="";
			document.getElementById("firstright").setAttribute("onClick","zappo()");
			document.getElementById("firstleft").style.backgroundColor="";
			document.getElementById("firstleft").setAttribute("onClick","ghosty()");
			setTimeout(function () {var z = document.getElementsByClassName("story");
				for (var i = 0; i < z.length; i++) {
				z[i].style.backgroundColor = "rgba(255,255,255,0.7)";
				z[i].style.color = "black";
				}
			}, 20);
		}
	}
/*functions for second-tier nav transforms*/
function bgimage(){
	var bgimage = document.getElementById("bgimage");
	var bloodred = document.getElementById("bloodred");
		if (bgimage.style.display == "none" && bloodred.style.display == "none"){
		bgimage.style.display = "block";
		document.getElementById("left1").style.backgroundColor="black";
		document.getElementById("left1").setAttribute("onClick","");
		document.getElementById("left2").style.backgroundColor="black";
		document.getElementById("left2").setAttribute("onClick","");
		document.body.style.backgroundImage = "url(geigerism.jpg)";
				}
		else{
			bgimage.style.display = "none";
			document.getElementById("left1").style.backgroundColor="";
			document.getElementById("left1").setAttribute("onClick","bgimage()");
			document.getElementById("left2").style.backgroundColor="";
			document.getElementById("left2").setAttribute("onClick","bloodred()");
			document.body.style.backgroundImage="url(space-view.jpg)";
		}
	}
	
function bloodred(){
	var bgimage = document.getElementById("bgimage");
	var bloodred = document.getElementById("bloodred");
		if (bgimage.style.display == "none" && bloodred.style.display == "none"){
		bloodred.style.display = "block";
		document.getElementById("left1").style.backgroundColor="black";
		document.getElementById("left1").setAttribute("onClick","");
		document.getElementById("left2").style.backgroundColor="black";
		document.getElementById("left2").setAttribute("onClick","");
		document.body.style.backgroundImage = "url(bloodred.jpg)";
				}
		else{
			bloodred.style.display = "none";
			document.getElementById("left1").style.backgroundColor="";
			document.getElementById("left1").setAttribute("onClick","bgimage()");
			document.getElementById("left2").style.backgroundColor="";
			document.getElementById("left2").setAttribute("onClick","bloodred()");
			document.body.style.backgroundImage="url(space-view.jpg)";
		}
	}	
	
function roundyCorners(){
	var roundyCorners = document.getElementById("roundyCorners");
	var fontShift = document.getElementById("fontShift");
		if (roundyCorners.style.display == "none" && fontShift.style.display == "none"){
			roundyCorners.style.display = "block";
			document.getElementById("right1").style.backgroundColor="black";
			document.getElementById("right1").setAttribute("onClick","");
			document.getElementById("right2").style.backgroundColor="black";
			document.getElementById("right2").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(black.jpg)";
			setTimeout(function () {var z = document.getElementsByClassName("story");
				for (var i = 0; i < z.length; i++) {
				z[i].style.borderRadius= "20px";
				} 
			}, 200);
		}
		else {
			roundyCorners.style.display = "none";
			document.getElementById("right2").style.backgroundColor="";
			document.getElementById("right2").setAttribute("onClick","fontShift()");
			document.getElementById("right1").style.backgroundColor="";
			document.getElementById("right1").setAttribute("onClick","roundyCorners()");
			document.body.style.backgroundImage="url(space-view.jpg)";
			setTimeout(function () {var z = document.getElementsByClassName("story");
				for (var i = 0; i < z.length; i++) {
				z[i].style.borderRadius= "0px";
				} 
			}, 200);
		}
	}
	
function fontShift(){
	var roundyCorners = document.getElementById("roundyCorners");
	var fontShift = document.getElementById("fontShift");
		if (fontShift.style.display == "none" && roundyCorners.style.display == "none"){
		fontShift.style.display = "block";
		document.getElementById("right1").style.backgroundColor="black";
		document.getElementById("right1").setAttribute("onClick","");
		document.getElementById("right2").style.backgroundColor="black";
		document.getElementById("right2").setAttribute("onClick","");
		document.body.style.backgroundImage = "url(spacescape.jpg)";
				}
		else{
			fontShift.style.display = "none";
			document.getElementById("right2").style.backgroundColor="";
			document.getElementById("right2").setAttribute("onClick","fontShift()");
			document.getElementById("right1").style.backgroundColor="";
			document.getElementById("right1").setAttribute("onClick","roundyCorners()");
			document.body.style.backgroundImage="url(space-view.jpg)";
		}
	}	

	/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/*will clear out all the selected paths, hopefully progressively from the bottom up*/
function clearance(){
	if(document.getElementById("fontShift").style.display == "block"){fontShift();}
	if(document.getElementById("roundyCorners").style.display == "block"){roundyCorners();}
	if(document.getElementById("bloodred").style.display == "block"){bloodred();}
	if(document.getElementById("bgimage").style.display == "block"){bgimage();}
		setTimeout(function () {
			if(document.getElementById("spooky").style.display == "block"){ghosty();}
			if(document.getElementById("pewpew").style.display == "block"){zappo();}
			}, 1000);
}
