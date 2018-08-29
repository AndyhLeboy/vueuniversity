let vm = new Vue({

    el: '#app',
    data: {
        message : 'Salut les gens',
        link: 'http://facebook.com',
        success: true,

        days : ['<div class="{{message}}"></div>']
    },
    methods: {
        addDay : function()
        {
            this.days.push('Latsinainy')
        },
        show : function ()
        {
            return this.days[0];
        }
    }

})