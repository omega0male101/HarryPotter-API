window.onload = function() {

  var charactersList = new CharactersList('http://hp-api.herokuapp.com/api/characters')
  var displayCharacters = new DisplayCharacters(displayCharacterDiv)
  var displayCharacterDiv = document.querySelector('#display-facts')
  var charactersSelect = new CharactersSelect(selectElement, charactersList)
  var selectElement = document.querySelector('#select-character')
  
  charactersList.onRequestComplete = charactersSelect.populateOptions.bind(charactersSelect)

  charactersList.getCharacters()
  charactersSelect.onChange = function(character) {
    displayCharacters.populatePage(character)
  }

}