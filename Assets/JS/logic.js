var MainContainer = $("#container");

var today = moment()

var CurrentHour = today.format("H")
console.log("hello")
 // console.log((moment(i, ["HH"]).format("H")));
for(i = 9; i< 18; i++)
{
    var BoxDiv = $("<div>")


    var TimeDiv = $("<div>")
    TimeDiv.addClass("hour")
    
    var TimeDivText = $("<p>")
    TimeDivText.text(moment(i, ["HH"]).format("h A"))
    TimeDiv.append(TimeDivText)


    var InputBox= $("<input>")
    InputBox.addClass("past")

    var SubmitButton= $("<button>")
    SubmitButton.addClass("saveBtn")


  
    BoxDiv.append(TimeDiv)
    BoxDiv.append(InputBox)
    BoxDiv.append(SubmitButton)

    BoxDiv.addClass("row")
    MainContainer.append(BoxDiv)

    
}

