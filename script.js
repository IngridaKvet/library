/*function Book(title, author,pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function(){
  let stringToOutput = this.title + " by " + this.author + ", " + this.pages + " pages," + this.isRead;
  return stringToOutput
  }


}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', "295", "not read yet");


console.log(theHobbit.info());











console.log("HI")*/




// Checkbox handling
document.addEventListener('DOMContentLoaded', () => {
  const checkbox1 = document.getElementById('checkboxYes');
  const checkbox2 = document.getElementById('checkboxNo');

  checkbox1.addEventListener('change', () => {
    if (checkbox1.checked) {
      checkbox2.checked = false;
    }
  });

  checkbox2.addEventListener('change', () => {
    if (checkbox2.checked) {
      checkbox1.checked = false;
    }
  });
});


// Modal handling

var modal = document.getElementById("modal");
var btn = document.getElementById("addBookBtn");
var span = document.getElementsByClassName("closeBtn")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




























function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  player1.sayName(); // logs 'steve'
  player2.sayName(); // logs 'also steve'

  Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true


console.log(Object.getPrototypeOf(player1))
console.log(Player.prototype)


// Player.prototype.__proto__
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// Output may slightly differ based on the browser
console.log(player1.valueOf()); // Output: Object { name: "steve", marker: "X", sayName: sayName() }