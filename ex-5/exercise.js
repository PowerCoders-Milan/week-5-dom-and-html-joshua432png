
// Paste here your array
var books = [
    { title: 'The Design of EveryDay Things',  author: 'Don Norman', alreadyRead: false },
    { title: 'The power of now', author: 'Ekhart Tolle', alreadyRead: true }, 
    { title: 'The Three Body Problem', author: 'Liu Cixin', alreadyRead: true }
  ];

// This function will execute when the window loads
books.forEach(function(item){
  var titleTag = document.createElement("p");
  var authorTag = document.createElement("p");
  var node1 = document.createTextNode(item.title);
  var node2 = document.createTextNode(item.author);
  titleTag.appendChild(node1);
  authorTag.appendChild(node2);
  document.querySelector("body").appendChild(titleTag);
  document.querySelector("body").appendChild(authorTag);

  if (item.alreadyRead == true) {
    titleTag.style.backgroundColor = "green"
  } else {
    titleTag.style.backgroundColor = "red"
  }
})

