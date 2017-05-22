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

CharactersSelect.prototype = {

  populateOptions: function(characters){
    //Loop through the data for differecnt charactors
    for (var i = 0; i < characters.length; i++) {
      var option = document.createElement('option')
      
      //assign values to them to populaate list..
        option.innerText = characters[i].name
        option.value = i.toString()

      this.currentOptionIndex = i
      this.select.appendChild(option)
    }
  }

}