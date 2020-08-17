<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">KT 마이페이지</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>요금조회</template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>요금납부</template>
            <b-dropdown-item v-if="this.$store.state.loged == false" to="/login">즉시납부</b-dropdown-item>
            <b-dropdown-item v-if="this.$store.state.loged == true" to="/nowCharge">즉시납부</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>조회/변경</template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>이용량/이용내역</template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>요금제</template>
            <b-dropdown-item to="/changepay">요금제변경</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item to="/board/free">자유게시판</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login" v-if="this.$store.state.loged == false ">로그인</b-nav-item>
          <b-nav-item to="/sign" v-if="this.$store.state.loged == false ">회원가입</b-nav-item>
          <b-nav-item to="/profile" v-else>{{this.$store.state.memberName}}</b-nav-item>
          <b-nav-item @click="logout" v-if="this.$store.state.loged == true ">로그아웃</b-nav-item>
          <!-- <b-nav-item-dropdown right>

          <template v-slot:button-content>
           <span>로그인</span>
          </template>
          <b-dropdown-item to="/sign">{{this.$store.state.name}}회원가입</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.state.loged = false;
      this.$store.state.memberName = ""
      this.$store.state.memberNo = -1
      this.$store.state.memberAddr = ""
      this.$store.state.memberBirth = ""
      this.$store.state.memberJoinDate = ""
      this.$store.state.memberMail = ""
      this.$store.state.memberPhone = ""
      this.$store.state.memberDueDate = ""
      this.$router.push({
                path : '/'
            })
    }
  }
};
</script>