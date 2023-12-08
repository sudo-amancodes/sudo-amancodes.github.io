$(document).ready(function() {
	$('a').click(function(e){
        e.preventDefault();
        $.ajax({
            url: String($(this).attr("title"))+'.json',
            dataType: "json",
            success: function(result) {
                // Clear the main content before adding new data
                $('main').empty();

                // Create HTML elements to display the retrieved data
                var speakerHTML = '<h1>' + result.speakers[0].title + '</h1>' +
                                  '<h2>' + result.speakers[0].month + '</h2>' +
                                  '<h3>' + result.speakers[0].speaker + '</h3>' +
                                  '<img src="' + result.speakers[0].image + '" alt="speaker_picture">' +
                                  '<p>' + result.speakers[0].text + '</p>';

                // Append the new speaker data to the main element
                $('main').append(speakerHTML);
            },
        });
    }) // Trigger a click event on the first link to load initial data
});