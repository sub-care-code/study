/**
 * time.htmlのjs
 */
let app = new Vue({
  el: "#app",
  data: {
    now: "00:00:00",
  },
  methods: {
    time: function (e) {
      var date = new Date();
      this.now =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    },
  },
});

/**
 * for.htmlのjs
 */

let app02 = new Vue({
  el: "#app02",
  data: {
    prefs: [
      { name: "北海道" },
      { name: "青森" },
      { name: "岩手" },
      { name: "宮城" },
      { name: "山形" },
      { name: "秋田" },
    ],
  },
  /**
   * animation.htmlのjs
   */
  methods: {
    shuffle: function () {
      this.prefs = _.shuffle(this.prefs);
    },
  },
});

/**
 * compornents.htmlのjs
 */
Vue.component("alert-box", {
  template: `
  <div class="alert" v-on:click="caution">
  <strong>ERROR!</strong>
  <slot></slot>
  </div>
  `,
  methods: {
    caution: function () {
      alert("クリックされました");
    },
  },
});

let app3 = new Vue({
  el: "#app03",
});
