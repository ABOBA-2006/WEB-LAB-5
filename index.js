
// 1 task
function swapContent() {
  const blockX = document.getElementById("X");
  const blockY = document.getElementById("Y");
  const temp = blockX.textContent;
  blockX.textContent = blockY.textContent;
  blockY.textContent = temp;
}


// 2 task
function circleArea(R){
	let area = Math.PI * Math.pow(R, 2);

	const wideBlock = document.getElementById("3");
	const newP_Block = document.createElement("p");
	newP_Block.textContent = area.toFixed(3);

	wideBlock.appendChild(newP_Block);
}



// 3 task
function findMaxCount(){
	let numbers = []

	for(let i=1; i<=10; i++){
		const numberInputBlock = document.getElementById("num" + i);

		if(numberInputBlock){
			numbers.push(parseInt(numberInputBlock.value));
		}
	}

	let maxNumber = Math.max(...numbers.filter(value => !isNaN(value)));
	let maxCount = numbers.filter((number) => number == maxNumber).length;

	alert("Max Count = " + maxCount);

	document.cookie = "username=JohnDoe";
	console.log(document.cookie);
}



// 4 task
function changeColor(){
	const smallBlockLeftTop = document.getElementById("2");
	const colorPicker = document.getElementById('colorPicker');
	const savedColor = localStorage.getItem('smallBlockLeftTopBackgroundColor');

   	if (savedColor) {
        smallBlockLeftTop.style.backgroundColor = savedColor; 
    }

    colorPicker.addEventListener('blur', function() {
	    const selectedColor = colorPicker.value;
	    smallBlockLeftTop.style.backgroundColor = selectedColor;  

	    localStorage.setItem('smallBlockLeftTopBackgroundColor', selectedColor);
	});
}



// 5 task
let ediitingBlock = NaN;


function loadFake(){
	for(let i=1; i<=6; i++){
		let block;
		if(i==4 && window.innerWidth <= 500){
			block = document.getElementById(i + "-1");
		}else{
			block = document.getElementById(i);
		}

		if(localStorage.getItem(block.id + "_fake")){
	    	block.innerHTML = localStorage.getItem(block.id + "_fake");
	    }
	    if(localStorage.getItem(block.id + "_fake-color")){
	    	block.style.backgroundColor = localStorage.getItem(block.id + "_fake-color");
	    }
	}
}


function editor(){
	if(window.innerWidth <= 500){
		for(let i=1; i<=6; i++){
			let block;
			if(i == 4){
				block = document.getElementById(i + "-1");
			}else{
				block = document.getElementById(i);
			}

			localStorage.setItem(block.id + "_origin", block.innerHTML);
			localStorage.setItem(block.id + "_origin-color", block.style.backgroundColor);

			let longPressTimer;
			const longPressThreshold = 1000;
			block.addEventListener('touchstart', function() {
			    longPressTimer = setTimeout(function() {
			        document.getElementById("1").style.opacity = 0.5;
			        document.getElementById("1").style.filter = 'blur(5px)';
			        document.getElementById("content").style.opacity = 0.5;
			        document.getElementById("content").style.filter = 'blur(5px)';

			        document.getElementById("editForm").style.display = "flex";

			        ediitingBlock = block.id;
			    }, longPressThreshold);
			});

			block.addEventListener('touchend', function() {
			    clearTimeout(longPressTimer);
			});
		}
	}else{
		for(let i=1; i<=6; i++){
			let block = document.getElementById(i);

			localStorage.setItem(block.id + "_origin", block.innerHTML);
			localStorage.setItem(block.id + "_origin-color", block.style.backgroundColor);

			block.addEventListener('dblclick', () => {
		        document.getElementById("1").style.opacity = 0.5;
		        document.getElementById("1").style.filter = 'blur(5px)';
			    document.getElementById("content").style.opacity = 0.5;
			    document.getElementById("content").style.filter = 'blur(5px)';

			    document.getElementById("editForm").style.display = "flex";

			    ediitingBlock = block.id;
		    });
		}
	}
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function resetClicked(){
	document.getElementById("1").style.opacity = 1;
    document.getElementById("1").style.filter = 'blur(0px)';
    document.getElementById("content").style.opacity = 1;
    document.getElementById("content").style.filter = 'blur(0px)';

    document.getElementById("editForm").style.display = "none";

    let blockToReset = document.getElementById(ediitingBlock);
    let originCode =  localStorage.getItem(ediitingBlock + "_origin");
    let originColor = localStorage.getItem(ediitingBlock + "_origin-color");
    blockToReset.innerHTML = originCode;
    blockToReset.style.backgroundColor = originColor;


    if(ediitingBlock == 2){
    	changeColor();
    }

    if(localStorage.getItem(ediitingBlock + "_fake")){
    	localStorage.removeItem(ediitingBlock + "_fake");
    }
    if(localStorage.getItem(ediitingBlock + "_fake-color")){
    	localStorage.removeItem(ediitingBlock + "_fake-color");
    }
}

function submitClicked(){
	document.getElementById("1").style.opacity = 1;
    document.getElementById("1").style.filter = 'blur(0px)';
    document.getElementById("content").style.opacity = 1;
    document.getElementById("content").style.filter = 'blur(0px)';

    document.getElementById("editForm").style.display = "none";

    let newCode = document.getElementById("textarea").value;
    let blockToEdit = document.getElementById(ediitingBlock);
    blockToEdit.innerHTML = newCode;
    blockToEdit.style.backgroundColor = getRandomColor();

    localStorage.setItem(ediitingBlock + "_fake", newCode);
    localStorage.setItem(ediitingBlock + "_fake-color", blockToEdit.style.backgroundColor);
}


// TESTING FUNCTIONS___________________________________

// swapContent();
// circleArea(2);
changeColor();
editor();
loadFake();