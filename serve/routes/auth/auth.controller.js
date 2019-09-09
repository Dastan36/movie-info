
const token = require('../../lib/jwt/index');
const repository = require('./auth.repository');

((controller) => {

  controller.home = function(req, res, next) {
    console.log(req.query);
  };

  controller.user = (req, res) => {
    console.log(req.body);
  };

  controller.login = (req, res) => {
    // console.log(req);
    let queryParam = {
      name: req.body.name,
      password: req.body.password
    }
    return repository.get(queryParam).then(data => {
      // console.log(data[0]); // json
      if(data[0] ===''){
        res.send({
          err: '用户名或密码错误'
        })
      }else{
        res.setHeader("Access-Control-Allow-Credentials", "true");
        try{
          res.cookie('name', req.body.name, { maxAge: 1000 * 60 * 60, path: '/' });
          res.cookie('token', token.createAccessToken(req.body), { maxAge: 1000 * 60 * 60, path: '/' });
        }catch(e){
          console.log(e);
        }
        
        res.send({
          user: {
            name: req.body.name,
            password: req.body.password
          },
          token: token.createAccessToken(req.body)
        })
        
      }
    })
  };

  controller.verify = (req, res, next) => {
    let bearerToken = req.headers.authorization;
    console.log(bearerToken);
    let tokenn = bearerToken.split(' ')[1];
    if(token.verifyAccessToken(tokenn)){
      res.send('验证成功');
    }else{
      res.send('验证失败');
    }
  }

})(exports);



