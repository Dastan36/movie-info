import * as service from './services'

export default {
  registeAccess ({ dispatch, commit, state, rootState }, queryParam) {
    // console.log('--------------+' + quertParam.name)
    return new Promise((resolve, reject) => {
      service.registeAccess(queryParam).then((data) => {
        // console.log(data)
        if (data.err === 0) {
          resolve({
            path: 'main',
            data: data.data
          })
        }
      })
    })
  },
  getClient ({ dispatch, commit, state, rootState }, queryParam) {
    // console.log(queryParam)
    return new Promise((resolve, reject) => {
      service.getClient(queryParam).then((data) => {
        // console.log(data.data.err)
        if (data.data.err === 0) {
          resolve({
            data: data.data
          })
        }
      })
    })
  },
  show ({ dispatch, commit, state, rootState }, queryParam) {
    return new Promise((resolve, reject) => {
      // service.show(queryParam)
    })
  }
}
