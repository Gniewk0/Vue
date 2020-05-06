window.Event = new class{
    constructor(){
        this.vue = new Vue();
    }

    fire(event, data = null){
        this.vue.$emit(event, data);
    }

    listen(event, callback){
        this.vue.$on(event, callback);
    }
}

Vue.component('coupon', {
    template: '<input placeholder="enter your coupon code" @blur="onCouponAplied">',

    methods: {
        onCouponAplied(){
            Event.fire('applied');
        }
    }
});


new Vue({
    el: '#root',

    data: {
        couponAplied: false
    },

    created(){
        Event.listen('applied', () => alert('Handling it!'))
    }
});