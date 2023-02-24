<template>
  <div class="text-2xl pt-4 pb-2 px-4">
    You are connecting from
    <strong class="underline decoration-indigo-500">{{ city }}</strong> in
    <strong class="underline decoration-indigo-500">{{ country }}</strong
    >.
  </div>
  <div class="p-2">
    <country-flag :country="countryCode" size="big" />
  </div>
  <div class="pb-4 font-mono">Current Time: {{ localtime }} {{ timezone }}</div>
</template>

<script>
import CountryFlag from "vue-country-flag-next";
export default {
  name: "GeoLocation.vue",
  components: {
    CountryFlag,
  },
  props: {
    country: { type: String, required: true },
    city: { type: String, required: true },
    timezone: { type: String, required: true },
    localtime: { type: String, required: true },
    countryCode: { type: String, required: true },
  },
};
</script>

<style scoped></style>
