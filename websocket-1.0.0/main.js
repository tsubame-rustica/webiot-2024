var webSocket; //ウェブソケット
var messageTextArea = document.getElementById("messageTextArea"); // HTML内のテキスト出力エリア

// サーバとの通信を接続する関数
function connect(){
    webSocket = new WebSocket("ws://localhost:8000"); // インスタンスを作り、サーバと接続

    // ソケット接続すれば呼び出す関数を設定
    webSocket.onopen = function(message){
    messageTextArea.value += "Server connect... OK\n";
    };

    // ソケット接続が切ると呼び出す関数を設定
    webSocket.onclose = function(message){
    messageTextArea.value += "Server Disconnect... OK\n";
    };

    // ソケット通信中でエラーが発生すれば呼び出す関数を設定
    webSocket.onerror = function(message){
    messageTextArea.value += "error...\n";
    };

    // ソケットサーバからメッセージが受信すれば呼び出す関数を設定
    webSocket.onmessage = function(message){
    console.log("Receive : "+message.data);
    };
}

// サーバにメッセージを送信する関数
function sendMessage(){
    var message = document.getElementById("textMessage");
    console.log("Send : "+message.value);
    webSocket.send(message.value);
    message.value = "";
}

function sendAction(move) {
    const msg = [0, move];
    console.log("Send : " + msg[1]);
    webSocket.send(msg);
}

// サーバとの通信を切断する関数
function disconnect(){
    webSocket.close();
}