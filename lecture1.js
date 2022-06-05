var book = {
  name: "Functional Javascript",
  author: "Micbael Fogus",
  page: 250,

  print: function () {
    console.log(this.name, this.author);
  },
};

for (var props in book) {
  //   console.log(props);
  //   console.log(book);
  //   console.log(book[props]);
}
