<template>
  <div style="margin-top:10px">
    <b-container>
      <h2>회원가입</h2>
      <b-input type="text" v-model="id" placeholder="아이디"></b-input>
      <br />
      <b-input type="password" v-model="password" placeholder="비밀번호"></b-input>
      <br />
      <b-input type="password" v-model="password2" placeholder="비밀번호 확인"></b-input>
      <br />
      <b-button @click="sign">가입하기</b-button>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import firebase from "firebase";
export default {
  name: "Sign",
  data() {
    return {
      id: "",
      password: "",
      password2: ""
    };
  },
  methods: {
    sign() {
      axios
        .post("http://localhost:8888/mypage/member/regist", {
          memberId: this.id,
          memberPw: this.password,
          memberBirth : "1991-10-13 00:00:00",
          memberName : "지누",
          memberAddr : "서울",
          memberPhone : "010-4381-3121",
          memberJoinDate : "2020-08-17",
          memberMail : "asd@naver.com",
          paymentAccnt : "123-124-124",
          paymentDueDate : "25"
        })
        .then(res => {
          console.log(res.data);
          if (res.data.result == "success") {
            alert("회원가입 성공.");
            this.$router.push({
              path: "/login"
            });
          } else {
            alert("실패");
            
          }
        });
    }
  }
};
</script>

<style>
</style>