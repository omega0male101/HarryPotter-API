var DisplayCharacters = function(container) {
  this.container = container
}

DisplayCharacters.prototype = {

  populatePage: function(character) {
    var pTags = this.container.querySelectorAll('p') 
    pTags[0].innerText = "Name: " + character.name
    pTags[1].innerText = "House: " + character.house
    pTags[2].innerText = "Wand: " + character.wand.core
    pTags[3].innerText = "Patronus: " + character.patronus
  }

}