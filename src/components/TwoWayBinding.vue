<template>
    <p>Binding {{ count }}</p>
    <input type="text" v-model="count">
</template>

<script>
export default{
    name: "TwoWayBinding",
    data(){
        return{
            count : 222
        }
    }
}
</script>