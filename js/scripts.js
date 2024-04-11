
function newItem(){

//1. Adding a new item to the list of items: 
let inputValue = $('input').val(); // access the input box
let list = $('#list')
let li = $('<li></li>');
let span = $("<span></span>").append(inputValue);



// added newItem function to be called when add button is clicked
if (inputValue === "") {
    alert("You must write something!")
    } else {
        list.append(li)
        li.append(span);
    }

//2. Crossing out an item from the list of items:
//li.addClass("strike");
li.on("click", function() {
    li.toggleClass("strike");
});

 //3(i). Adding the delete button "X": 
 let crossOutButton = $("<crossOutButton></crossOutButton>");
 $(crossOutButton).append("X");
 li.append(crossOutButton);


//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
crossOutButton.on("click", function() {
    li.addClass("delete");
})

}
 // 4. Reordering the items: 
 $(function(){
 $('#list').sortable();
 })