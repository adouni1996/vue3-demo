<template>
  <div class="login">
    <div class="content">
      <div class="title">
        Log in
      </div>
      <div class="remark">
        This is a secure system and you willneed to provide your login details to access the site
      </div>
      <el-form
        ref="ruleFormRef"
        :model="pageData"
        :rules="rules"
        :form-size="formSize"
      >
        <el-form-item v-for="(item,index) in formList" :key="index" :prop="item.key">
          <el-input v-model="pageData[item.key]" size="large" :placeholder="item.placeholder" />
        </el-form-item>
        <el-form-item>
          <el-button type="danger" size="large" @click="loginClick(ruleFormRef)">
            Danger
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/getData'
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
export default {
  setup() {
    const ruleFormRef = ref()
    const formSize = ref('')
    const formList = [
      { key: 'username', type: 'text', placeholder: 'username' },
      { key: 'password', type: 'text', placeholder: 'password' }
    ]

    const pageData = reactive({
      username: '',
      password: ''
    })

    const rules = reactive({
      username: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' }
      ],
      password: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' }
      ]
    })

    const loginClick = (ruleFormRef) => {
      ruleFormRef.validate(async(validate) => {
        if (!validate) {
          return
        }
        const res = await login(pageData)
        console.log(res)
        if (res?.data?.status === '1001') {
          ElMessage({
            message: `${res.data.data.username}登录成功`,
            type: 'success'
          })
        }
      })
    }

    return {
      formList,
      pageData,
      rules,
      ruleFormRef,
      formSize,
      loginClick
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
      .el-button{
        margin-top: 40px;
        width: 100%;
      }
    }
  }
}
</style>
