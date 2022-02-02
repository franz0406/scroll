document.addEventListener("DOMContentLoaded", function(){
                            
    const trigger = new ScrollTrigger.default({
        trigger: {
            once: true,
            offset: {
                viewport: {
                    x: 0,
                    y: 0.2
                },
            },
            toggle: {
                class: {
                    in:"animate-in",
                    out: 'animate-out'
                }
            }
        }
    });
    trigger.add('[data-trigger]');

})