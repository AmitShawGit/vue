<template>
    <h1>Binding {{ count }}</h1>
    <input type="text" v-model="count">
</template>
<script>
export default {
    name : 'TwoWayBinding',
    data(){
        return{
            count : 10,
        }
    }
}
</script>