<template>
  <div class="transactionContainer">
    <div class="filterBar">
      <input v-on:keyup="search()" type="text" id="search" placeholder="search by name">
      <p>{{transactions.length}} Results found</p>
    </div>

    <template v-if="transactions.length">
      <template v-for="transaction in transactions" :key="transaction.id">
        <transaction v-on:click="getTransactionDetails(transaction.id)" :person="transaction.person"
                     :projects="transaction.projects" :finished="transaction.finished" :profit="transaction.profit"
                     :followers="transaction.followers"/>
      </template>
    </template>
    <div v-else>
      <loader/>
    </div>
  </div>
</template>

<script>

import loader from './loader.vue';
import transaction from './transaction.vue';

export default {
  name: 'transactionContainer',
  data() {
    return {
      transactions: []
    }
  },
  components: {
    loader,
    transaction
  },
  methods: {
    search() {
      const searchVal = document.getElementById('search').value.toLowerCase();
      if (searchVal == "") return;

      const filteredTransactions = this.transactions.filter(transaction => {
        return transaction.person.name.toLowerCase().includes(searchVal)
      })

      if (filteredTransactions.length)
        console.log(filteredTransactions)
    }
  },
  mounted() {
    fetch('http://localhost:3000/transactions/')
      .then(res => res.json())
      .then(data => this.transactions = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
.transactionContainer {
  grid-column: span 9;
  border-radius: 2rem;
  background-color: white;
  padding-bottom: 2rem;
}

.filterBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem 2rem 5rem;
  border-bottom: 5px solid var(--purple);
}

#search {
  padding: 1.2rem 1.2rem 1.2rem 4rem;
  font-size: 1.6rem;
  border-radius: 5rem;
  border: 2px solid #d4d4d4;
}
</style>
