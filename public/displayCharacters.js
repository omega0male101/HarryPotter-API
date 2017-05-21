var DisplayCharacters = function(container) {
  this.container = container
}

DisplayCharacters.prototype = {

  populatePage: function(character) {


    var pTags = this.container.querySelectorAll('p')

    pTags[0].innerText = character.name + " was a member of " + character. +"." house + " They were known to use a " + character.wand.core + wand
    pTags[1].innerText = 
    pTags[2].innerText = 
  
  }



}