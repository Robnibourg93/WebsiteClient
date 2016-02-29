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
        url: "../Resources/Data/t_oorlogsmonumenten_view.xml.xml",
        dataType: "xml",
        success: function(xml) {
            $(xml).find('row').each(function(){
                var id = $(this).attr('ID');
                var title = $(this).find('title').text();
                var url = $(this).find('url').text();
                console.log("id = "+id+", title = "+title);
               // $('').html(''+title+'').appendTo('#page-wrap');
            });
        }
    });
});

google.maps.event.addDomListener(window, 'load', initialize);