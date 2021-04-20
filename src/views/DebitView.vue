<template>
  <sidebar/>
  <section class="dashboard row">
    <card/>
    <transaction-container/>
  </section>
</template>

<script>
import sidebar from "@/components/sidebar";
import card from "@/components/card";
import transactionContainer from "@/components/transactionContainer";
export default {
  name: "DebitView",
  data() {
    return {
      transactions: []
    }
  },
  components: {
    sidebar,
    card,
    transactionContainer
  },
  methods: {
    async getTransactionDetails(transactionId) {
      if (!transactionId) return;
      await fetch("localhost/transactions/" + transactionId)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err.message))
    }
  }
}
</script>

<style scoped>
.dashboard {
  width: 100%;
  margin: 5rem 10rem 5rem 10rem;
}
</style>
