function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(52.13263, 5.29127),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("google-map"), mapProp);
}

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "../Resources/Data/t_oorlogsmonumenten_view.xml",
        dataType: "xml",
        success: function(xml) {
            $(xml).find('row').each(function () {
                $(this).find('field').each(function(){
                console.log($(this).text());
               // var id = ;
                //var title = $(this).attr('title').text();
                //var url = $(this).attr('url').text();
                //console.log("id = "+id+", title = "+title);
                });

               // $('').html(''+title+'').appendTo('#page-wrap');
            });
        }
    });
});

google.maps.event.addDomListener(window, 'load', initialize);