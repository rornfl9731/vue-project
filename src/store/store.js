import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import createPersistedState from 'vuex-persistedstate';

export const store = new Vuex.Store({
    
    

    state: {
        memberName : "",
        memberNo : -1,
        memberAddr : "",
        memberBirth : "",
        memberJoinDate : "",
        memberMail : "",
        memberPhone : "",
        memberDueDate : -1,

        loged : false
      },
      
      plugins: [createPersistedState({
        paths: ["state"],
      })],
    mutations : {
        log_in(state,payload){
            state.name = payload
        }
    }
});