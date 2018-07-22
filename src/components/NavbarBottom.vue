<template>
  <div class="container">
    <div class="nav-items">a</div>
    <div class="nav-items">a</div>
    <div class="nav-items">a</div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  $height: 80px;
  position:fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: $height;
  display: flex;
  flex-direction: row;
  text-align:center;
  line-height: $height;
}

.nav-items {
  flex-grow: 1;
}
</style>
