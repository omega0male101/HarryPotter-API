var CharactersList = function (url) {
  this.url = url
  this.characters = []
  this.onRequestComplete = null

}

CharactersList.prototype = {

  getCharacters: function() {
    var request = new XMLHttpRequest()
    request.open("GET", this.url)
    request.onload = function() {
      var charactersJson = request.responseText
      this.characters = JSON.parse(charactersJson)
      this.onRequestComplete(this.characters)
    }.bind(this)
    request.send()
  }

}