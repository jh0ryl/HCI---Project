let score = 0;
let trashes = loadTrashes()
let trash = getTrash()
let count = 12;
let heart = 3;

let scoreElement = document.querySelector(".score-container h3");
let scoreText = document.querySelector(".score-text");

//make the unsorted items draggable and add the starting drag function
let unsortedItems = document.querySelectorAll(".unsorted-item img");
unsortedItems.forEach(item => {
    item.setAttribute("draggable", true);
    item.addEventListener("dragstart", dragStart);
});

//make sure that only the unsorted items are draggrable
document.querySelectorAll("body *:not(.unsorted-item img)").forEach(element => {
    element.setAttribute("draggable", false);
});

//add the dragover and drop event to the bins
let bin = document.querySelectorAll(".trash-bins-container img")
bin.forEach(bin => {
    bin.addEventListener('dragover', dragOver);
    bin.addEventListener('drop', drop);
});

//get the ID of the hearts
let heartIcons = [
    document.getElementById("heart1"),
    document.getElementById("heart2"),
    document.getElementById("heart3")
];

//drag over function
function dragOver (event){
    event.preventDefault();
}

//drop function
function drop(event) {
    event.preventDefault();
    const droppedType = event.dataTransfer.getData('type');
    const binType = event.target.getAttribute('type');
  
    if (droppedType === binType) {
      console.log('Correct match!');
      score = score + 50;
        updateScore();
      var correctAudio = new Audio("Sound Effects/Correct.mp3");
      correctAudio.volume = 0.2;
      correctAudio.play();
    
      if (draggedObject) {
        draggedObject.style.display = 'none'; //makes the item disappear when put to correct bin
    }
      count--;
      if(count === 0){
        randomizeImages(); //refreshes the unsorted item when all items are sorted
      }

      console.log(count);
    } else {
        heart--;
        if (heart >= 0 && heart < heartIcons.length) {
            heartIcons[heart].style.filter = "grayscale(100%)"; //set the heart to grey when an item is put to wrong bin
        }
        console.log('Wrong bin!');
      var wrongAudio = new Audio("Sound Effects/Wrong.mp3");
      wrongAudio.volume = 0.2;
      wrongAudio.play();    

        if(heart === 0){
            pauseTimer();
            var gameOverScreen = document.getElementById("gameOverContainer");
            gameOverScreen.style.display = "flex";
            var gameOverOpacity = document.getElementById("addOpacity");
            

            audio.pause();
            var loseAudio = new Audio("Sound Effects/Lose.mp3");
            loseAudio.volume = 0.1;
            loseAudio.play();

            //make the items not draggable to stop the play
            unsortedItems.forEach(item => {
                item.setAttribute("draggable", false);
            });
        }
        
    }
  }

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
    scoreText.textContent = `${score}`; 
}

//starting drag function
function dragStart(event){
    draggedObject = event.target;
    event.dataTransfer.setData('type', event.target.getAttribute('type'));
    type = event.target.getAttribute('type');
}


//getting random images
function randomizeImages() {
    unsortedItems.forEach((item) => {
        let randomTrash = getTrash(); // Get a random trash object
        item.setAttribute('type', randomTrash.type);
        item.src = randomTrash.src;   // Set image source
        item.style.display = 'block';
    });
    count = 12;
}

//randomizing function
function getTrash() {
    let randomIndex = Math.floor(Math.random() * trashes.length);
    return trashes[randomIndex];
}

//loading of all trashes to an array
function loadTrashes(){
    let trashes = []

    //hazardous
    trashes.push({
        type: 'hazardous',
        src: 'Updated Picture/NEW_Hazardous/battery.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Updated Picture/NEW_Hazardous/kerosene.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Updated Picture/NEW_Hazardous/medicine.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Updated Picture/NEW_Hazardous/pesticide.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Updated Picture/NEW_Hazardous/usedMask.png' })

    //organic
    trashes.push ({
        type: 'organic',
        src: 'Updated Picture/NEW_Organic/appleWaste.png' })
    trashes.push ({
        type: 'organic',
        src: 'Updated Picture/NEW_Organic/bananaPeel.png' })    
    trashes.push ({
        type: 'organic',
        src: 'Updated Picture/NEW_Organic/driedLeaves.png' })  
    trashes.push ({
        type: 'organic',
        src: 'Updated Picture/NEW_Organic/eggShell.png' }) 
    trashes.push ({
        type: 'organic',
        src: 'Updated Picture/NEW_Organic/Services.png' }) 
    trashes.push ({
        type: 'organic',
        src: 'Updated Picture/NEW_Organic/tissuePaper.png' }) 

    //recyclable
    trashes.push({
        type: 'recyclable',
        src:'Updated Picture/NEW_Recyclable/bottle.png'})
    trashes.push({
        type: 'recyclable',
        src:'Updated Picture/NEW_Recyclable/can.png'})
    trashes.push({
        type: 'recyclable',
        src:'Updated Picture/NEW_Recyclable/plasticBag.png'})
    trashes.push({
        type: 'recyclable',
        src:'Updated Picture/NEW_Recyclable/plasticBottle.png'})
    trashes.push({
        type: 'recyclable',
        src:'Updated Picture/NEW_Recyclable/plasticCup.png'})
    trashes.push({
        type: 'recyclable',
        src:'Updated Picture/NEW_Recyclable/straw.png'})

    //residual
    trashes.push({
        type: 'residual',
        src:'Updated Picture/NEW_Residual/candyWrapper.png'})
    trashes.push({
        type: 'residual',
        src:'Updated Picture/NEW_Residual/rottenApple.png'})
    trashes.push({
        type: 'residual',
        src:'Updated Picture/NEW_Residual/rottenBread.png'})
    trashes.push({
        type: 'residual',
        src:'Updated Picture/NEW_Residual/styrofoam.png' })
    trashes.push({
        type: 'residual',
        src:'Updated Picture/NEW_Residual/tire.png'})

    return trashes
} 
// Pause pop-up 
const pause = document.getElementById('pause-pop-container'); 
const pauseBtn = document.getElementById('openPauseButton'); 
const closeBtn = document.getElementById('close-pause-modal');  

const correctModal = document.getElementById('correct-pop-up');
const wrongModal = document.getElementById('wrong-pop-up');

let timerInterval; // Variable to store the interval ID
let isPaused = false; // Tracks whether the timer is paused

pauseBtn.addEventListener('click', () => {
    pause.style.display = 'flex';
    pauseTimer(); // Pause the timer
});

closeBtn.addEventListener('click', () => {
    pause.style.display = 'none';
    resumeTimer(); // Resume the timer
});

window.addEventListener('click', (e) => {
    if (e.target === pause) {
        pause.style.display = 'none';
        resumeTimer(); // Resume the timer
    }
});

function showModal(modal) {
    modal.classList.add('show');
    setTimeout(() => {
        fadeOutModal(modal);
    }, 1000); 
} 

function fadeOutModal(modal) {
    modal.style.transition = "opacity 1s ease";
    modal.style.opacity = 0;  

    setTimeout(() => {
        modal.classList.remove('show');  
        modal.style.opacity = 1;  
    }, 1000);  
}

window.addEventListener('click', (e) => {
    if (e.target === correctModal || e.target === wrongModal) {
        fadeOutModal(e.target);  
    }
});

const restartBtn = document.getElementById('restart');
restartBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
    window.location.href = 'main-menu.html';
});

// game over buttons 
const returnBtn = document.getElementById('return');
returnBtn.addEventListener('click', () => {
    window.location.href = 'main-menu.html';
});

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Final Score Button
const returnBtn1 = document.getElementById('return1');
returnBtn1.addEventListener('click', () => {
    window.location.href = 'main-menu.html';
});

const resetBtn1 = document.getElementById('reset1');
resetBtn1.addEventListener('click', () => {
    window.location.href = 'index.html';
});


// Layout 
const startTime = 30; 
let time = startTime; 
const countDown = document.getElementById('countdown');

// Start the timer
function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateCountdown, 1000);
    }
}

// Pause the timer
function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    isPaused = true; // Set the timer to paused state
}

// Resume the timer
function resumeTimer() {
    if (isPaused) {
        startTimer();
        isPaused = false; // Reset the paused state
    }
}

// Update the timer countdown
function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds; 
    countDown.innerHTML = `${minutes}:${seconds}`;
    
    if (time > 0) {
        time--;

    } else {
        clearInterval(timerInterval);
    }

    if(time == 0){
        var finalScoreScreen = document.getElementById("finalScoreContainer");
        finalScoreScreen.style.display = "flex";
        var finalScoreOpacity = document.getElementById("addOpacity");

        audio.pause();
        var winAudio = new Audio("Sound Effects/Win.mp3");
        winAudio.volume = 0.1;
        winAudio.play();

        //make the items not draggable to stop the play
        unsortedItems.forEach(item => {
            item.setAttribute("draggable", false);
        });
    }
    
}


// Start the timer on page load
startTimer();

    var audio = new Audio("Updated Picture/Assets/game_music.mp3");
    audio.volume = 0.05;
    audio.loop = true;
    audio.autoplay = true;
    // audio.autoplay = false;

    let volume = document.getElementById('volume');
    volume.addEventListener("change", function(e) {
        audio.volume = e.currentTarget.value / 1000;
    })

const img = document.querySelectorAll('.unsorted-item img');

// Add event listener to play sound when the trash image is hovered
img.forEach(img => {
    img.addEventListener('mouseenter', () => {
        const hoverAudio = new Audio('Sound Effects/buttonhover3.mp3');
        hoverAudio.volume = 0.3; 
        hoverAudio.play();
    });
});

// Add event listener for the trash bin hover that will only be triggered during drag and drop events
const trashBins = document.querySelectorAll('.trash-bin-1, .trash-bin-2, .trash-bin-3, .trash-bin-4');

trashBins.forEach(bin => {
   bin.addEventListener('dragover', (e) => {
       e.preventDefault();
       bin.querySelector('img').classList.add('dragging-over');
   });

   bin.addEventListener('dragleave', () => {
       bin.querySelector('img').classList.remove('dragging-over');
   });

   bin.addEventListener('drop', () => {
       bin.querySelector('img').classList.remove('dragging-over');
   });
});

randomizeImages();