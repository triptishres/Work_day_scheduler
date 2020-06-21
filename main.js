$(document).ready(function() {

    //adding the current date to the #current date id in the HTML//
    const dateString = moment().format("dddd, MMMM Do YYYY, h:mm a");
    $("#currentDay").html(dateString);

    //creating html timeblocks with for loop starting at 9am until 5pm//
    const scheduleHours = [];

    for (let hour = 9; hour < 18; hour++) {
        scheduleHours.push(moment({
            hour
        }).format('h  a'));
        $('.container').append(`<div class="row time-block" data-time="${hour}"> 
           <!--hour column-->
               <div class="col-sm col-md-2 hour"> 
                 <p class=dayHour>${moment({hour}).format('h  a')}</p>
               </div> 
               
           <!--user input text area-->
               <div class="col-sm col-md-8 d-flex description"> 
                 <textarea class=textArea></textarea> 
               </div> 
          
           <!--bootstrap saveBtn-->
               <div class="col-sm col-md-2 saveBtn">
               <i class="far fa-save fa-2x" id=i></i>  
               </div>`);
        //  console.log({
        //      hour
        //  });
    }


    //Checking the hour of the current day to the hour represented in the HTML data-element to decide it's background color.
    let m = moment();
    $.each($(".time-block"), function(index, value) {
        let dateHour = $(value).attr("data-time");
        if (Number(dateHour) === m.hour()) {
            $(this).find("textarea").addClass('present');
        } else if (Number(dateHour) < m.hour()) {
            $(this).find("textarea").addClass('past');
        } else {
            $(this).find("textarea").addClass('future');
        }
    });

});