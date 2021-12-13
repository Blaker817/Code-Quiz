window.addEventListener('DOMContentLoaded', () => {
    var storage = JSON.parse(localStorage.getItem('highscore'))
    if (storage === null) {
        storage = []
    }
storage=storage.sort(function(a,b){
    return b.currentScore-a.currentScore
})
console.log(storage)
for(var i=0;i<storage.length;i++){
    var score=storage[i]
    //console.log(score)
    var li=document.createElement('li')
    li.innerHTML=score.name+': '+score.currentScore
    var highscores = document.getElementById('highscores')
    highscores.appendChild(li)
}

});