var CharactersSelect = function(select, charatersList){
    this.select = select
    this.charatersList = charatersList
    this.onChange = null
    this.currentOptionIndex = 0

  this.select.addEventListener('change', function(x) {
    var select = x.target
    var selectedIndex = select.selectedIndex
    var character = this.charatersList.characters[selectedIndex - 1]
    this.onChange(character)
  }.bind(this))
}
