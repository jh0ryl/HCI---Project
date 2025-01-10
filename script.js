let score = 0;
let trashes = loadTrashes()
let trash = getTrash()
let count = 6;

let unsortedItems = document.querySelectorAll(".unsorted-item img");
unsortedItems.forEach(item => {
    item.setAttribute("draggable", true);
    item.addEventListener("dragstart", dragStart);
});

let bin = document.querySelectorAll(".trash-bins-container img")
bin.forEach(bin => {
    bin.addEventListener('dragover', dragOver);
    bin.addEventListener('drop', drop);
});

function dragOver (event){
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const droppedType = event.dataTransfer.getData('type');
    const binType = event.target.getAttribute('type');
  
    if (droppedType === binType) {
      console.log('Correct match!');

      //makes the items refresh when all of them are sorted
      if (draggedObject) {
        draggedObject.style.display = 'none';
    }
      count--;
      if(count === 0){
        randomizeImages();
      }

      console.log(count);
    } else {
        console.log('Wrong bin!');
    }
  }

function dragStart(event){
    draggedObject = event.target;
    event.dataTransfer.setData('type', event.target.getAttribute('type'));
    type = event.target.getAttribute('type');
}



function randomizeImages() {
    unsortedItems.forEach((item) => {
        let randomTrash = getTrash(); // Get a random trash object
        item.setAttribute('type', randomTrash.type);
        item.src = randomTrash.src;   // Set image source
        item.style.display = 'block';
    });
    count = 6;
}

function getTrash() {
    let randomIndex = Math.floor(Math.random() * trashes.length);
    return trashes[randomIndex];
}

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

document.querySelector(".refresh-button").addEventListener("click", randomizeImages);

randomizeImages();