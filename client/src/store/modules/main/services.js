import $http from '../../../utils/http'

export const registeAccess = (queryParam) => {
  return new Promise((resolve, reject) => {
    $http({
      method: 'POST',
      url: '/api/oauth/registe',
      data: queryParam
    }).then(data => {
      // console.log(data)
      if (data.status === 200 && data.data) {
        // console.log('qwe')
        resolve({
          err: 0,
          data: data.data
        })
      } else {
        // console.log('asd')
        const err = new Error('申请失败')
        throw err
      }
    })
  })
}

export const getClient = (queryParam) => {
  // console.log(queryParam)
  return new Promise((resolve, reject) => {
    try {
      $http({
        method: 'POST',
        url: '/api/oauth/getClient',
        data: queryParam
      }).then(data => {
        resolve({
          data: data.data
        })
      })
    } catch (err) {
      console.log(err.message)
    }
  })
}
export const show = (queryParam) => {
  return new Promise((resolve, reject) => {
    $http({
      method: 'GET',
      url: '/api/oauth/show',
      params: queryParam
    })
  })
}
