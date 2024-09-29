const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

let clients = [];
let choices = {}; 

server.on('connection', (socket) => {
    clients.push(socket);
    console.log('New player connected');

    if (clients.length === 2) {
        console.log('Game starting!');
        clients.forEach(client => {
            client.send(JSON.stringify({ type: 'startGame' })); 
        });
    }

    socket.on('message', (message) => {
        const data = JSON.parse(message);
        if (data.type === 'move') {
            const playerIndex = clients.indexOf(socket); 
            choices[playerIndex] = data.choice;  
            if (choices[0] && choices[1]) {
                const result = calculateResult(choices[0], choices[1]);

                clients.forEach((client, index) => {
                    client.send(JSON.stringify({ 
                        type: 'result', 
                        result: result[index], 
                        playerChoice: choices[index],   
                        opponentChoice: choices[1 - index] 
                    }));
                });

                choices = {}; 
            }
        }
    });

    socket.on('close', () => {
        clients = clients.filter(client => client !== socket);
        console.log('Player disconnected');
    });
});

function calculateResult(choice1, choice2) {
    const outcomes = {
        'Keo': { 'Keo': 'Draw', 'Bua': 'Lose', 'Bao': 'Win' },
        'Bua': { 'Keo': 'Win', 'Bua': 'Draw', 'Bao': 'Lose' },
        'Bao': { 'Keo': 'Lose', 'Bua': 'Win', 'Bao': 'Draw' }
    };

    const result1 = outcomes[choice1][choice2];  
    const result2 = outcomes[choice2][choice1];  
    return [result1, result2];
}

console.log('Server is running on ws://localhost:8080');
