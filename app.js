const app = Vue.createApp({
  data() {
    return {
      name: "Lua",
      age: 28,
      imageUrl:
        "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2014/03/margarita_island_venezuela/14307332-1-eng-GB/Margarita_Island_Venezuela_pillars.jpg",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
