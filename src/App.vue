<template>
  <div class="h-100 mockup-window border bg-base-300" v-if="!error">
    <div class="flex justify-center items-center px-4 py-6 bg-base-200">
      <div class="flex flex-col w-full" v-if="weather">
        <div class="text-2xl font-bold pb-4">
          Hi
          <span class="underline decoration-indigo-500"
            >{{ weather.xrealip }} !</span
          >
        </div>
        <div class="grid h-fit card bg-base-300 rounded-box place-items-center">
          <GeoLocation
            :country="weather.countryName"
            :city="weather.city"
            :timezone="weather.timezone"
            :localtime="weather.localtime"
            :countryCode="weather.countryCode"
          ></GeoLocation>
        </div>
        <div class="divider"></div>
        <div class="text-2xl font-bold">Current Weather</div>
        <div class="grid h-fit card bg-base-300 rounded-box place-items-center">
          <CurrentWeather
            :temp_c="weather.temp_c"
            :temp_f="weather.temp_f"
            :condition-text="weather.condition.text"
            :condition-icon="weather.condition.icon"
            :wind_mph="weather.wind_mph"
            :wind_kph="weather.wind_kph"
          ></CurrentWeather>
        </div>
      </div>
      <div class="flex flex-col w-full" v-else>
        <div>
          <font-awesome-icon
            icon="fa-solid fa-spinner"
            class="flex fa-3x fa-pulse text-indigo-500"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="alert alert-error shadow-lg w-fit" v-else>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current flex-shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{{ error }}</span>
    </div>
  </div>
</template>

<script>
import GeoLocation from "@/components/GeoLocation.vue";
import CurrentWeather from "@/components/CurrentWeather.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    GeoLocation,
    CurrentWeather,
  },
  data() {
    return {
      weather: null,
      error: null,
    };
  },
  async created() {
    try {
      const resp = await axios.get(import.meta.env.VITE_API_URL);
      if (resp.data.success) {
        this.weather = resp.data.message;
      }
    } catch (error) {
      console.log(error);
      this.error = error.response.data.message;
    }
  },
};
</script>
