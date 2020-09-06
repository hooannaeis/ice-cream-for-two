<template>
  <div>
    <h1>{{ listObject.name }}</h1>
    <section v-for="(settleParty, settlePartyIndex) in settledList" :key="settlePartyIndex">
      <SettlePerson :settleName="settlePartyIndex" :settlePayments="settleParty" :class="[isNetReceiver(settleParty) ? ['section--left', 'success'] : ['section--right', 'error']]"/>
    </section>
    <Button isLink="true">
      <router-link :to="'/expense-lists/' + $route.params.expenseListId">zur Ausgabenliste</router-link>
    </Button>
  </div>
</template>

<script>
import { db } from '../main';
import Button from '../components/Button';
import SettlePerson from '../components/SettlePerson';

export default {
  components: {
    Button,
    SettlePerson
  },
  computed: {
    currentListPath: function () {
      return `expense-lists/${this.$route.params.expenseListId}`;
    },
    settledList: function () {
      let settleObject = {};
      let listTotal = 0;
      let peopleCount = 0;

      this.subListObject.forEach((item) => {
        const amountNumber = Number(item.amount);
        listTotal += amountNumber;

        if (settleObject[item.name]) {
          settleObject[item.name].total += amountNumber;
        } else {
          settleObject[item.name] = {
            total: amountNumber,
          };
          peopleCount += 1;
        }
      });
      let listAverage = listTotal / peopleCount;
      console.log(`total: ${listTotal}; avg: ${listAverage}`);

      // set the initial balance to indicate if a person
      // is a payer or receiver
      Object.keys(settleObject).forEach((payingPerson) => {
        settleObject[payingPerson]['balance'] =
          settleObject[payingPerson].total - listAverage;
      });
      console.log('initial balances', JSON.parse(JSON.stringify(settleObject)));

      // iterate to find the required payments
      for (var i = 0; i < Object.keys(settleObject).length; i++) {
        let payingPerson = Object.keys(settleObject)[i];
        const isNotPayer = settleObject[payingPerson].balance > 0;
        if (isNotPayer) {
          console.log(`${payingPerson}: --> is not payer`);
          continue;
        }

        for (var n = 0; n < Object.keys(settleObject).length; n++) {
          let receivingPerson = Object.keys(settleObject)[n];
          let amountLeftToPay = Math.abs(settleObject[payingPerson].balance);
          let amountLeftToReceive = Math.abs(
            settleObject[receivingPerson].balance
          );

          if (amountLeftToPay.toFixed(2) == 0) {
            console.log(`${payingPerson}: is all settled`);
            continue;
          }

          if (payingPerson === receivingPerson) {
            console.log(
              `${payingPerson}: ${receivingPerson} --> no self-payments`
            );
            continue;
          }

          const isNotReceiver = settleObject[receivingPerson].balance < 0;
          if (isNotReceiver) {
            console.log(
              `${payingPerson}: ${receivingPerson} --> is not receiver`
            );
            continue;
          }
          console.log(`${payingPerson} --> ${receivingPerson}`);

          // check if we can settle it in one transaction
          if (amountLeftToPay <= amountLeftToReceive) {
            console.log(`${amountLeftToPay} --> ${amountLeftToReceive}`);

            // take care of the receiver
            settleObject[receivingPerson].balance -= amountLeftToPay;
            settleObject[receivingPerson]['receives'] =
              settleObject[receivingPerson]['receives'] || [];

            settleObject[receivingPerson].receives.push({
              amount: amountLeftToPay.toFixed(2),
              name: payingPerson,
            });

            // take care of the payer
            settleObject[payingPerson].balance += amountLeftToPay;
            settleObject[payingPerson]['pays'] =
              settleObject[payingPerson]['pays'] || [];

            settleObject[payingPerson].pays.push({
              amount: amountLeftToPay.toFixed(2),
              name: receivingPerson,
            });
          } else {
            // take care of the receiver
            settleObject[receivingPerson].balance -= amountLeftToReceive;
            settleObject[receivingPerson]['receives'] =
              settleObject[receivingPerson]['receives'] || [];

            settleObject[receivingPerson].receives.push({
              amount: amountLeftToReceive.toFixed(2),
              name: payingPerson,
            });

            // take care of the payer
            settleObject[payingPerson].balance += amountLeftToReceive;
            settleObject[payingPerson]['pays'] =
              settleObject[payingPerson]['pays'] || [];

            settleObject[payingPerson].pays.push({
              amount: amountLeftToReceive.toFixed(2),
              name: receivingPerson,
            });
          }
        }
      }

      return settleObject;
    },
  },
  methods: {
    isNetReceiver: function(settleParty) {
      const receives = settleParty.receives ? settleParty.receives.length : 0;
      const pays = settleParty.pays ? settleParty.pays.length : 0;
      console.log(receives, pays)
      return pays < receives
    }
  },
  firestore() {
    const listObject = db.doc(this.currentListPath);
    const subListObject = listObject.collection('expenses');

    this.loading = false;
    console.log(listObject);
    return {
      listObject,
      subListObject,
    };
  },
};
</script>

<style>
</style>