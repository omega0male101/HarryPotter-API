var CharactersSelect = function(select, charatersList){
  this.select = select
  this.charatersList = charatersList
  this.onChange = null
  this.currentOptionIndex = 0

  this.select.addEventListener('change', function(e) {
    var select = e.target
    var selectedIndex = select.selectedIndex
    var character = this.charatersList.characters[selectedIndex - 1]
    this.onChange(character)
  }.bind(this))
}

CharactersSelect.prototype = {

  populateOptions: function(characters){
    for (var i = 0; i < characters.length; i++) {
      var option = document.createElement('option')
      option.innerText = characters[i].name
      option.value = i.toString()
      this.currentOptionIndex = i
      this.select.appendChild(option)
    }
  }

}