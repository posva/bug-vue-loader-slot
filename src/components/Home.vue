<template>
  <div>
    Home
    <router-link to="/">
      <SomeComponent class="green" />
      <div class="green">Hello</div>
    </router-link>
    <SomeComponent class="green" />
    <SlotComponent>
      <SomeComponent class="green" />
      <div class="green">Hello</div>
    </SlotComponent>
  </div>
</template>

<script>
import SomeComponent from './SomeComponent.vue'
import SlotComponent from './SlotComponent.vue'

export default {
  components: { SomeComponent, SlotComponent },
}
</script>

<style scoped>
.green {
  color: green;
}
</style>
