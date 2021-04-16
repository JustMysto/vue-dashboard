<template>
    <div class="transactionContainer">
        <div class="filterBar">
            <input type="text" id="search" placeholder="search by name">
        </div>
        <template v-if="transactions.length">
            <template v-for="transaction in transactions" :key="transaction.id">
                <transaction v-on:click="getTransactionDetails(transaction.id)" :person="transaction.person" :projects="transaction.projects" :finished="transaction.finished" :profit="transaction.profit" :followers="transaction.followers"/>
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

    data() {
        return {
            transactions: []
        }
    },
    components: {
        loader,
        transaction
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
    }

    .filterBar {
        padding: 2rem 5rem 2rem 5rem;
        background-color: white;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        border-bottom: 5px solid var(--purple);
    }

    #search {
        padding: 1.2rem;
        font-size: 1.2rem;
    }
</style>