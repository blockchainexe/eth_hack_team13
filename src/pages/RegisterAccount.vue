<template>
  <div class="container">
    <h2>Register Your Account</h2>
    <div class="tag">Name</div>
    <input v-model="user.name" type="text" class="user-input">
    <div class="tag">Gender</div>
    <input v-model="user.gender" type="text" class="user-input">
    <div class="tag">Birthday</div>
    <div class="birthday">
      <select v-model.number="user.birthday.day">
        <option disabled value="0">Day</option>
        <option v-for="i in 31" :value="i" :key="i">{{ i }}</option>
      </select>
      <select v-model.number="user.birthday.month">
        <option disabled value="0">Month</option>
        <option v-for="i in 12" :value="i" :key="i">{{ i }}</option>
      </select>
      <select v-model.number="user.birthday.year">
        <option disabled value="0">Year</option>
        <option v-for="i in birthYears" :value="i" :key="i">{{ i }}</option>
      </select>
    </div>
    <div class="tag">Introduce yourself! (50 char max)</div>
    <textarea v-model.number="user.profile" type="text" class="user-input"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isForeigner: true,
      user: {
        name: '',
        gender: '',
        birthday: {
          day: 0, month: 0, year: 0
        },
        profile: ''
      }
    };
  },
  computed: {
    birthYears () {
      const years = [];
      const year = (new Date()).getFullYear();
      for (let i = year - 100; i <= year - 18; ++i) {
        years.push(i);
      }
      return years;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    & .tag {
        width: 250px;
    }
    & .user-input {
        appearance: none;
        border: lightgrey 1px solid;
        width: 250px;
        margin: 10px;
    }
    & .birthday {
        width: 250px;
        margin: 10px;
    }
}
</style>
