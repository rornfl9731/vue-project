<template>
<b-row>
      <b-col cols="2">
        <div>
          <b-card
            title="요금조회"
            tag="article"
            style="max-width: 20rem;margin-top:90px;margin-left:10px"
            class="mb-2"
          >
            <b-card-text>
              <router-link to="/">요금명세서</router-link>
              <br />
              <router-link to="/">상품별 요금</router-link>
            </b-card-text>

            <hr />
            <b-card-title>요금납부</b-card-title>
            <b-card-text>
              <router-link to="/nowCharge">즉시납부</router-link>
              <br />
              <router-link to="/">납부 확인서</router-link>
            </b-card-text>

            <hr />
            <b-card-title>조회/변경</b-card-title>
            <b-card-text>
              <router-link to="/">가입정보</router-link>
              <br />
              <router-link to="/">번호변경</router-link>
            </b-card-text>

            <hr />
            <b-card-title>이용량/이용내역</b-card-title>
            <b-card-text>
              <router-link to="/">이용량조회</router-link>
              <br />
              <router-link to="/">번호변경</router-link>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
</b-row>
</template>

<script>
export default {
    name : "Side"
}
</script>

<style>

</style>