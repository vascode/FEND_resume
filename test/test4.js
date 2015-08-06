$(document).ready(function() {
    $(".progress").each(function() {
        var progressValue = $(this).data("value");
        $(this).progressbar({
            value: progressValue
        }).children("span").appendTo(this);
    });
});