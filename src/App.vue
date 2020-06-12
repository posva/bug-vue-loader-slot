<template>
  <div>
    {{ $route.fullPath }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
