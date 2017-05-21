window.onload = function() {

  var charactersList = new CharactersList('http://hp-api.herokuapp.com/api/characters')
  var displayCharacterDiv = document.querySelector('#display-facts')
  var selectElement = document.querySelector('#select-character')
  var displayCharacters = new DisplayCharacters(displayCharacterDiv)
  var charactersSelect = new CharactersSelect(selectElement, charactersList)

  charactersList.onRequestComplete = charactersSelect.populateOptions.bind(charactersSelect)

  charactersList.pullCharacters()
  charactersSelect.onChange = function(character) {
    displayCharacters.populatePage(character)
  }

}