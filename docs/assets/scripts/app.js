new Vue({
    el: '#app',
    data: {
        content: [],
    },
    methods: {
        getContent: function() {
            axios.get('content/content.json').then(response => {
                this.content = response.data
            });
        }
    },
    created: function() {
        this.getContent();
    }
});