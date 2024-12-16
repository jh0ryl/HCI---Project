let bins = document.querySelectorAll(".trash-bins-container img")
let randomTrash = document.querySelectorAll(".unsorted-item img")

let trashes = loadTrashes()
let trash = getTrash()

randomTrash.src = trash.src
randomTrash.name = trash.type

function newTrash(){
    trash = getTrash()
    randomTrash.src = trash.src
    randomTrash.name = trash.type
}

function getTrash(){
    let randomIndex = Math.floor(Math.random() * 29)
    console.log(trashes[randomIndex].src)
    console.log(trashes[randomIndex].type)
    return trashes[randomIndex]
}

function loadTrashes(){
    let trashes = []

    //hazardous
    trashes.push({
        type: 'hazardous',
        src: 'Pictures\Trash Pictures\Hazardous Wastes\kerosene.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures\Trash Pictures\Hazardous Wastes\medicine.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures\Trash Pictures\Hazardous Wastes\motorOil.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures\Trash Pictures\Hazardous Wastes\muriaticAcid.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures\Trash Pictures\Hazardous Wastes\pesticide.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures\Trash Pictures\Hazardous Wastes\solvent.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures\Trash Pictures\Hazardous Wastes\battery.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures\Trash Pictures\Hazardous Wastes\mask.png' })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures\Trash Pictures\Hazardous Wastes\thermometer.png'  })
    trashes.push({
        type: 'hazardous',
        src: 'Pictures\Trash Pictures\Hazardous Wastes\varnish.png' })

    //organic
    trashes.push ({
        type: 'organic',
        src: 'Pictures\Trash Pictures\Organic Wastes\banana_peel.png' })
    trashes.push ({
        type: 'organic',
        src: 'Pictures\Trash Pictures\Organic Wastes\crumpled_paper.png' })    
    trashes.push ({
        type: 'organic',
        src: 'Pictures\Trash Pictures\Organic Wastes\food_waste.png' })  
    trashes.push ({
        type: 'organic',
        src: 'Pictures\Trash Pictures\Organic Wastes\leaves.png' }) 
    trashes.push ({
        type: 'organic',
        src: 'Pictures\Trash Pictures\Organic Wastes\leftover_food.png' }) 
    trashes.push ({
        type: 'organic',
        src: 'Pictures\Trash Pictures\Organic Wastes\tissue_paper.png' }) 

    //recyclable
    trashes.push({
        type: 'recyclable',
        src:'Pictures\Trash Pictures\Recyclable Wastes\glass_bottle.png' })
    trashes.push({
        type: 'recyclable',
        src:'Pictures\Trash Pictures\Recyclable Wastes\plastic_bag.png' })
    trashes.push({
        type: 'recyclable',
        src:'Pictures\Trash Pictures\Recyclable Wastes\plastic_bottle.png' })
    trashes.push({
        type: 'recyclable',
        src:'Pictures\Trash Pictures\Recyclable Wastes\Recyclable (6).png' })
    trashes.push({
        type: 'recyclable',
        src:'Pictures\Trash Pictures\Recyclable Wastes\tin_can.png' })
    trashes.push({
        type: 'recyclable',
        src:'Pictures\Trash Pictures\Recyclable Wastes\cd.png' })

    //residual
    trashes.push({
        type: 'residual',
        src:'Pictures\Trash Pictures\Residual Wastes\candy_wrappers.png' })
    trashes.push({
        type: 'residual',
        src:'Pictures/Trash Pictures/Residual Wastes/rotten_apple.png' })
    trashes.push({
        type: 'residual',
        src:'Pictures\Trash Pictures\Residual Wastes\rotten_food.png' })
    trashes.push({
        type: 'residual',
        src:'Pictures\Trash Pictures\Residual Wastes\styrofoam.png' })
    trashes.push({
        type: 'residual',
        src:'Pictures\Trash Pictures\Residual Wastes\tire.png' })
    trashes.push({
        type: 'residual',
        src:'Pictures\Trash Pictures\Residual Wastes\diaper.png' })
    trashes.push({
        type: 'residual',
        src:'Pictures\Trash Pictures\Residual Wastes\wrapper.png' })

    return trashes
}

