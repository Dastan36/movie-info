import $http from '../../../utils/http'

export const login = (queryParam) => {
  return new Promise((resolve, reject) => {
    $http({
      method: 'POST',
      url: '/api/login',
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
        const err = new Error('用户名或密码错误')
        throw err
      }
    })
  })
}
