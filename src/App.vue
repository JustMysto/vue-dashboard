<template>
    <sidebar/>
    <section class="dashboard row">
        <card/>
        <template v-if="transactions.length">
            <template v-for="transaction in transactions" :key="transaction.id">
                <transaction v-on:click="getTransactionDetails(transaction.id)" :person="transaction.person" :projects="transaction.projects" :finished="transaction.finished" :profit="transaction.profit" :followers="transaction.followers"/>
            </template>
        </template>
        <div v-else>
            <loader/>
        </div>
    </section>
</template>
    
<script>

import loader from './components/loader.vue';
import transaction from './components/transaction.vue';
import sidebar from './components/sidebar.vue';
import card from './components/card.vue';

export default {
    name: 'App',
    data() {
        return {
            transactions: []
        }
    },
    components: {
        loader,
        transaction,
        sidebar,
        card
    },
    methods: {
        async getTransactionDetails(transactionId) {
            if (!transactionId) return;
            await fetch("localhost/transactions/" + transactionId)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err.message))
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

.dashboard {
    width: 100%;
    margin: 5rem 10rem 5rem 10rem;
}

</style>
