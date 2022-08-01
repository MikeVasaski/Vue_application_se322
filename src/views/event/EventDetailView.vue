<template>
  <h3>Date: {{ event.traveldate }}</h3>
  <p>Location: {{ event.Destination }}, {{ event.Source }}</p>
</template>
<script>
export default {
  props: ['event']
}
</script>
