const WebScoket = require('ws')
const wss = new WebScoket.Server({port:8081})

wss.on('connection',function connection(ws){
    console.log('连接成功')
    ws.on('message',function incoming(message){
        console.log('监听到了消息',message)
        ws.send('我收到了你的消息,您看到了吗')
    })
    ws.on('close',function(){
        console.log('关闭监听')
    })
    
})

