<template>
    <h3>Sign Up</h3>
    <label for="">Name</label>
    <input type="text" name="" id="1" v-model="name">
    <br />
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
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        async signup() {
            let result = await axios.post("http://localhost:3000/user", {
                name: this.name,
                email: this.email,
                password: this.password,
            });
            console.log(result);
            localStorage.setItem("user-info", JSON.stringify(result.data))
            this.$router.push({ name: "login" })

        }
    }
}
</script>