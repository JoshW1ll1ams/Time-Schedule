$(document).ready(function() {
var MainContainer = $("#container");

var today = moment()

var CurrentHour = parseInt(today.format("H"))


for(i = 9; i< 18; i++)
{
    var timeI = parseInt((moment(i, ["HH"]).format("H")));

    var BoxDiv = $("<div>");

    var TimeDiv = $("<div>");
    TimeDiv.addClass("hour");
    var TimeDivText = $("<p>");

    TimeDivText.text(moment(i, ["HH"]).format("h A"));
    TimeDiv.append(TimeDivText);

    var InputBox= $("<input>");
    InputBox.val(localStorage.getItem("ButtonClick"+(i-9)))

    if(timeI < CurrentHour)
    {
        InputBox.addClass("past inputbox");
    }
    if(timeI == CurrentHour)
    {
        InputBox.addClass("present inputbox");
    }
    if(timeI > CurrentHour)
    {
        InputBox.addClass("future inputbox");
    }

    $(InputBox).attr("inputnum",i-9);

    var SubmitButton= $("<button>");
    SubmitButton.addClass("saveBtn");
    $(SubmitButton).attr("buttonnum",i-9);

    BoxDiv.append(TimeDiv);
    BoxDiv.append(InputBox);
    BoxDiv.append(SubmitButton);

    BoxDiv.addClass("row");
    MainContainer.append(BoxDiv);
}


InputBox.val(localStorage.getItem("ButtonClick"+i-1))


$('.saveBtn').click(function(event){
    var ButtonPressed = this.getAttribute('buttonnum');
    var RelativeInput =  $('#container').children().eq(ButtonPressed).children().eq(1).val();
    //savedTasks.ButtonPressed = RelativeInput;
   // console.log(savedTasks.ButtonPressed)
    localStorage.setItem("ButtonClick"+ButtonPressed,RelativeInput)
});
//localStorage.setItem("ButtonClick"+0,RelativeInput)
 var saved = localStorage.getItem("ButtonClick"+0)
 console.log(saved)

});