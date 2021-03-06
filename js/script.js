document.addEventListener('DOMContentLoaded', function(){    
    
    const deviceSection = document.querySelector(".device");
    const deviceImg = deviceSection.querySelectorAll("img");
    const featuresSection = document.querySelector(".fearures");
    const featuresImgs = featuresSection.querySelectorAll(".item > img");
    const featuresH4 = featuresSection.querySelectorAll(".item > h4");  
    const locationSection = document.querySelector(".location");  
    const stripes = locationSection.querySelectorAll(".stripe");  

    const offSet = 500;
    const deviceOST = deviceSection.offsetTop - offSet;
    const featuresImgsOST = featuresSection.offsetTop - offSet;
    const locationOST = locationSection.offsetTop - offSet;

    window.addEventListener("scroll", function(){
        if( this.scrollY > deviceOST ){
            for( let i = 0; i < deviceImg.length; i++){
                deviceImg[i].classList.add("animate");
            }
        }

        if( this.scrollY > featuresImgsOST){
            for( let x = 0; x < featuresImgs.length; x++){
                featuresImgs[x].classList.add("grow_img");
                featuresH4[x].classList.add("animate");
            }
        }

        if( this.scrollY > locationOST){
            stripes.forEach( ( item, idx ) => {
                setTimeout( ()=>{
                    item.classList.add("animate_down");
                }, 100 * idx)
            })
        }
    });
})