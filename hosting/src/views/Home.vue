<template>
  <div>
    <h1>Ice cream for two</h1>
    <section class="divider--top">
      <h2>Neue Liste Erstellen</h2>
      <div v-if="error" class="error">{{error}}</div>
      <input type="text" id="newListName" v-model="newListName" placeholder="Neue Liste erstellen" />
      <Button @click.native="createList" buttonText="+"></Button>
    </section>
    <section class="divider--top">
      <h2>Meine Listen</h2>
      <div v-if="myLists.length > 0">
        <div v-for="(listName, listIndex) in myLists" :key="listIndex">
          <ListLink :listPath="listName" />
        </div>
      </div>
      <div v-else>Du hast noch keine Listen erstellt.</div>
    </section>
  </div>
</template>

<script>
import { db } from '../main';
import { firebase } from '@firebase/app';
import ListLink from '../components/ListLink';
import Button from '../components/Button';

export default {
  name: 'Home',
  data() {
    return {
      error: null,
      newListName: undefined,
    };
  },
  components: {
    ListLink,
    Button
  },
  computed: {
    myLists() {
      const myLists = localStorage.getItem('myLists');
      if (myLists) {
        return myLists.split(',');
      }
      return [];
    },
  },
  methods: {
    getFormattedDate(seconds) {
      const milSecs = seconds * 1000;
      return `${new Date(milSecs).getDate()}.${
        new Date(milSecs).getMonth() + 1
      }.${new Date(milSecs).getFullYear()}`;
    },
    createList() {
      if (!this.newListName) {
        this.error = 'Bitte Listennamen angeben';
        return;
      }
      db.collection('expense-lists')
        .add({
          name: this.newListName,
          settled: false,
        })
        .then((doc) => {
          console.log(doc);
          this.newListName = null;
          const prevLists = localStorage.getItem('myLists');
          if (prevLists) {
            const newLists = [prevLists, doc.path].join(',');
            localStorage.setItem('myLists', newLists);
          } else {
            localStorage.setItem('myLists', doc.path);
          }
        })
        .catch((err) => {
          this.error = err;
          return;
        });
    },
  },
  created() {
    const myLists = localStorage.getItem('myLists');
    if (myLists) {
      this.myLists = myLists;
    }
  },
  firestore() {
    return {
      unsettleLists: db.collection('expense-lists'),
    };
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Roboto&display=swap');
body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.7;
  color: #2e2d2d;
  background: linear-gradient(145deg, #b0b0b0, #d2d2d2);
}

h1 {
  font-family: 'Parisienne', cursive;
  color: #2e2d2d;
  padding: 0.2rem;
}

.error {
  color: red;
}

input[type='text'] {
  border: none;
  border-bottom: 1px solid black;
  padding: 0.8rem;
  margin: 1rem 0px;
  background: transparent;
}

input[type='text']:focus {
  outline: none;
  border-bottom: 1px solid blue;
}

ul {
  text-align: left;
  padding: 0.5rem;
}
li {
  list-style: none;
  border-bottom: 1px dashed black;
  padding: 0.2rem 0;
}

.divider--top {
  margin-top: 1rem;
  padding: 1rem;
  border-top: 1px solid gba(231, 190, 126, 1);
}
</style>
