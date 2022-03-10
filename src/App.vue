<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <!-- <div class="container">
    <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: isAnimed }"></div>
    <button @click="animeBlock">Animate</button>
  </div>
  <div class="container">
    <transition @before-enter="beforeEnter">
      <p v-if="paraVisible">Show me</p>
    </transition>
    <button @click="togglePara">Toggle para</button>
  </div>
  <div class="container">
    <transition name="userButtons" mode="out-in">
      <button @click="showUsers" v-if="!usersShown">Show users</button>
      <button @click="hideUsers" v-else>Hide users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>

<script>
// import UsersList from './components/ListData.vue';

export default {
  // components: { UsersList },
  data() {
    return {
      dialogIsVisible: false,
      isAnimed: false,
      paraVisible: false,
      usersShown: false,
    };
  },
  methods: {
    animeBlock() {
      this.isAnimed = !this.isAnimed;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    togglePara() {
      this.paraVisible = !this.paraVisible;
    },
    showUsers() {
      this.usersShown = true;
    },
    hideUsers() {
      this.usersShown = false;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      let round = 1;
      const i = setInterval(() => {
        el.style.opacity = round * 0.1;
        round++;
        if (round > 10) {
          clearInterval(i);
          done();
        }
      }, 20);
    },
    afterEnter() {},
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
  background-color: rgb(247, 247, 247);
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #db0054;
  border-radius: 15px;
  background-color: #b90047;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 0.3s ease-out;
}
.container {
  background-color: white;
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid rgb(233, 233, 233);
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.2);
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
}
.route-enter-active,
.route-leave-active {
  transition: opacity 0.1s ease;
}
</style>
