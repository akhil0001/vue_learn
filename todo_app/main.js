Vue.component('date-element',{
    data:function(){
        return {

        }
    },
    template:`
    <div class="date-of-app">
        <strong>{{dateapp.day}}</strong>
        <p>{{dateapp.date}}</p>
        <p>{{dateapp.seconds}}</p>
    </div>
    `,
    props:['dateapp']
});

Vue.component('todo-item',{
    template:`
    <div v-if="todotask.checked">
    <p>{{todotask.desc}}</p>
    <input type="checkbox"
    @click="$emit('check-the-box')">
    </div>`,
    props:['todotask']
});

var vm = new Vue({
    el:'#app',
    data:{
        duplicateDate:{},
        seconds:0,
        tasks:[
            {desc:'Hi',checked:true},
            {desc:'Hello',checked:false}
        ]
    },
    methods:{
        
    },
    computed:
    {duplicateDateComputed: function()
    {
        var date = new Date();
        var days =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.duplicateDate.day = days[date.getDay()];
        this.duplicateDate['date'] = date.getDate();
        this.duplicateDate['year'] = date.getFullYear();
        
        this.seconds = date.getSeconds();
        this.duplicateDate['seconds'] = this.seconds;
        return this.duplicateDate;
    }
}
})