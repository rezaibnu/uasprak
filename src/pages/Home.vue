
import WeatherWidget from '../components/WeatherWidget.vue';
<template>
    <div class="q-pa-md">
        <WeatherWidget />
    </div>
  </template>

<script>
import WeatherWidget from '../components/WeatherWidget.vue';

export default {
  name: 'Home',
  components: {
    WeatherWidget
  }
};
</script>
  