import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const storeData={
  state: {
    selectedItem: 0,
  },
  mutations: {
    CHANGE_SELECT_ITEM (state,item){
      state.selectedItem=item;

      console.log(item)
    }
  },
  actions: {
    handleSelectedItem(item){
      console.log(item)
      this.commit('CHANGE_SELECT_ITEM',item);
    }
  },
  modules: {
  },
  getters:{
    selectedItem:state=>state.selectedItem
  }
}

  const store= new Vuex.Store(storeData)

  export default store