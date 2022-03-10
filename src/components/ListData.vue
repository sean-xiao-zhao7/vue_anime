<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" ref="newUserRef" />
  </div>
  <div>
    <button @click="addUser">Add user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['User1', 'User2', 'User3'],
    };
  },
  methods: {
    addUser() {
      const newUser = this.$refs.newUserRef.value;
      this.users.unshift(newUser);
    },
    removeUser(user) {
      this.users = this.users.filter((u) => u !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  background-color: whitesmoke;
  padding: 1rem 2rem;
  text-align: center;
  margin-bottom: 1rem;
}

input {
  border: 2px solid #ccc;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem 2rem;
  text-align: center;
  border-radius: 5px;
  color: #db0054;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.user-list-enter-active {
  transition: all 0.3s ease;
}
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.user-list-leave-active {
  transition: all 0.2s ease;
  position: absolute;
}
.user-list-move {
  transition: transform 0.3s ease;
}
</style>
