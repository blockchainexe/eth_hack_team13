<template>
  <div class="navbar">
    <div class="nav-items">CHAT</div>
    <div class="nav-items">HOME</div>
    <div class="nav-items">FREINDS</div>
  </div>
</template>
<style lang="scss" scoped>
.navbar{
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
  background-color: #FF9800;
  color: #FFF;
  flex-grow: 1;
  border-right: 1px solid #FFF;
  &:hover {
    background-color:darken(#FF9800, 20%);
  }
}
</style>
