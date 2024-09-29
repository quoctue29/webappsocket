- index.html:
File HTML chính chứa phần giao diện của trò chơi.
Bao gồm một thẻ <canvas> để vẽ giao diện trò chơi và nhúng tệp client.js để điều khiển logic hiển thị của trò chơi.
Sử dụng CSS để định dạng và căn chỉnh giao diện trò chơi trên trang web.
- client.js:
File JavaScript này xử lý các sự kiện người dùng và điều khiển logic trò chơi trên giao diện.
Quản lý chế độ chơi (chế độ máy tính hoặc chế độ nhiều người chơi).
Kết nối với máy chủ WebSocket thông qua hàm connectToServer() để bắt đầu trò chơi trong chế độ nhiều người chơi.
Xử lý các sự kiện click trên canvas, xác định lựa chọn của người chơi (Kéo, Búa, Bao) và gửi đến máy chủ WebSocket khi ở chế độ nhiều người chơi.
- socket.js:
Quản lý kết nối WebSocket với máy chủ trong chế độ nhiều người chơi.
- drawFunctions.js:
Chứa các hàm vẽ đồ họa để tạo giao diện trò chơi trên canvas.
Bao gồm các hàm để vẽ các nút chơi, bảng điểm, và giao diện cho cả chế độ máy tính và chế độ nhiều người chơi.
Cung cấp các hiệu ứng đồ họa, như làm nổi bật lựa chọn của người chơi.
gameLogic.js:
- server.js:
Tệp tin này định nghĩa máy chủ WebSocket sử dụng thư viện ws.

***
Tóm Tắt Chức Năng của Trò Chơi
Chế độ chơi đơn (với máy tính): 
Người chơi sẽ chọn Kéo, Búa, hoặc Bao trên giao diện, sau đó máy tính sẽ ngẫu nhiên chọn và kết quả sẽ được hiển thị.
Chế độ nhiều người chơi (Multiplayer): 
Sử dụng WebSocket để kết nối hai người chơi với nhau. Mỗi người chơi chọn Kéo, Búa, hoặc Bao và gửi lựa chọn của mình đến máy chủ. Máy chủ sẽ tính toán kết quả và gửi lại kết quả cho cả hai người chơi.
