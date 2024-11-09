
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
function editor(){
	if(window.innerWidth <= 500){
		for(let i=1; i<=6; i++){
			if(i == 4){
				block = document.getElementById(i + "-1");
			}else{
				block = document.getElementById(i);
			}

			let longPressTimer;
			const longPressThreshold = 1000;
			block.addEventListener('touchstart', function() {
			    longPressTimer = setTimeout(function() {
			        document.getElementById("1").style.opacity = 0.5;
			        document.getElementById("1").style.filter = 'blur(5px)';
			        document.getElementById("content").style.opacity = 0.5;
			        document.getElementById("content").style.filter = 'blur(5px)';

			        document.getElementById("editForm").style.display = "flex";
			    }, longPressThreshold);
			});

			block.addEventListener('touchend', function() {
			    clearTimeout(longPressTimer);
			});
		}
	}else{
		for(let i=1; i<=6; i++){
			block = document.getElementById(i);

			block.addEventListener('dblclick', () => {
		        document.getElementById("1").style.opacity = 0.5;
		        document.getElementById("1").style.filter = 'blur(5px)';
			    document.getElementById("content").style.opacity = 0.5;
			    document.getElementById("content").style.filter = 'blur(5px)';

			    document.getElementById("editForm").style.display = "flex";
		    });
		}
	}
}

// TESTING FUNCTIONS___________________________________

// swapContent();
// circleArea(2);
changeColor();
editor();