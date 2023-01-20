var MainContainer = $("#container");


for(i = 1; i< 17; i++)
{
    var BoxDiv = $("<div>")


    var TimeDiv = $("<div>")
    TimeDiv.addClass("hour")
    TimeDiv.text("10:00")


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
