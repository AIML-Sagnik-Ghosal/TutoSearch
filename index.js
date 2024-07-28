$('#toggle').click(function() {
  $('.slide-in').toggleClass('from-right');
});
let map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 22.5744, lng: 88.3629 },
    zoom: 8,
    disableDefaultUI:true,
  });
  const contentString ="<div class='card' style='width:150px;'>"+
                              "<div class='identity' style='font:0.8em Cursive;'>"+
                                    "<img src='https://photosly.net/wp-content/uploads/2023/12/no-dp32.jpg' style='width:40%;'>"+
                                    "<div class='quality'>"+
                                       "<div>nature</div>"+
                                       "<div>mode</div>"+
                                    "</div>"+
                                    "<div class='quantity' style='margin-top:0%;'>"+
                                       "<div>age</div>"+
                                       "<div>fees</div>"+
                                    "</div>"+
                              "</div>"+
                              "<div class='read'><button id='toggle' onclick='slide()'>Toggle</button><button>final</button></div>"+
                        "</div>"
const infowindow = new google.maps.InfoWindow({headerContent:"Name of Teacher",height:100});

  infowindow.setContent(contentString);
  const marker = new google.maps.Marker({ map, position: { lat: 22.5744, lng: 88.3629 } });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}
initMap();