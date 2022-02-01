# Scroll-Animation

### 순수 자바스크립트로 기본적인 스크롤 애니메이션 적용방법
```javascript
const 콘테이너 = document.querySelector(".콘테이너");
const 애니메이션적용할요소 = 콘테이너.querySelectorAll("애니메이션적용할요소");
const offSet = 300;

// 변수명 OST : offsetTop
const 콘테이너OST = 콘테이너.offsetTop - offSet;

window.addEventListener("scroll", function(){
    if( this.scrollY > 콘테이너OST ){
        for( let i = 0; i < 애니메이션적용할요소.length; i++){
            애니메이션적용할요소[i].classList.add("animate");
        }
    }
})
```
HTML과 CSS로 애니매이션 스타일을 적용시긴 후 스크립트에서는 스크롤시 클래스를 추가하는식으로 작업해준다.