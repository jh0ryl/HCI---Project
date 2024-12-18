
let trashes = loadTrashes()
let trash = getTrash()

let unsortedItems = document.querySelectorAll(".unsorted-item img");

function randomizeImages() {
    unsortedItems.forEach((item) => {
        let randomTrash = getTrash(); // Get a random trash object
        item.src = randomTrash.src;   // Set image source
        item.dataset.type = randomTrash.type; // Save the type for later use if needed
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
        src: 'Pictures/Trash Pictures/Hazardous Wastes/kerosene.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures/Trash Pictures/Hazardous Wastes/medicine.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures/Trash Pictures/Hazardous Wastes//motorOil.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures/Trash Pictures/Hazardous Wastes/muriaticAcid.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures/Trash Pictures/Hazardous Wastes/pesticide.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures/Trash Pictures/Hazardous Wastes/solvent.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures/Trash Pictures/Hazardous Wastes/used_battery.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures/Trash Pictures/Hazardous Wastes/used_mask.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures/Trash Pictures/Hazardous Wastes/used_thermometer.png'  })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures/Trash Pictures/Hazardous Wastes/varnish.png' })

    //organic
    trashes.push ({
        type: 'organic',
        src: 'Pictures/Trash Pictures/Organic Wastes/banana_peel.png' })
    trashes.push ({
        type: 'organic',
        src: 'Pictures/Trash Pictures/Organic Wastes/crumpled_paper.png' })    
    trashes.push ({
        type: 'organic',
        src: 'Pictures/Trash Pictures/Organic Wastes/food_waste.png' })  
    trashes.push ({
        type: 'organic',
        src: 'Pictures/Trash Pictures/Organic Wastes/leaves.png' }) 
    trashes.push ({
        type: 'organic',
        src: 'Pictures/Trash Pictures/Organic Wastes/leftover_food.png' }) 
    trashes.push ({
        type: 'organic',
        src: 'Pictures/Trash Pictures/Organic Wastes/tissue_paper.png' }) 

    //recyclable
    trashes.push({
        type: 'recyclable',
        src:'Pictures/Trash Pictures/Recyclable Wastes/glass_bottle.png'})
    trashes.push({
        type: 'recyclable',
        src:'Pictures/Trash Pictures/Recyclable Wastes/plastic_bag.png'})
    trashes.push({
        type: 'recyclable',
        src:'Pictures/Trash Pictures/Recyclable Wastes/plastic_bottle.png'})
    trashes.push({
        type: 'recyclable',
        src:'Pictures/Trash Pictures/Recyclable Wastes/coke.png'})
    trashes.push({
        type: 'recyclable',
        src:'Pictures/Trash Pictures/Recyclable Wastes/tin_can.png'})
    trashes.push({
        type: 'recyclable',
        src:'Pictures/Trash Pictures/Recyclable Wastes/cd.png'})

    //residual
    trashes.push({
        type: 'residual',
        src:'Pictures/Trash Pictures/Residual Wastes/candy_wrappers.png'})
    trashes.push({
        type: 'residual',
        src:'Pictures/Trash Pictures/Residual Wastes/rotten_apple.png'})
    trashes.push({
        type: 'residual',
        src:'Pictures/Trash Pictures/Residual Wastes/rotten_food.png'})
    trashes.push({
        type: 'residual',
        src:'Pictures/Trash Pictures/Residual Wastes/styrofoam.png' })
    trashes.push({
        type: 'residual',
        src:'Pictures/Trash Pictures/Residual Wastes/tire.png'})
    trashes.push({
        type: 'residual',
        src:'Pictures/Trash Pictures/Residual Wastes/used_diaper.png'})
    trashes.push({
        type: 'residual',
        src:'Pictures/Trash Pictures/Residual Wastes/used_wrapper.png'})

    return trashes
}

document.querySelector(".refresh-button").addEventListener("click", randomizeImages);

randomizeImages();