const WebSocket = require("ws");

// Create WebSocket Server
const wss = new WebSocket.Server({ port: 3000 });

console.log("WebSocket server is running on ws://localhost:3000");

wss.on("connection", function connection(ws) {
    console.log("New client connected");

    ws.send("Welcome to WebSocket Server!");

    ws.on("message", function incoming(message) {
        console.log("Received:", message.toString());

        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});
