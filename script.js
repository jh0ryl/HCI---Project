let score = 0;
let trashes = loadTrashes()
let trash = getTrash()
let bin = document.querySelectorAll(".trash-bins-container img")    

let unsortedItems = document.querySelectorAll(".unsorted-item img");
unsortedItems.forEach(item => {
    item.setAttribute("draggable", true);
    item.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text/plain", event.target.src);
        event.dataTransfer.setData("type", event.target.closest(".unsorted-item").getAttribute("type"));
    });
});

const trashBins = document.querySelectorAll(".trash-bin");
trashBins.forEach(bin => {
    bin.addEventListener("dragover", event => {
        event.preventDefault(); // Necessary to allow dropping
    });

    bin.addEventListener("drop", event => {
        event.preventDefault();
        const droppedItemtype = event.dataTransfer.getData("type");
        const binType = event.target.querySelector(".trash-bin trash-bin-2 img").textContent.toLowerCase().includes("organic") ? "organic"
                       : event.target.querySelector(".trash-bin trash-bin-3 img").textContent.toLowerCase().includes("recyclable") ? "recyclable"
                       : event.target.querySelector(".trash-bin trash-bin-1 img").textContent.toLowerCase().includes("hazardous") ? "hazardous"
                       : "residual";
        
        const draggedItemType = event.dataTransfer.getData("type"); // Optional type check
        if (draggedItemType === binType) {
            // dito lalagay score
            console.log("Correct bin!");
        } else {
            console.log("Incorrect bin!");
        }
    });
});


function randomizeImages() {
    unsortedItems.forEach((item) => {
        let randomTrash = getTrash(); // Get a random trash object
        item.src = randomTrash.src;   // Set image source
    });
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