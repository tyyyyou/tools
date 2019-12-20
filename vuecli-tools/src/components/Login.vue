<template>
    <div>
        <p>登录页</p>
        <input type="text" v-model="username"><br><br>
        <input type="password" v-model="password"><br><br>
        <button @click="toLogin">点击登录</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            username: '',
            password: ''
        }
    },
    created () {},
    methods: {
        async toLogin () {
            const r = await this.$api.login.toLogin({username: this.username, password: this.password});
            if (r.data.code == 0) {
                this.$message({
                    message: '登录成功'
                });
                // 登录成功，返回之前的页面
                this.$store.commit('setUsername', this.username);
                localStorage.setItem('token', r.data.token);
                this.$router.push('/loginSuccess');
            } else {
                this.username = '';
                this.password = '';
                this.$message({
                    message: '用户或密码错误'
                })
            }
        }
    }
}
</script>