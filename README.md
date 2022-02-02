https://franz0406.github.io/scroll/
---
---
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
---
---


## Waypoints JS 

### Waypoints 를 사용하여 특정 요소의 위치에서 상단까지 떨어진 값을 쉽게 가져올수 있다.

```javascript
const 엘리먼트 = document.querySelector('엘리먼트');

const 변수명 = new Waypoint({
  element: 엘리먼트,
  handler: function() {
    offset 값 위치에 스크롤이 도달하면 할일;
  },
  offset: '원하는 값 0~100%'
});
```
---
---
## ScrollTrigger JS

### 더욱 간편한 스크롤 애니매이션 
코드는 더 짧게!! 요소 하나하나 변수로 지정할 필요도 없다.  
대신 모든 효과는 HTML과 CSS에서 미리 적용.

##### STEP 1.
```javascript
<script src="ScrollTrigger.min.js"></script>
```
https://github.com/terwanerik/ScrollTrigger  


`ScrollTrigger.min.js` 파일다운 후 로드

##### STEP 2.
```html

<div class="" data-trigger>content</div>

```
원하는 요소에 속성 값으로 `data-trigger` 추가.
##### STEP 3.
```javascript                           
const 변수명 = new ScrollTrigger.default({
    trigger: {
        once: true,         // 스크롤 한번만 적용
        offset: {
            viewport: {
                x: 0,
                y: 0.2      // 뷰포트 대비 20%
            },
        },
        toggle: {           // 사용자가 원하는 클래스 값
            class: {
                in:"animate-in",
                out: 'animate-out'
            }
        }
    }
});
trigger.add('[data-trigger]');
```
이제 CSS로 스크롤트리거로 추가된 클래스의 애니매이션 효과를 넣어주면 된다. 

