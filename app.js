var getacctitles = document.getElementsByClassName('acctitle');
// console.log(acctitles); //HTMLCollection
var getaccactivetitles = document.querySelectorAll('.accontent');
// console.log(accactivetitles);  //NodeList

for(let x = 0; x < getacctitles.length; x++){
	// console.log(x);
	// console.log(getacctitles[x]);

	getacctitles[x].addEventListener('click',function(e){
		// console.log('hay');

		// console.log(e);  //PointerEvent
		// console.log(e.target);  //If click, get this tag.
		// console.log(this);

		this.classList.toggle('active');

		var getcontent = this.nextElementSibling;
		// console.log(getcontent);
		// console.log(getcontent.scrollHeight+'px');

		// getcontent.style.height = getcontent.scrollHeight+'px';

		if(getcontent.style.height){
			getcontent.style.height = null;
		}else{
			getcontent.style.height = getcontent.scrollHeight+'px';
		}
	});

	if(getacctitles[x].classList.contains('active')){
		getaccactivetitles[x].style.height = getaccactivetitles[x].scrollHeight+'px';
	}

}

