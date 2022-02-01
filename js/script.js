document.addEventListener('DOMContentLoaded', function(){

    const deviceSection = document.querySelector(".device");
    const deviceImg = deviceSection.querySelectorAll("img");
    const offSet = 300;
    // 변수명 OST 뜻 : offsetTop
    const deviceOST = deviceSection.offsetTop - offSet;

    window.addEventListener("scroll", function(){
        if( this.scrollY > deviceOST ){
            for( let i = 0; i < deviceImg.length; i++){
                deviceImg[i].classList.add("animate");
            }
        }
    })

})