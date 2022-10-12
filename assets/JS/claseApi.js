$(".btn").on("click", function() {
    alert($(this).text('Loading...'));
    $.ajax({
        type: 'GET',
        url: "https://api.meetup.com/2/cities"
    })
});