<template>
  <div class="background">
    <div class="lds-ripple"><div/><div/></div>
  </div>
</template>

<style lang="scss" scoped>
$spinner-color: grey;
.background {
  display: flex;
  justify-content: center;
  align-items: center;
//   z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid $spinner-color;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}

</style>
