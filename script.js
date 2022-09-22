const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passLength = 15

const idOne = document.getElementById("id1")
const idTwo = document.getElementById("id2")

let passOne =''
let passTwo =''

const randCharGen = () => {
    return characters[Math.floor(Math.random()*characters.length)]
}

const passGenerator = () => {
    let pass =''
    for(let i=0;i<15;i++){
        pass += randCharGen()
    }
    return pass
}



const generatePass = () => {
    passOne = passGenerator()
    passTwo = passGenerator()
    idOne.textContent = passOne
    idTwo.textContent = passTwo
}

console.log(passOne)
console.log(passTwo)