<template>
    <img alt="Vue logo" src="./assets/logo.png">
    
    <div v-if="transactions.length">
        <div v-for="transaction in transactions" :key="transaction.id">
            <transaction :person="transaction.person" :projects="transaction.projects" :finished="transaction.finished" :profit="transaction.profit" :followers="transaction.followers"/>
        </div>
    </div>

    <div v-else>
        <loader/>
    </div>
</template>

<script>

import loader from './components/loader.vue';
import transaction from './components/transaction.vue';

export default {
    name: 'App',
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
        fetch('http://localhost:3000/transactions')
            .then(res => res.json())
            .then(data => this.transactions = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>
