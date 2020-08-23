<template>
  <div>
    <h2>{{settleName}}</h2>
    <div v-if="pays">
      <div
        v-for="(payment, paymentIndex) in settlePayments.pays"
        :key="paymentIndex"
      >
        <span v-if="payment.amount != 0">zahlt {{payment.amount}} EUR an {{payment.name}}</span>
      </div>
    </div>
    <div v-if="receives">
      <div
        v-for="(receivement, receivementIndex) in settlePayments.receives"
        :key="receivementIndex"
      >
        <span v-if="receivement.amount != 0">bekommt {{receivement.amount}} EUR von {{receivement.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    settleName: String,
    settlePayments: Object,
  },
  computed: {
    pays: function () {
      return Object.keys(this.settlePayments).includes('pays');
    },
    receives: function () {
      return Object.keys(this.settlePayments).includes('receives');
    },
  },
};
</script>

<style>
</style>