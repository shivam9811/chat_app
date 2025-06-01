import {WebSocketServer,WebSocket} from 'ws';

const wss = new WebSocketServer({port:8080});

let userCount = 0;
interface socketCollection{
    [roomName:string]:WebSocket[]
}
let allSocket:socketCollection = {};
wss.on("connection",(socket)=>{
    socket.on("message",(e)=>{
        const message=JSON.parse(e.toString());
        console.log(message);
        if(message.type==='connect'){
            if(allSocket[message.payload.roomId]){
                allSocket[message.payload.roomId].push(socket);
            }else{
                allSocket[message.payload.roomId]=[socket];
            }
        }else if(message.type==='chat'){
            for(let r in allSocket){
                if(allSocket[r].includes(socket)){
                    allSocket[r].forEach(s=>s.send(message.payload.message))
                }
            }
        }
    })
    // socket.on("disconnect",()=>{
    //     allSocket = allSocket.filter(s=>s!=socket)
    // })
})

