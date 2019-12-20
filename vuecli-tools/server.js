const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const bodyParser = require('body-parser');

// 处理跨域
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method.toLowerCase() === 'options') {
      return res.end();
    }
    next();
  });
  app.use(bodyParser.json());
  const secret = 'zfjg';

app.post('/api/login', (req, res) => {
    const {username, password} = req.body;
    console.log(username, password)
    if (username == 'admin' && password == 1) {
        res.json({
            code: 0,
            data: 'success',
            token: jwt.sign({ username: 'admin' }, secret, {
                expiresIn: 20,
            }),
        })
    } else {
        res.json({
            code: -1,
            data: 'username or password is invalid'
        })
    }
});
app.get('/api/validate', (req, res) => {
    const token = req.headers.Authorization;
    jwt.verify(token, secret, (err, decode) => { // 验证token的可靠性
        if (err) {
            return res.json({
            code: 1,
            data: 'token失效了',
            });
        }
        res.json({
            username: decode.username,
            code: 0, // 延长tokne的过期时间
            token: jwt.sign({ username: 'admin' }, secret, {
            expiresIn: 20,
            }),
        });
    });
})

app.listen(8081)
console.log('server is runing at 127.0.0.1:8081')