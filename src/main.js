import { createApp } from "vue";
import App from "./App.vue";
import CountryFlag from "vue-country-flag-next";

import "./assets/style.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(faSpinner);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
