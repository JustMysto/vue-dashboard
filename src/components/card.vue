<template>
  <div class="creditcard bg-purple">
    <div class="creditcard-header">
      <h2 class="bank-name">Musterbank</h2>
      <img class="wifi" src="./../assets/icons/On.svg" alt="wifi">
    </div>
    <div class="creditcard-details">
      <h4 class="card-owner">Henry Richardson</h4>
      <h2 class="card-number">3460 **** **** 8710</h2>
    </div>
    <div class="creditcard-footer">
      <h3 class="card-exp-date">04 / 23</h3>
      <img src="./../assets/icons/mastercard.svg" alt="mastercard-logo">
    </div>
  </div>
  <div class="creditcard bg-red">
    <div class="creditcard-header">
      <h2 class="bank-name">Musterbank</h2>
      <img class="wifi" src="./../assets/icons/On.svg" alt="wifi">
    </div>
    <div class="creditcard-details">
      <h4 class="card-owner">Henry Richardson</h4>
      <h2 class="card-number">3460 **** **** 8710</h2>
    </div>
    <div class="creditcard-footer">
      <h3 class="card-exp-date">04 / 23</h3>
      <img src="./../assets/icons/mastercard.svg" alt="mastercard-logo">
    </div>
  </div>
  <div class="creditcard bg-green">
    <div class="creditcard-header">
      <h2 class="bank-name">Musterbank</h2>
      <img class="wifi" src="./../assets/icons/On.svg" alt="wifi">
    </div>
    <div class="creditcard-details">
      <h4 class="card-owner">Henry Richardson</h4>
      <h2 class="card-number">3460 **** **** 8710</h2>
    </div>
    <div class="creditcard-footer">
      <h3 class="card-exp-date">04 / 23</h3>
      <img src="./../assets/icons/mastercard.svg" alt="mastercard-logo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
}
</script>

<style>
.card {
  grid-column: span 3;
}

.creditcard {
  padding: 2rem;
  border-radius: 1rem;
  grid-column: span 3;
  cursor: pointer;
  box-shadow: 0px 15px 25px -25px black;
}

.creditcard-header {
  display: flex;
  justify-content: space-between;
}

.bank-name {
  color: white;
}

.creditcard-details {
  display: flex;
  flex-direction: column;
  margin: 7rem 0 4rem 0;
}

.card-owner {
  color: white;
}

.card-number {
  color: white;
}

.creditcard-footer {
  display: flex;
  justify-content: space-between;
}

.card-exp-date {
  color: white;
}
</style>
