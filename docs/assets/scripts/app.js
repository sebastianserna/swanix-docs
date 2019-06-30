new Vue({
    el: '#app',
    created: function() {
        this.getRecords();
    },
    data: {
        records: [],
    },
    methods: {
        getRecords: function() {
            axios.get('content/data.json').then(response => {
                this.records = response.data
            });
        }
    }
});