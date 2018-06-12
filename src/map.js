const initMap = function() {
    let location = {lat: 50.981987, lng: 11.015089};

    let map = new google.maps.Map(content, {zoom: 40, center: location});
    let marker = new google.maps.Marker({postion: location, map: map});

};

export default initMap;