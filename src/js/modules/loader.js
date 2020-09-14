export default function loader() {
	function id(v){ return document.getElementById(v); }

  	function loadbar() {
	    var mainContent = id('js-main'),
	    	hero = id('js-hero'),
	    	header = id('js-header'),
	    	ovrl = id('js-loader'),
	        prog = id('js-loader-progress'),
	        stat = id('js-loader-pct'),
	        img = document.images,
	        c = 0,
	        tot = img.length;
	    if(tot == 0) return doneLoading();

	    function imgLoaded(){
	    	c += 1;
	    	var perc = ((100/tot*c) << 0) +'%';

	    	prog.style.width = `${Math.abs(200 - ((200/tot*c)))}px`;
	    	stat.innerHTML = perc;

	    	if(c===tot) {
	    		setTimeout(function() {
	    			return doneLoading();
	    		}, 1000);
	    	}
	    }
	    function doneLoading(){

	    	ovrl.style.opacity = 0;
	    	
	    	mainContent.style.opacity = 1;
	    	hero.classList.add('is-shown');
	    	header.classList.add('is-shown');

	    	setTimeout(function(){ 
	      		ovrl.style.display = 'none';
	    	}, 2000);
	    }
	    for(var i=0; i<tot; i++) {
	    	var tImg     = new Image();
	    	tImg.onload  = imgLoaded;
	    	tImg.onerror = imgLoaded;
	    	tImg.src     = img[i].src;
	    }    
  	}

  	document.addEventListener('DOMContentLoaded', loadbar, false);
}