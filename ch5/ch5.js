//code //When the button is clicked

$("#search").on('click', function() {
    $('#output').html("<p></p>");
    //Get the values from the text fields
    var input = $("#input").val();

    if(input === "") {
        //alert("Invalid input");
        $('#output').html("<p>Invalid input</p>");
    }
    else {
        var found = false;
        //Search the JSON data
        $.getJSON("ch5.json", function (result) {

            $.each(result, function (index, student) {

                if (student["Name"].toLowerCase().includes(input.toLowerCase())) {
                    found = true;

                    $('#output').append("<p>Name: " +
                        student["Name"] +
                        "</p>");
                    $('#output').append("<p>Sex: " +
                        student["Sex"] +
                        "</p>");
                    $('#output').append("<p>Born: " +
                        student["Born"] +
                        "</p>");
                    $('#output').append("<p>Died: " +
                        student["Died"] +
                        "</p>");
                    $('#output').append("<p>Father: " +
                        student["Father"] +
                        "</p>");
                    $('#output').append("<p>Mother: " +
                        student["Mother"] +
                        "</p>");
                    $('#output').append("<br>");
                }
            });
            //Display message if no match found
            if (!found) {
                $('#output').html("<p>No match found</p>");
            }
        });
    }
});
