# 🧹 Chat App Backend

This is a simple WebSocket-based chat app backend.

---

## ✨ Build the Docker Image

Run the following command to build the Docker image:

```bash
docker build -t chat-app-backend .
```

---

## 🏃‍♂️ Run the Container

After building the image, start the container using:

```bash
docker run -p 8080:8080 chat-app-backend:latest
```

---

## 🔗 WebSocket Connection

Connect to the WebSocket server using:

```
ws://localhost:8080
```

---

## 📡 Message Formats

### 🔌 Connect to a Room

Send this JSON to join a room:

```json
{
  "type": "connect",
  "payload": {
    "roomId": "1"
  }
}
```

---

### 💬 Send a Chat Message in a Room

Send this JSON to send a message within the room:

```json
{
  "type": "chat",
  "payload": {
    "message": "hello"
  }
}
```

---

## 📝 Notes

* Make sure port `8080` is not blocked by a firewall or already in use.
* The server assumes all messages are JSON-encoded.
* You can modify the default port by passing environment variables or changing your app logic.
