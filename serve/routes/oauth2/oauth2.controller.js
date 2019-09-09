
const repository = require('./oauth2.repository');
const uuid = require('uuid');
const request = require('request');
const qs = require('querystring');
const fs = require('fs');

((controller) => {

  controller.registe = (req, res) => {
    console.log(req)
    let queryParam = {
      clientName: req.body.clientName,
      clientPath: req.body.clientPath,
      redirectURI: req.body.redirectURI,
    }
    // 请求认证服务器
    try {
      request({
        url: 'http://localhost:3001/registe',
        method: 'post',
        json: true,
        headers: {
          'content-type': 'application/json'
        },
        body: queryParam
      },
        function (error, response, body) {
          // console.log(body);
          if (!error && response.statusCode === 200) {
            res.send(body);
          }
        })
    } catch (e) {
      console.log(e);
    }
  },

  // 用户 点击第三方登录
    controller.getClient = (req, res) => {
      
      let queryParam = {
        clientName: req.query.clientName
      };
      return repository.getClient(queryParam).then((data) => {
        // console.log(data[0]);
        var client = data[0];
        var client_id = client.clientId;
        var redirect_url = client.redirectURI;
        try {
          const state = uuid();
          // 获得授权码之后 需要验证state  这里先存一下？
          res.cookie('state', state, { maxAge: 1000 * 60 * 60 * 24, path: '/' });
          res.redirect(302, 'http://localhost:3001/oauth2?response_type=code&client_id='+client_id+'&redirect_url='+redirect_url+'&scope=create&state='+state);
        } catch (e) {
          console.log(e);
        }
        
      })
    },
    controller.redirect = function (req, res) {
      // console.log(req);
      let code = req.query.code;
      let state = req.query.state; // 这个state是A发过来  B需要验证和自己state是否匹配
      res.redirect(302, '/oauth/show?code='+code+'&state='+state);
    },
    controller.show = function (req, res) {
      let code = req.query.code;
      let state = req.query.state;
      // console.log(req);
      // 这里验证发来的state是否和客户端发到认证中心的state
      // console.log(req.cookies.state)
      // if(req.cookies.state === state){
        // 验证通过 需要向认证中心请求Accesstoken
        let queryParam = {
          clientName: 'movie'
        };
        return repository.getClient(queryParam).then((data) => {
          var client = data[0];
          let param = {
            grant_type: 'authorization_code',
            code: code,
            client_id : client.clientId,
            redirect_url: client.redirectURI,
            client_secret: client.clientSecret
          }
          request({
            url: 'http://localhost:3001/getAccessToken',
            method: 'post',
            json: true,
            headers: {
              'content-type': 'application/json'
            },
            body: param
          },
            function (error, response, body) {
              // body 中为acctsstoken
              console.log(response);
              if (!error && response.statusCode === 200) {
                // 客户端将access_token 存 cookie 服务端存进数据库
                res.cookie('AK', body.access_token,{maxAge: body.expires_in, path: '/'});
                res.redirect(302, '/oauth/movie');
              }
            })
        })

      
      // }
    },
    controller.movie = (req, res) => {
      console.log(req);
      var access_token = req.cookies.AK;
      let param = {
        access_token: access_token
      }
      request({
        url: 'http://localhost:3001/getResource',
        method: 'post',
        json: true,
        headers: {
          'content-type': 'application/json'
        },
        body: param
      },
        function (error, response, body) {
          if (!error && response.statusCode === 200) {
            // 客户端将access_token 存 cookie 服务端存进数据库
            var user = body;
            res.render('movie.ejs',{name: user.name});
            fs.readFile('serve/views/movie.ejs', 'utf-8', function(err, data){
              if(err){
                throw err;
              }else{
                // res.write(data);
                // res.end();
                res.end(data);
              }
            })
          }
        })
      
    }
})(exports);