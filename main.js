function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log(lat);
    console.log(long);



    //**********************************************
    var map = L.map('mapContainer').setView([lat, long], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);







    var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=0bda5bdbd55843f5716ea9febd9f26a7";


    //***************************fetch*******************
    var redicon = L.icon({
        iconUrl: 'img/covidx.png ',


        iconSize: [38, 40], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });


    var sospechon = L.icon({
        iconUrl: 'img/sospechosox.png ',


        iconSize: [38, 40], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });












    marcas6 = L.marker([3.54220079999999981624, -76.29768919999999354786], {
            icon: redicon
        }).addTo(map)
        .bindPopup('<img src="img/covidx.png " width="100"/>Oficina Samanes Cirplein Dirección: Celular: <a href="graficasjorgearmandosantos.html" target=\"_blank\" title=\"Opens in a new window\">Ver Estadísticas </a>');

    marcas7 = L.marker([3.50114029999999987197, -76.29879420000000322943], {
            icon: redicon
        }).addTo(map)
        .bindPopup('<img src="img/covidx.png" width="100"/>Oficina La Italia Cirplein Dirección: Celular:<a href=\"graficos.html" target=\"_blank\" title=\"Opens in a new window\">Estadísticas </a>');






    marcas10 = L.marker([3.52220079999999981624, -76.29768919999999354786], {
            icon: redicon
        }).addTo(map)
        .bindPopup('<img src="img/covidx.png" width="100"/>Oficina Centro Cirplein Dirección: Celular: <a href=\"graficos.html" target=\"_blank\" title=\"Opens in a new window\">Estadísticas </a>');



    // var cities = L.layerGroup([marcas, marcas2, marcas4, marcas5]);

    //var marcas3 = L.marker([3.52212, -76.288904]).addTo(map)
    // .bindPopup('<img src="1m.jpg" width="100"/>Responsable: Lider de la Comunidad responsable de organización y covocatorias<a href=\"graficos.html" target=\"_blank\" title=\"Opens in a new window\">Estadísticas </a>'),


    //marcas7 = L.marker([3.52332, -76.296904]).addTo(map)
    //.bindPopup('<img src="2h.jpg" width="100"/>Responsable: Lider de la Comunidad responsable de organización y covocatorias <a href=\"graficos.html" target=\"_blank\" title=\"Opens in a new window\">Estadísticas </a>'),

    //marcas8 = L.marker([3.52823844, -76.2984856]).addTo(map)
    //.bindPopup('<img src="1h.jpg" width="100"/>Responsable: Lider de la Comunidad responsable de organización y covocatorias<a href=\"graficos.html" target=\"_blank\" title=\"Opens in a new window\">Estadísticas </a>');
    //var cities2 = L.layerGroup([marcas3, marcas7, marcas8]);

    /*var polygon = L.polygon([
[3.52423844,-76.2894856],
[3.5332,-76.297904],
[3.5212,-76.289904]],{
color: 'red',
fillColor: '#f03',
fillOpacity: 0.5,

}).addTo(map).bindPopup('<img src="22.png" width="100"/>Competencia Palmira es un municipio colombiano del departamento del Valle del Cauca en Colombia; localizado en la región sur del departamento. Es conocido como La Villa de las Palmas<a href=\"https://scharss.github.io/" target=\"_blank\" title=\"Opens in a new window\">Ir aquí</a>'),*/

    /*var circle = L.circle([3.5347057, -76.2886028], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map).bindPopup('<img src="22.png" width="100"/>Sin líder<a href=\"graficos.html" target=\"_blank\" title=\"Opens in a new window\">Estadísticas</a>'),

        circle2 = L.circle([3.5509752, -76.3096519], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(map).bindPopup('<img src="22.png" width="100"/>Sin Líder<a href=\"graficos.html" target=\"_blank\" title=\"Opens in a new window\">Estadísticas</a>');

    var competenciax = L.layerGroup([circle, circle2]); */


    // var overlayMaps = {
    // "Candidato A": cities,

    // "Candidato B": cities2,
    // "Sin Líder": competenciax



    //};





    //********************************fin_fetch****************************************



    L.marker([lat, long]).addTo(map).bindPopup('Estas Aquí').openPopup();
    //.openPopup();









}