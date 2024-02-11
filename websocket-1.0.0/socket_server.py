import asyncio
import websockets
import mecanum_control
import read_img

class SocketData:
    socket_protocol = None

    def __init__(self, port):
        self.port = port
        asyncio.run(SocketData.main(self))
        

    async def server_connect(websocket):
        SocketData.socket_protocol = websocket  # websocketをクラス内で使用できるようにする
        async for message in websocket:
            # await websocket.send(message)
            # mecanum_control.get_move(message)
            await read_barcode()

    async def send_msg(msg):
        print(msg)
        await SocketData.socket_protocol.send(msg)
        
    async def main(self):
        async with websockets.serve(SocketData.server_connect, "localhost", self.port):
            await asyncio.Future()  # run forever

async def read_barcode():
    # code_info = read_img.barcode("./jan_1112223330013.png")
    code_info = read_img.sample()
    if (code_info[0] == True):
        await SocketData.send_msg(str(code_info[1]))

cls = SocketData(8000)