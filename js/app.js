var initialCats = [
  { 
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    nicknames: ['tabtab', 'boogiie', 'katto']
  }, {
    clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    nicknames: ['Tigger']
  }, {
    clickCount: 0,
    name: 'Scaredy',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    nicknames: ['Scaredoooo']
  }
    
]
var ViewModel = function() {
  
  var self = this;
  this.catList = ko.observableArray([]);
 
  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem))
  })
  this.changeCat = function(cat) {
    console.log(cat)
    self.currentCat(cat);
  }
  this.currentCat = ko.observable(this.catList()[0]);
  this.incrementCounter = function() {
    return this.clickCount(this.clickCount() + 1);
  }
}

var Cat = function(data) {
  this.name = ko.observable(data.name);
  
  this.level = ko.pureComputed(function() {
    if (this.clickCount() < 10) {
      return 'Teeeensy Kitty!'
    } else if (this.clickCount() < 20) {
      return 'Teeny !'
    } else {
      return 'Biiiig Boi!'
    }
  }, this);
  
  this.clickCount = ko.observable(data.clickCount);
  this.imgSrc = ko.observable(data.imgSrc); 
  this.nicknames = ko.observable(data.nicknames);
  
}

ko.applyBindings(new ViewModel());