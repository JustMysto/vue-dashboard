<template>
    <div class="transaction">
        <div class="person">
            <img v-bind:src="getImgUrl(person.icon)" alt="person">
            <div class="person-info">
                <h2 class="person-name">{{ person.name }}</h2>
                <h4 class="person-nick">Lima</h4>
            </div>
        </div>
        <div class="transaction-info">
            <h2 class="transaction-info-heading">{{ projects }}</h2>
            <h4 class="transaction-info-text">Projects</h4>
        </div>
        <div class="transaction-info">
            <h2 class="transaction-info-heading">{{ finished }}</h2>
            <h4 class="transaction-info-text">Finished Projects</h4>
        </div>
        <div class="transaction-info">
            <h2 class="transaction-info-heading purple">$ {{ profit }}</h2>
            <h4 class="transaction-info-text">Total Profit</h4>
        </div>
        <div class="transaction-info">
            <h2 class="transaction-info-heading">{{ followers }}</h2>
            <h4 class="transaction-info-text">Followers</h4>
        </div>
        <img class="arrow" src="../assets/icons/Right.svg" alt="arrow">
    </div>
</template>

<script>

export default {
    props: [
        'person',
        'projects',
        'finished',
        'profit',
        'followers'
    ],
    methods: {
        getImgUrl(pic) {
            return require('../assets/icons/Elements/User/'+pic)
        }
    }
}

</script>

<style scoped>
.transaction {
    grid-column: span 9;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 0.2fr;
    cursor: pointer;
    box-shadow: 0px 5px 15px -15px black;
    animation: fadeIn .2s ease-out;
    transition: background-color .2s;
}

.transaction:hover {
    background-color: #F8F8F8;
}

.person {
    display: flex;
    align-items: center;
    grid-column: 1;
}

.person-info {
    margin: 0 0 0 1.5rem;
}

.transaction-info-text {
    color: rgba(0, 0, 0, .4);
}

.person-nick {
    color: rgba(0, 0, 0, .4);
}

.purple {
    color: var(--purple);
}
</style>