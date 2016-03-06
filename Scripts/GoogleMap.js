function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(52.13263, 5.29127),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("google-map"), mapProp);
    $(document).ready(function(){
        $.ajax({
            type: "GET",
            url: "http://localhost/WebsiteClient/Resources/Data/monumenten.js",
            dataType: "json",
            cache: false,
            contentType: "application/json",
            success: function (data) {
                $.each(data.response.docs, function (key, item) {
                    var myLatLng = { lat: parseFloat(item.wiki_lat), lng: parseFloat(item.wiki_lon )};

                    var contentString = '<div id="content">' +
                    '<div id="siteNotice">' +
                    '</div>' +
                    '<h1 id="firstHeading" class="firstHeading">' +
                    item.abc_objectnaam + ', ' + item.abc_plaats +
                    '</h1>' +
                    '<div id="bodyContent">' +
                    '<p>' +
                     item.rce_omschrijving_redengevend   
                    '</p>' +
                    '</div>' +
                    '</div>';


                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });

                    var marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        title: item.rce_objectnaam
                    });

                    marker.addListener('click', function () {
                        infowindow.open(map, marker);
                    });

                    console.log(item.rce_objrijksnr);
                })
            }
        });
    });

}



google.maps.event.addDomListener(window, 'load', initialize);