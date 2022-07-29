<template>
  <h2>Set a new size:</h2>
  <router-link :to="{ name: 'EventList', query: { element: +1 } }"
    >Size up</router-link
  >
</template>
