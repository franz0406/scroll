document.addEventListener("DOMContentLoaded", function(){

    const deviceSection = document.querySelector(".device");
    const deviceImg = deviceSection.querySelectorAll("img");
    const featuresSection = document.querySelector(".fearures");
    const featuresImgs = featuresSection.querySelectorAll(".item > img");
    const featuresH4 = featuresSection.querySelectorAll(".item > h4");  
    const locationSection = document.querySelector(".location");  
    const stripes = locationSection.querySelectorAll(".stripe"); 
    const waypointOffset = '75%'; 

    const deviceWaypoint = new Waypoint({
        element: deviceSection,
        handler: function() {
            for( let i = 0; i < deviceImg.length; i++){
                deviceImg[i].classList.add("animate");
            }
        },
        offset: waypointOffset 
    });

    const featuresWaypoint = new Waypoint({
        element: featuresSection,
        handler: function() {
            for( let x = 0; x < featuresImgs.length; x++){
                featuresImgs[x].classList.add("grow_img");
                featuresH4[x].classList.add("animate");
            }
        },
        offset: waypointOffset 
    });

    const locationWaypoint = new Waypoint({
        element: locationSection,
        handler: function() {
            stripes.forEach( ( item, idx ) => {
                setTimeout( ()=>{
                    item.classList.add("animate_down");
                }, 100 * idx)
            })
        },
        offset: waypointOffset 
    });

})