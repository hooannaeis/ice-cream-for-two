<template>
  <div>
    <div v-if="isInAddMode">
      <h2>neue Ausgabe hinzufügen</h2>
      <div class="np-form-group">
        <label v-if="error.name" for="addName" class="np-form-element error">{{ error.name }}</label>
        <label v-else class="np-form-element" for="addName">Name</label>
        <input class="np-form-element" type="text" id="addName" v-model="expenseToAdd.name" />
      </div>
      <div class="np-form-group">
        <label
          v-if="error.subject"
          for="addSubject"
          class="np-form-element error"
        >{{ error.subject }}</label>
        <label v-else class="np-form-element" for="addSubject">Beschreibung</label>
        <input class="np-form-element" type="text" id="addSubject" v-model="expenseToAdd.subject" />
      </div>
      <div class="np-form-group">
        <label v-if="error.amount" for="addAmount" class="np-form-element error">{{ error.amount }}</label>
        <label v-else class="np-form-element" for="addAmount">Betrag</label>
        <input class="np-form-element" type="number" min="0" id="addAmount" v-model="expenseToAdd.amount" />
      </div>
      <div class="error" v-if="error.general">{{error.general}}</div>
      <Button isWarning="true" @click.native="toggleAddMode">verwerfen</Button>
      <Button @click.native="addExpense" isPrimary="true">speichern</Button>
    </div>
    <div v-else>
      <Button isFullWidth="true" @click.native="toggleAddMode">neue Ausgabe eintragen</Button>
    </div>
  </div>
</template>

<script>
import { db } from '../main';
import Button from '../components/Button';

export default {
  data() {
    return {
      isInAddMode: false,
      expenseToAdd: {
        name: null,
        subject: null,
        amount: null,
      },
      error: {
        name: null,
        subject: null,
        amount: null,
        general: null,
      },
    };
  },
  components: {
    Button,
  },
  methods: {
    toggleAddMode() {
      if (this.isInAddMode) {
        this.discardExpense();
      }
      this.isInAddMode = !this.isInAddMode;
    },
    discardExpense() {
      this.error.name = null;
      this.error.subject = null;
      this.error.amount = null;
      this.error.general = null;

      this.expenseToAdd.name = null;
      this.expenseToAdd.subject = null;
      this.expenseToAdd.amount = null;
    },
    addExpense() {
      let isValidInput = true;
      if (!this.expenseToAdd.name) {
        this.error.name = 'Bitte gibt deinen Namen ein';
        isValidInput = false;
      }
      if (!this.expenseToAdd.subject) {
        this.error.subject = 'Bitte beschreibe deine Ausgabe';
        isValidInput = false;
      }
      if (!this.expenseToAdd.amount || this.expenseToAdd.amount === 0) {
        this.error.amount = 'Bitte trage die Höhe deiner Ausgabe ein';
        isValidInput = false;
      }
      if (!isValidInput) {
        return;
      }

      const newExpense = {
        ...this.expenseToAdd,
        date: new Date().getTime(),
      };
      console.log(`expense to add: ${newExpense}`);

      db.doc(this.$route.path)
        .collection('expenses')
        .add(newExpense)
        .then((doc) => {
          console.log(doc);
          this.toggleAddMode();
        })
        .catch((err) => {
          this.error.general = err;
          return;
        });
    },
  },
};
</script>

<style>
.np-form-group {
  padding: 0.4rem 1rem;
  display: flex;
  flex-direction: column;
}

.np-form-element {
  padding: 0.6rem 0.5rem;
}
</style>