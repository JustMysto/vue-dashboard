<template>
    <sidebar/>
    
    <div v-if="transactions.length">
        <div v-for="transaction in transactions" :key="transaction.id">
            <transaction v-on:click="getTransactionDetails(transaction.id)" :person="transaction.person" :projects="transaction.projects" :finished="transaction.finished" :profit="transaction.profit" :followers="transaction.followers"/>
        </div>
    </div>
    <div v-else>
        <loader/>
    </div>
</template>

<script>

import loader from './components/loader.vue';
import transaction from './components/transaction.vue';
import sidebar from './components/sidebar.vue';

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
        sidebar
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

</style>
