<template>
  <div v-if="event">
    <h1>{{ event.traveldate }}</h1>
    <p>{{ event.airlineID }} on {{ event.Destination }}, {{ event.Source }}</p>
  </div>
</template>

<script>
import EventService from '@/services/EventService'
export default {
  props: ['id'],
  data() {
    return {
      event: null
    }
  },
  created() {
    //fetch event (by id) and set local event data
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
