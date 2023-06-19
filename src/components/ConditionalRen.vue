<template>
    <h1 v-if="show">Conditional Rendering</h1>
    <h1 v-else>Conditional False Rendering</h1>
    <button v-on:click="show=!show">Show</button>
</template>
<script>
export default{
    name: "ConditonalRen",
    data(){
        return{
            show:false,
        }
    },
    
    }

</script>