<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <loader/>
    <transaction/>
</template>

<script>

import loader from './components/loader.vue';
import transaction from './components/transaction.vue';

export default {
    name: 'App',
    components: {
        loader,
        transaction
    }
}
</script>

<style>

</style>
