<template>
  <div class="top-bar">
    <div class="logo">
      <span>Vue简历编辑器</span>
    </div>
    <div class="options">
      <span class="welcome">你好:{{userName}}</span>
      <input type="button" class="minor" value=" 登出">
      <input type="button" class="primary" value="保存">
      <input type="button" class="primary" value="预览">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data(){
    return{
      userName: 'sdfasdfsa'
    }
  }
}
</script>

<style lang="scss" scoped>
.top-bar {
  min-height: 65px;
  background-color: #09161c;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  >span {
    color: #fff;
    font-size: 16px;
    line-height: 65px;
    margin-left: 20px;
  }
}
.options{
  margin-right: 20px;
  font-size: 0;
  .welcome{
    font-size: 16px;
    color: #fff;
    margin-right: 5px;
  }
  .primary{
    border: none;
    background-color: #09161c;
    color: #fff;
    height: 65px;
    padding: 0 15px;
    border-right: 1px solid #3d4a50;
    transition: .75s;
    cursor: pointer;
    &:hover{
      background-color: #fff;
      color: #000;
    }
  }
  .minor{
    border: none;
    background-color: #09161c;
    color: #fff;
    height: 65px;
    padding: 0 15px;
    transition: 0.75s;
    border-right: 1px solid #3d4a50;
    cursor: pointer;
    &:hover{
      background-color: #838d97;
    }
  }
}
</style>
