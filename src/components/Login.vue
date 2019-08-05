<template>
  <el-container>
    <el-header></el-header>
    <el-main >
      <el-row type="flex" justify="center">
        <el-form class="demo-ruleform" :model="ruleForm" :rules="rules" ref="ruleform" style="width:300px" >
          <el-form-item prop="loginName">
            <el-input v-model="ruleForm.loginName" placeholder="账号"  autocomplete="off" clearable>></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" placeholder="密码"  show-password clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" style="width:200px" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>
<script>
export default {
  name: "Login",
  data(){
    var validateLoginName = (rule, value, callback) => {
      if (!value) {
          callback(new Error('请输入账号'));
      }
    };
    var validatePassWord = (rule,value,callback) =>{
      if(!value){
        callback(new Error('请输入密码'))
      }
    }
    return {
      ruleForm: {
        loginname: "",
        password: ""
      },
       rules: {
          loginName: [
            { validator: validateLoginName, trigger: 'blur' }
          ],
          password:[
            {validator:validatePassWord,trigger:'blur'}
          ]
        }
    };
  },
  methods: {
    onSubmit() {
      this.$message({
        message: "登录成功！",
        type: "success"
      });
      this.$axios.post('/api/login')
      .then(function(data){
        console.log(data);
        
      }).catch(function(data){
        console.log(data)
      })
      
    }
  }
};
</script>