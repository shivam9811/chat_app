"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let userCount = 0;
let allSocket = {};
wss.on("connection", (socket) => {
    socket.on("message", (e) => {
        const message = JSON.parse(e.toString());
        console.log(message);
        if (message.type === 'connect') {
            if (allSocket[message.payload.roomId]) {
                allSocket[message.payload.roomId].push(socket);
            }
            else {
                allSocket[message.payload.roomId] = [socket];
            }
        }
        else if (message.type === 'chat') {
            for (let r in allSocket) {
                if (allSocket[r].includes(socket)) {
                    allSocket[r].forEach(s => s.send(message.payload.message));
                }
            }
        }
    });
    // socket.on("disconnect",()=>{
    //     allSocket = allSocket.filter(s=>s!=socket)
    // })
});
