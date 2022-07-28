<template>
  <div class="setamount">
    <h1>set new amount of card are shown in a page</h1>
    <form :to="{ name: 'EventList' }">
        <label for="amount">Set an new value</label><br>
        <input type="number">
    </form>
  </div>
</template>
<script>
export default {
  name: 'setAmont',
  props: {
    amount: {
      type: Number,
      required: true
    }
  },
  computed: {
    setAmount() {}
  }
}
</script>
