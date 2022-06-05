function Person(name, email) {
  this.name = name;
  this.email = email;
  this.print = function () {
    console.log(this.name);
  };
}

var p1 = new Person("nazmul", "nazmul@gmail.com");
var p2 = new Person("Nahid", "nahid@gmail.com");
var p3 = new Person("Shuvo", "shuvo@gmail.com");

var people = [p1, p2, p3];

// people.forEach(function (person) {
//     person.print();
// });

for (var props in p1) {
  //   console.log(props);
  //   console.log(p1[props]);
}

function Book(name, author, price) {
  this.name = name;
  this.author = author;
  this.price = price;
}

var book = new Book("Nazmul", "Javascript", 30);

console.log(book.constructor);
