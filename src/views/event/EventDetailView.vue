<template>
  <h3>Travel Date: {{ event.travelDate }}</h3>
  <p>Destination: {{ event.Destination }}</p>
  <p>Location: {{ event.Source }}</p>
  <p>Pasenger id: {{ event.id }}, Air-line id: {{ event.airlineId }}</p>
  <p>first name: {{ event.first_name }}</p>
  <p>last_name: {{ event.last_name }}</p>
  <p>E-mail: {{ event.email }}</p>
  <button @click="edit">Edit here</button>
</template>
<script>
export default {
  props: ['event'],
  inject: ['GStore'],
  methods: {
    edit() {
      this.GStore.flashMessage = 'Data is updated'
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 5000)

      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
    }
  }
}
</script>
