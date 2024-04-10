//1. Adding a new item to the list of items: 
let inputValue = $('input'); // access the input box
let list = $('#list')
let li = $('<li></li>');

$('#list').append('<li>List something</li>');

// added newItem function to be called when add button is clicked
let newItem = function(){
    // append the inputValue's value as a list item
    list.append('<li>' + inputValue.val() + '</li>')
}


$('notification')
    .addClass('bright-red')
    .append("You must write something!");

//2. Crossing out an item from the list of items:
li.addClass("strike");
li.on("click", function() {
    li.addClass("strike")
})

 //3(i). Adding the delete button "X": 
 deleteButton.append(document.createTextNode('X'));

//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
li.addClass("delete");

 // 4. Reordering the items: 
 $('#list').sortable();