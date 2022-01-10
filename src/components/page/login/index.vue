<template>
  <div class="login">
    <div class="content">
      <div class="title">
        Log in
      </div>
      <div class="remark">
        This is a secure system and you willneed to provide your login details to access the site
      </div>
      <el-form :model="pageData">
        <template v-for="(item,index) in formList" :key="index">
          <el-input v-model="pageData[item.key]" size="large" :placeholder="item.placeholder" />
        </template>
        <el-button type="danger" size="large">
          Danger
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    const formList = [
      { key: 'username', type: 'text', placeholder: 'username' },
      { key: 'password', type: 'text', placeholder: 'password' }
    ]

    const pageData = reactive({
      username: '',
      password: ''
    })

    return {
      formList,
      pageData
    }
  }
}
</script>

<style lang="scss">
.login {
  background-color: rgb(245, 245, 245);
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 380px;
    height: 480px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 12px 12px 20px 1px rgba(0, 0, 255, .2);
    padding: 60px 40px 40px;
    .title{
      font-size: 40px;
      font-weight: 600;
    }
    .remark{
      color: #999;
      margin-top: 20px;
      line-height: 25px;
    }
    .el-form{
      margin-top:  40px;
      .el-input{
        margin-bottom: 20px;
      }
      .el-button{
        margin-top: 40px;
        width: 100%;
      }
    }
  }
}
</style>
