function updatemap(){
    console.log("Udating map with real time data.")
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.data)
        rsp.data.forEach(element => {
            longitude = element.longitude;
            latitude = element.latitude;
            cases = element.infected;
            if (cases>255){
                color = "rgb(255, 0, 0)";
            }
            else{
                color = `rgb(${cases},0,0)`;
            }

            // Mark on the map
            new mapboxgl.Marker({
                draggable: false,
                color: color
            })
                .setLngLat([longitude,latitude])
                .addTo(map);
        
        });
    })
}
let interval = 2000;
setInterval (updatemap, interval);