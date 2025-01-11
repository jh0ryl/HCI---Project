let score = 0;
let trashes = loadTrashes()
let trash = getTrash()
let count = 6;
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
    count = 6;
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

randomizeImages();