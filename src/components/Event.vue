<template>
    <h1 v-on:mousemove="checkConsole()">Check Console {{ count }}</h1>
    <button v-on:click="test()">Click Me</button>
    <button v-on:dblclick="db('doubleClicked')">Double Click Me</button>
    <button v-on:click="getCount()">Click me to count</button>
</template>

<script>
export default{
    name: 'Event_Listener',
    data(){
        return{
            count : 0,
        }
    },
    methods:{
        test(){
            return alert("function called");
        },
        db(a){
            return alert(a)
        },
        checkConsole(){
            return console.log('mouse moved')
        },
        getCount(){
            return this.count = this.count+1
        }
    }
}
</script>