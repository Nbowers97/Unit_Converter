/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let lengthTxt = document.getElementById("length-txt")
let volumeTxt = document.getElementById("volume-txt")
let massTxt = document.getElementById("mass-txt")
let inputEl = document.getElementById("input-el")
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204


convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    let lengthMult = baseValue * meterToFeet
    let lengthDiv = baseValue / meterToFeet
    let volumeMult = baseValue * literToGallon
    let volumeDiv = baseValue / literToGallon
    let massMult = baseValue * kilogramToPound
    let massDiv = baseValue / kilogramToPound

    
    
    
    
    lengthTxt.textContent = `${baseValue} meter = ${lengthMult.toFixed(3)} feet | ${baseValue} feet = ${lengthDiv.toFixed(3)} meters`
    
    volumeTxt.textContent = `${baseValue} liters = ${volumeMult.toFixed(3)} gallons | ${baseValue} gallons = ${volumeDiv.toFixed(3)} liters`
   
    massTxt.textContent = `${baseValue} kilos = ${massMult.toFixed(3)} pounds | ${baseValue} pounds = ${massDiv.toFixed(3)} kilos`
})

