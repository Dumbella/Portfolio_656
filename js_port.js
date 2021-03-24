
let Next = document.getElementById("Next")
let Back = document.getElementById("Back")
var i = 0
function next() {

    let Me = document.getElementById("Me")
    let span= Me.defaulValue
    let skill = document.getElementById("skill")
    let interes = document.getElementById("interes")
    let experience = document.getElementById("experience")

    if (i == 0) {
        Me.style.display="none"
        interes.style.display="block"
        experience.style.display="none"
        skill.style.display="none"
        i++
    }
    else if(i==1){
        Me.style.display="none"
        interes.style.display="none"
        experience.style.display="block"
        skill.style.display="none"
        i++
    }
    else if(i==2){
        Me.style.display="none"
        interes.style.display="none"
        experience.style.display="none"
        skill.style.display="block"
        i++
    }
    else {
        Me.style.display="block"
        interes.style.display="none"
        experience.style.display="none"
        skill.style.display="none"
        i=0
    }


}

Next.addEventListener("click", next)

function back() {

    let Me = document.getElementById("Me")
    let span= Me.defaulValue
    let skill = document.getElementById("skill")
    let interes = document.getElementById("interes")
    let experience = document.getElementById("experience")

    if (Me == 0) {
        Me.style.display="none"
        interes.style.display="none"
        experience.style.display="block"
        skill.style.display="none"
        i=0
        
    }
    else if(i==1){
        Me.style.display="block"
        interes.style.display="none"
        experience.style.display="none"
        skill.style.display="none"
        i--
    }
    else if(i==2){
        Me.style.display="none"
        interes.style.display="block"
        experience.style.display="none"
        skill.style.display="none"
        i--
    }
    else {
        Me.style.display="none"
        interes.style.display="none"
        experience.style.display="block"
        skill.style.display="none"
        i--
    }


}

Back.addEventListener("click", back)