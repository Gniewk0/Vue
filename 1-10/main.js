Vue.component('message',{

    props: ['title', 'body'],

    data(){
        return {
            isVisible: true
        }
    },

    template: `
    
    <article class="message" v-show="isVisible">
        <div class="message-header">
            {{ title }}

            <button type="button" class="close" @click="isVisible = false">X<?button>
        </div>
        <div class="message-body">
            {{body}}
        </div>
    </article>

    `,

    methods: {
        hideModel(){
            this.isVisible = false;
        }
    }

});
//###################### vue 2.0 ----- 10 lekcja
Vue.component('modal',{
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>              
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
    `,
});

new Vue({
    el: '#root',

    data: {
        showModal: false
    }

});