let rand_ = function() {
    return Math.floor(Math.random()*3);
}

let opendoor = function (id) {
    let doors = document.querySelectorAll(".door");
    doors[id-1].src = "res/door_opened.png"
    
    if ( id-1 == rand_() ) {
        doors[id-1].src = "res/biu_na_porta.png"
        document.getElementById("status").innerText = "Perdeu"
        document.getElementById("sound").play()
        document.getElementById("status").style.color = "red"
    }else {
        document.getElementById("status").style.color = "green"
        document.getElementById("status").innerText = "Sorte"
    }
}


function refresh() {
    window.location.reload()
}
