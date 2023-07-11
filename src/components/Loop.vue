<template>
<ul>

   <span v-if="show"><li v-for="item in users" :key="item.id">
    {{ item }}
    </li></span> 
    <span v-else>Nothing to show</span>
    <button v-on:click="show = !show">Toggle</button>
</ul>
</template>
<script>
export default{
    name :"ForLoop",
    data(){
        return{
            show:false,
            users: [
                {
                id:10 ,
                Name:"Bertha",
                email: "uso@il.pg",
            },
                {
                id:8 ,
                Name:"Harriet",
                email: "rubomke@fimsi.af",
            },
                {
                id:9 ,
                Name:"Landon",
                email: "ojucabov@boovo.pr",
            },
                {
                id:6 ,
                Name:"Jonathan",
                email: "ilom@di.tk",
            },
        ],
        
        }
    }
}
</script>