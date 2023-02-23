<template>
  <div class="text-2xl p-4">
    You are connecting from
    <strong class="underline decoration-indigo-500">{{ city }}</strong> in
    <strong class="underline decoration-indigo-500">{{ country }}</strong
    >.
  </div>
  <div class="pt-2 pb-4">
    <country-flag :country="countryCode" size="big" />
  </div>
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
