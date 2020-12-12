// import http from "@/http/instance"
import { fetchItem, fetchList } from '@/api.js'

const actions = {
    fetchItem({commit}, id) {
      return fetchItem(id).then(res => {
        commit('setItem', {id, item: res.data})
      })
    },
    fetchList({commit}){
      return fetchList().then(res => {
        commit('setList', res.data.list)
      })
    }

}

export default actions;