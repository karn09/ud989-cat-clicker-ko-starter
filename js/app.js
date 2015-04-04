var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');
  this.levels = ko.observable(['kitten', 'teen kitty', 'cat'])
  

  this.incrementCounter = function() {
    return this.clickCount(this.clickCount() + 1);
  }

  this.level = ko.pureComputed(function() {
    if (this.clickCount() < 10) {
      return 'Teeeensy Kitty!'
    } else if (this.clickCount() < 20) {
      return 'Teeny !'
    } else {
      return 'Biiiig Boi!'
    }
  }, this);
  
}

ko.applyBindings(new ViewModel());