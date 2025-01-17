let score = 0;
let trashes = loadTrashes()
let trash = getTrash()
let count = 12;
let heart = 3;

let scoreElement = document.querySelector(".score-container h3");

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
        showModal(correctModal); 
    
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
        showModal(wrongModal); 

        if(heart === 0){
            console.log("Game Over");
            //make the items not draggable to stop the play
            unsortedItems.forEach(item => {
                item.setAttribute("draggable", false);
            });

        }
        
    }
  }

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
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

const pause = document.getElementById('pause-pop-container'); 
const pauseBtn = document.getElementById('openPauseButton'); 
const closeBtn = document.getElementById('close-pause-modal');  

const correctModal = document.getElementById('correct-pop-up');
const wrongModal = document.getElementById('wrong-pop-up');

pauseBtn.addEventListener('click', () => {
    pause.style.display = 'flex';
  });

closeBtn.addEventListener('click', () => {
    pause.style.display = 'none';
  });

window.addEventListener('click', (e) => {
    if (e.target === pause) {
      pause.style.display = 'none';
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

    var audio = new Audio("Updated Picture/Assets/bg music.mp3");
    audio.volume = 0.1;
    audio.loop = true;
    audio.autoplay = true;

    let volume = document.getElementById('volume');
    volume.addEventListener("change", function(e) {
        audio.volume = e.currentTarget.value / 1000;
    })



randomizeImages();