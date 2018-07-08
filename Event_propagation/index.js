var App = (function(){
	function registerEvents(){
		window.addEventListener('click',function(e){handleClick(e, 'window')},true);
		window.addEventListener('click',function(e){handleClick(e, 'window')});
		document.addEventListener('click',function(e){handleClick(e, 'document')},true);
		document.addEventListener('click',function(e){handleClick(e, 'document')});
		document.getElementById('div1').addEventListener('click',function(e){handleClick(e, 'div1')},true);
		//document.getElementById('div1').addEventListener('click',function(e){handleClick(e, 'div1')});
		document.getElementById('div2').addEventListener('click',function(e){handleClick(e, 'div2')},true);
		document.getElementById('div2').addEventListener('click',function(e){handleClick(e, 'div2')});
		document.getElementById('div3').addEventListener('click',function(e){handleClick(e, 'div3')},true);
		document.getElementById('div3').addEventListener('click',function(e){handleClick(e, 'div3')});
		document.getElementById('div4').addEventListener('click',function(e){handleClick(e, 'div4')},true);
		document.getElementById('div4').addEventListener('click',function(e){handleClick(e, 'div4')});
	} 
	function handleClick(e,id){
		console.log( 'id-->'+id+"--"+"phase-->"+e.eventPhase );
	}
	return{
		registerEvents: registerEvents.bind(this)	
	}
})();

App.registerEvents();