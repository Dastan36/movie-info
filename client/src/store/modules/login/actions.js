import * as service from './services'

export default {
  loginSystem ({ dispatch, commit, state, rootState }, quertParam) {
    // console.log('--------------+' + quertParam.name)
    return new Promise((resolve, reject) => {
      service.login(quertParam).then((data) => {
        // console.log(data)
        if (data.err === 0) {
          resolve({
            path: 'main',
            data: data.data
          })
        }
      })
    })
  }
}
