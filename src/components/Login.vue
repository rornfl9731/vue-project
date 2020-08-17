<template>
<div>
    <b-container style="margin-top:10px">
    <h3>Login</h3>
  <b-input type="text" v-model="email" placeholder="email"></b-input><br>
  <b-input type="password" v-model="password" placeholder="password"></b-input><br>
  <b-button @click="login">로그인</b-button>
  <p>계정이 없다면? <router-link to="/sign">회원가입</router-link></p>
  </b-container>
</div>
</template>

<script>
import axios from 'axios';
import firebase from 'firebase'
export default {
    name : 'Login',
    data (){
        return{
            email : '',
            password : ''
        }
    },
    methods : {
        login(){
            axios.post('http://localhost:8888/mypage/member/login', {
	"memberId":this.email,
	"memberPw":this.password
}) .then(res => { 
    console.log(res.data)
    if(res.data.memberNo == -1){
        alert("회원정보가 없습니다.")
    }else{
        alert("로그인 성공")
        this.$store.state.memberName = res.data.memberName
        this.$store.state.memberNo = res.data.memberNo
        this.$store.state.memberAddr = res.data.memberAddr
        this.$store.state.memberBirth = res.data.memberBirth
        this.$store.state.memberJoinDate = res.data.memberJoinDate
        this.$store.state.memberMail = res.data.memberMail
        this.$store.state.memberPhone = res.data.memberPhone
        this.$store.state.memberDueDate = res.data.memberDueDate
        this.$store.state.loged = true
        this.$router.push({
                path : '/'
            })
    }
     })
        }
    }
}
</script>

<style>

</style>