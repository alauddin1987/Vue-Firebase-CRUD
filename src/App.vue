<template>
  <div id="app">
    <div>
      <label>Name</label>
      <input type="text" v-model="name"/>
      <button @click="submitName()">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="person in names" v-bind:key="person['.key']">
          <div v-if="!person.edit">
            <p>{{ person.name }}</p>
            <button @click="removePerson(person['.key'])">Remove</button>
            <button @click="setEdit(person['.key'])">Edit</button>
          </div>
          <div v-else>
            <input type="text" v-model="person.name"/>
            <button @click="saveEdit(person)">Save</button>
            <button @click="cancelEdit(person['.key'])">Cancel</button>
          </div>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import  {namesRef} from './firebase';
export default {
  data () {
    return {
      name : ''
    }
  },
  firebase : {
    names : namesRef
  },
  methods : {
    submitName() {
      namesRef.push({ name : this.name, edit : false}) ;
      this.name = '';
    },
    removePerson(key) {
      namesRef.child(key).remove();
    },
    setEdit(key) {
      namesRef.child(key).update({edit : true});
    },
    saveEdit(person) {
      const key = person['.key'];
      namesRef.child(key).set({name : person.name, edit : false});
    },
    cancelEdit(key) {
      namesRef.child(key).update({edit : false});
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  background-color:transparent;
  border:2px solid block;
}
</style>
