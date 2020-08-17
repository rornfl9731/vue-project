<template>
  <div>
    
        <b-row>
            <b-col cols="2">
                <div>
  <b-card
    title="요금조회"
    tag="article"
    style="max-width: 20rem;margin-top:10px;margin-left:10px"
    class="mb-2"
  >
    <b-card-text>
    <router-link to='/'>요금명세서</router-link><br>
    <router-link to='/'>상품별 요금</router-link>
    
    </b-card-text>

    <hr>
    <b-card-title>요금납부</b-card-title>
    <b-card-text>
    <router-link to='/nowcharge'>즉시납부</router-link><br>
    <router-link to='/'>납부 확인서</router-link>
    
    </b-card-text>

    <hr>
    <b-card-title>조회/변경</b-card-title>
    <b-card-text>
    <router-link to='/'>가입정보</router-link><br>
    <router-link to='/'>번호변경</router-link>
    
    </b-card-text>

    <hr>
    <b-card-title>이용량/이용내역</b-card-title>
    <b-card-text>
    <router-link to='/'>이용량조회</router-link><br>
    <router-link to='/'>번호변경</router-link>
    
    </b-card-text>


  </b-card>
  
</div>
            </b-col>
            <b-col cols="8"><b-container class="bv-example-row"><b-table style="margin-top:10px" striped hover :items="items" :fields="fields"></b-table></b-container></b-col>
        </b-row>
    
  </div>
</template>

<script>
import data from '@/data'
let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})
export default {
  name: 'Board',
  data() {
    return {
      fields: [
        {
          key: 'content_id',
          label: '글번호',
        },
        {
          key: 'title',
          label: '제목',
        },
        {
          key: 'created_at',
          label: '등록일'
        },
        {
          key: 'user_name',
          label: '글쓴이'
        },
      ],
      items: items
    }
  }
}
</script>