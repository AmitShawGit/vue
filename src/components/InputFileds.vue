<template>
    <p>This is Input</p>
    <input type="text" v-model="name">
    <br />
    <input type="text" v-model="classes">

    <h5>Checkbox and Radio</h5>
    <label for="check">Checkbox1</label>
    <input type="checkbox" name="" id="check" value="checkbox1" v-model="Checkboxes">
    <label for="php">Checkbox2</label>
    <input type="checkbox" name="" id="php" value="php" v-model="Checkboxes">
    <label for="vue">Checkbox3</label>
    <input type="checkbox" name="" id="vue" value="vue" v-model="Checkboxes">
    <p>Selected Technology {{ Checkboxes}}</p>
    <br />
    <label for="male">Male</label>
    <input type="radio" value="male" id="male" name="gender" v-model="Gender">
    <label for="female">Female</label>
    <input type="radio" value="female" id="female" name="gender" v-model="Gender">
    <label for="others">Others</label>
    <input type="radio" value="others" id="others" name="gender" v-model="Gender">
    <p>The Gender is {{ Gender }}</p>
    <br />
    <button type="submit" v-on:click="getData()">Submit</button>
</template>
<script>
export default {
    name: "InputField",
    data() {
        return {
            name : "",
            classes : "",
            Checkboxes : [],
            Gender : null,
        }
    },
    methods: {
        getData() {
            console.log(this.name,this.classes);
        }
    },
}
</script>
