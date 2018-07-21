<template>
  <div class="container">
    <h2>Register Your Account</h2>
    <div class="tag">Name</div>
    <input v-model="user.name" type="text" class="user-input">
    <div class="tag">Gender</div>
    <select v-model.number="user.gender" class="gender">
      <option value="0">-</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
    </select>
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
    <textarea v-model.number="user.profile" type="text" class="user-input" maxlength="50"/>
    <div class="tag">Please select a topic of interest</div>
    <div>
      <label for="food"><input id="food" v-model="user.interest" type="radio" value="food"> Food</label>
      <label for="sport"><input id="sport" v-model="user.interest" type="radio" value="sport"> Sport</label>
      <label for="anime"><input id="anime" v-model="user.interest" type="radio" value="anime"> Anime</label>
    </div>
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
        profile: '',
        interest: ''
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
    & .gender {
      width: 250px;
    }
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
        & > select {
          width: 80px;
        }
    }
}
</style>
