<template>
  <div>
    <form @submit.prevent="login">
      <div class="row">
        <input type="text" v-model="formData.username" required placeholder="用户名">
      </div>
      <div class="row">
        <input type="password" v-model="formData.password" required placeholder="密码">
      </div>
      <div class="actions">
        <input type="submit" value="登录">
        <slot></slot>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'loginForm',
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  }
}
</script>

 <style lang="scss" scoped>
.row {
  margin: 20px;
  >input {
    width: 300px;
    height: 32px;
    border: 1px solid #ebecee;
  }
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin: 15px 25px;
  >input {
    &:hover {
      background: #000;
      opacity: .45;
      color: #fff;
    }
    margin: 0 5px;
    cursor: pointer;
    border: none;
    padding: 10px 20px;
  }
}
</style>
