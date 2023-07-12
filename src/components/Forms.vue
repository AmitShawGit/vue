<template>
    <form>
        <label for="">Name</label>
        <input type="text" name="" id="" v-model="formStore.name"><br />
        <label for="">DOB</label>
        <input type="date" name="" id="" v-model="formStore.dob"><br />
        <label for="">Nickname</label>
        <input type="text" name="" id="" v-model="formStore.nickname"><br />
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

            }
        }
    },
    methods:{
        submitData(){
            console.log(this.formStore);
        }
    }
}
</script>