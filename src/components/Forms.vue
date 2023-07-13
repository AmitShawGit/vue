<template>
    <form>
        <label for="">Name</label>
        <input type="text" name="" id="" v-model="formStore.name"><br />
        <label for="">DOB</label>
        <input type="date" name="" id="" v-model="formStore.dob"><br />
        <label for="">Nickname</label>
        <input type="text" name="" id="" v-model="formStore.nickname"><br />
        <label for="">Country</label>
        
  <select name="" id="" v-model="formStore.country">
    <option v-for="item in countries" :key="item" v-bind:value="item">{{ item }}</option>
  </select>


        <br />
        <label for="">Gender</label>
        <input type="checkbox" value="male" v-model="formStore.gender">Male
        <input type="checkbox" value="female" v-model="formStore.gender">Female<br />
        <label for="">Password</label>
        <input type="text" name="" id="" v-model="formStore.password"><br />
        <button type="button"  v-on:click="submitData()">Submit</button>
    </form>
</template>
<script>
export default{
    name : "FormSet",
    data(){
        return{
            formStore :{
                name:"",
                dob: "",
                nickname : "",
                password : "",
                country : "",
                gender : [],

            },
            countries : ["Japan","Singapore","Australia","India"]
        }
    },
    methods:{
        submitData(){
            console.log(this.formStore);
        }
    }
}
</script>