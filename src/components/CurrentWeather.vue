<template>
  <div
    class="flex flex-row justify-between items-start rounded-box text-center w-50"
  >
    <div class="w-100 mx-4 py-4 hover:text-indigo-500">
      <div class="text-xl font-semibold underline decoration-indigo-500">
        Temperature
      </div>
      <div class="font-mono pt-4">{{ temp_c }}&#8451;</div>
      <div class="font-mono">{{ temp_f }}&#8457;</div>
    </div>
    <div class="w-100 mx-4 py-4 hover:text-indigo-500">
      <div class="text-xl font-semibold underline decoration-indigo-500">
        Condition
      </div>
      <div class="font-mono pt-4">{{ conditionText }}</div>
      <div class="flex items-center justify-center">
        <img :src="conditionIcon" :alt="conditionText" />
      </div>
    </div>
    <div class="w-100 mx-4 py-4 hover:text-indigo-500">
      <div class="text-xl font-semibold underline decoration-indigo-500">
        Wind
      </div>
      <div class="font-mono pt-4">{{ wind_kph }}Kmh</div>
      <div class="font-mono">{{ wind_mph }}Mph</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentWeather.vue",
  props: {
    temp_c: { type: Number, required: true },
    temp_f: { type: Number, required: true },
    conditionText: { type: String, required: true },
    conditionIcon: { type: String, required: true },
    wind_mph: { type: Number, required: true },
    wind_kph: { type: Number, required: true },
  },
};
</script>

<style scoped></style>
