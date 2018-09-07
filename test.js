var md5 = require('md5')
var request = require('request')
var userInfo
request.post('https://sdk-test.changic.net.cn/pocketgames/client/user/v3/login', {
  qs: {
    source: '0',
    advChannel: '40',
    network: '0',
    model: '0',
    operatorOs: '0',
    deviceNo: '0',
    device: '0',
    version: '0',
    sdkVersion: '0',
    appId: '10120',
    emailValid: '0',
    email: '',
    userId: '1000002158',
    accountType: '1',
    firstLogin: '0',
    userName: 'test002',
    userType: '1',
    password: 'e10adc3949ba59abbe56e057f20f883e',
    // token: 'c3d7535dde984912a2b9dbc924d69976',
    sign: '50cbf9a0888f8b4cd5bfd30c92a326de',
  }
}).on('data', function (data) {
  userInfo = JSON.parse(data.toString())
  var appId = '10120'
  var userId = userInfo.data.userId
  var secret = 'fd87331cd792421b983544c77305803b'
  var token = userInfo.token
  var md5Str = md5(appId + userId + token + secret)
  request.get(`https://sdk-test.changic.net.cn/pocketgames/client/user/verifyToken/10120/${userId}/${token}/${md5Str}`).on('data', function (data) {
    console.log(data.toString())
  })
})

