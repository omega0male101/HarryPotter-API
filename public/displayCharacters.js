var DisplayCharacters = function(container) {
  this.container = container
}


DisplayCharacters.prototype = {

  Page: function(character) {
    var pTags = this.container.querySelectorAll('p') 
    pTags[0].innerText = character.name + " is reconised whith their efforts in the house of " + character.house + ". Be warey as the generally carry a " + character.wand.core + " wand."
  }

}