<template>
    <h3>Log In</h3>
    <label for="">Email</label>
    <input type="email" name="" id="2" v-model="email">
    <br />
    <label for="">Password</label>
    <input type="password" name="" id="3" v-model="password">
    <br />
    <button v-on:click="signup()">Sign In</button>
</template>
<script>
import axios from 'axios';
export default {
    name: 'signUp',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async signup() {
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
            console.log(result);
            if(result.status==200 && result.data.length > 0){
                localStorage.setItem("user-info", JSON.stringify(result.data))
            this.$router.push({ name: "home" })
            }
          else{
            alert("Something Went Wrong")
          }

        }
    }
}
</script>