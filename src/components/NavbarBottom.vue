<template>
  <div class="navbar">
    <div class="nav-items"><i class="material-icons">chat</i>CHAT</div>
    <div class="nav-items"><i class="material-icons">home</i>HOME</div>
    <div class="nav-items"><i class="material-icons">supervisor_account</i>FRIENDS</div>
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
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color:darken(#FF9800, 20%);
  }
  & > .material-icons {
    padding: 5px;
  }
}
</style>
