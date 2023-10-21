<template>
  <header class="app-header">
    <div class="top_wrap">
      <div class="top_left">
        <img class="icon" src="@/assets/backbutton.png" @click="$router.go(-1)" />
      </div>
      <div class="top_center">
        <p>{{ title }}</p>
      </div>
      <div class="top_right">
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>
  
<script>
export default {
  name: "AppHeader",
  props: ['title'],
};
</script>
  
<style scoped>
.app-header {
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 1vh;
  width: 100%;
  height: 10%;
  box-sizing: border-box;
}

.top_wrap {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70%;
  justify-content: space-between;
}

.top_left {
  width: 10%;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
}

.top_center {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.top_right {
  width: 40%;
  display: flex;
  justify-content: flex-end;
}
</style>
