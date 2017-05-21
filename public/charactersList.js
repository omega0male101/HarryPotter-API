var CharactersList = function (url) {
  this.url = url
  this.characters = []

  this.onRequestComplete = null
}

CharactersList.prototype = {

  pullCharacters: function() {
    var request = new XMLHttpRequest()
    request.open("GET", this.url)
      //Making request, then calling onload function
    request.onload = function() {

      //Pulling data from request
      var charactersJson = request.responseText
      this.characters = JSON.parse(charactersJson)
      this.onRequestComplete(this.characters)
    }.

    bind(this)
    request.send()
  }
}