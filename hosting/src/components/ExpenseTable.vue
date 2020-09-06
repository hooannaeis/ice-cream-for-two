<template>
  <div>
    <table class="np-table" v-if="expenses.length > 0">
      <tr class="np-table-heading">
        <th>Name</th>
        <th>Beschreibung</th>
        <th>Betrag</th>
      </tr>
      <tr class="np-table-row" v-for="(expense, expenseIndex) in expenses" :key="expenseIndex">
        <td>{{expense.name}}</td>
        <td>{{expense.subject}}</td>
        <td>{{Number(expense.amount).toFixed(2)}}</td>
      </tr>
      <tr class="np-table-row" style="border-top:1px dashed black;">
        <td><strong>Gesamt</strong></td>
        <td></td>
        <td><strong>{{totalListSum}}</strong></td>
      </tr>
    </table>
    <div v-else>Du hast noch keine Ausgaben eingetragen</div>
  </div>
</template>

<script>
export default {
  props: {
    expenses: { type: Array, default: [] },
  },
  computed: {
    totalListSum: function () {
      let total = 0;
      this.expenses.forEach((expense) => {
        if (expense.amount) {
          total += Number(expense.amount);
        }
      });
      return total.toFixed(2);
    },
  },
};
</script>

<style>
.np-table {
  border-radius: 5px;
  padding: 0.4rem 1rem;
  width: 100%;
}
.np-table-heading {
  padding-top: 0.8rem;
  font-weight: bold;
  border-bottom: 1px solid rgba(40, 40, 40, 0.801);
}
.np-table-row {
  border-radius: 5px;
  padding: 0.4rem 1rem;
  border-top: 1px solid rgba(40, 40, 40, 0.801);
  height: 100%;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 1rem;
}
</style>