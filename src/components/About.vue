<template>
    <h4>About Component {{ "About".length }}</h4>
    <p>Interpolation {{10+10}}</p>
    <p>My email {{ email }}</p>
    <p>This is a function {{ getName() }}</p>
    <p>This is a function {{ paraFunc("Name via Parameter") }}</p>
    <p>this is full data {{ getData().email }}</p>
</template>

<script>
export default {
    name: 'About_page',
     data()
     {
        return {
            email:" new@gmail.com",

            getName:function(){
                return "Amit Shaw"
            },

            paraFunc:function(a){
                return a
            },

        }
     },
     methods : {
        getData(){
            return{
                name : 'Amit',
                email: this.email
            }
        },
     }
}
</script>