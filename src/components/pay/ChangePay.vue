<template>
  <div>
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
            <b-card-title>이용량</b-card-title>
            <b-card-text>
              <router-link to="/usage">이용량조회</router-link>
              <br />
              <router-link to="/">번호변경</router-link>
            </b-card-text>

            <hr />
            <b-card-title>요금제</b-card-title>
            <b-card-text>
              <router-link to="/changepay">요금제변경</router-link>
              <br />
              <router-link to="/">번호변경</router-link>
            </b-card-text>
          </b-card>
        </div>
      </b-col>

      <b-col cols="8">
        <b-container class="bv-example-row" style="margin-top:10px;">
           <b-card> <h2 style="background-color:">요금제 변경</h2></b-card>
          <b-jumbotron>
              
            <b-card>
                <b-card>
<b-card-text style="textAlign:left"><span style="font-size:30px">모바일</span> &nbsp;&nbsp;&nbsp;&nbsp;<span style="padding-left:10em;font-size:20px"><b>{{phone}}</b></span></b-card-text>
                </b-card>
              
              <br>
              <b-card>
                <b-card-text style="textAlign:left">
                  <span style="font-size:30px">이용중인 요금제</span>
                  <span style="padding-left:5em;font-size:20px">
                    <b>{{chargeName}}</b>
                  </span>
                  <span style="padding-left:10em;font-size:20px">
                    <b style="color:red">월 {{numberWithCommas(mo)}}(부가세포함)</b>
                  </span>
                </b-card-text>
                <hr>
                <b-card-text style="display:flex;justify-content: space-around;">
                  <span style="font-size:20px"><b>데이터</b> | 무제한</span>
                  <span style="font-size:20px"><b>음성</b> | 무제한</span>
                  <span style="font-size:20px"><b>문자</b> | 무제한</span>
                  
                  
                </b-card-text>
              </b-card>
              <hr>
              
               
               <b-jumbotron>
                   <div style="textAlign:left;font-size:20px">변경 가능 요금제</div><br>
                   <b-card>

            <b-table striped hover :items="it" :fields="fields"></b-table>
                       
    
    
    
  </b-card>
               </b-jumbotron>
               
            </b-card>
            <br>
            <div style="display:flex;flex-direction: column;">
            <span style="textAlign:left;font-size:13px">&nbsp;・ 당월 청구요금 및 미납요금을 납부하실 수 있습니다.</span>
            <span style="textAlign:left;font-size:13px">&nbsp;・ 해지하신 상품의 미납은 <span style="color:red;text-decoration: underline;">해지상품 요금납부</span> 메뉴에서 즉시 납부 하실 수 있습니다.</span>
            <span style="textAlign:left;font-size:13px">&nbsp;・ 월별 청구 금액은 <span style="color:red;text-decoration: underline;">요금명세서</span> 메뉴에서 확인하실 수 있습니다.</span>
            <span style="textAlign:left;font-size:13px">&nbsp;・ 고객님의 납부방법 확인은 <span style="color:red;text-decoration: underline;">납부방법 변경</span> 에서 확인하실 수 있습니다.</span>
            <span style="textAlign:left;font-size:13px">&nbsp;・ 고객님의 납부하신 금액 확인은 <span style="color:red;text-decoration: underline;">납부확인서</span> 에서 확인하실 수 있습니다.</span>
            </div>
          </b-jumbotron>
          
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ChangePay",
  data() {
    return {
      mo: "",
      phone: "",
      chargeName : "",
      fields: ['chargeName', 'chargePrice', 'chargeData','chargeVoice','chargeText'],
      it : ""
      


    };
  },
  mounted() {
    axios
      .get(
        "http://localhost:8888/mypage/charge/info/member/" +
          this.$store.state.memberNo
      )
      .then(res => {
        console.log(res.data);
        this.mo = res.data.chargePrice;
        this.chargeName = res.data.chargeName;
        console.log(this.mo)
        this.phone = this.$store.state.memberPhone;
      })
      .catch(err => {
        console.log(err);
      });

      axios
      .get(
        "http://localhost:8888/mypage/charge/info")
      .then(res => {
        console.log(res.data);
        this.it = res.data
        
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



    //       fetchData() {
    //       axios.get("https://my-json-server.typicode.com/rornfl9731/demo/membercharge")
    //         .then(res => {
    //           console.log(res)
    //           this.mo = res.data[0].memberNo;
    //           this.no = res.data[0].chargeall;
    //         })
    //         .catch(err => {
    //           console.log(err);
    //         });
    //     },
    //     created() {
    //         this.fetchData();
    //   }
  }
};
</script>

<style>
</style>