// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var savBtn= $('#hour-9').siblings().children('[aria-label="save"]');

var textArea = $('#hour-9').siblings().children('.description');
var hour = $('#hour- 9');
var stored="";
var today =dayjs().format('L LT');
console.log(savBtn);
console.log(textArea);

savBtn.on('click',function saveBtnHandler() {
  var timeBlock= $(this).closest('.time-block');
  // var userInput= timeBlock.find('.description');
  var whatHour= timeBlock.attr('id');
  var text = textArea.val();
  var data = {
    hourId: whatHour,
    text : text,};
    
    console.log(data);
    console.log(text);


  
  localStorage.setItem("hourID",JSON.stringify(data));
});
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  function retrieveStored() {
    var storedMemo = JSON.parse(localStorage.getItem('hourID'));
    if(data.hourId==hourId){
      $('text').val()= storedMemo;
    }else {
      return;
    }
    console.log(storedMemo);
  }
  



// dayjs().format('L LT');
 
// var time = dayjs('2023-04-06').format();
// $()

//   var bgColor= if(today>hour) {
//     textArea.find('.present').text('past');

  // }
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
