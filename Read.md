1. utils là viết về function ví dụ chuyển đổi kí tự hoa sang thường

helpers ==> như là ủy quyền, cần sự giúp đỡ mới gọi

2. Phát hiện server quá tải

.env và process => nếu làm việc trong team nhiều member

=> tại sao lại cần env

#Kiến thức nodejs nền tảng

1.  Tổng quan về lập trình back-end, cách mà back-end hoạt động
2.  Tổng quan về nodejs
3.  Xây dựng ứng dụng nodejs đầu tiên
4.  Sử dụng CommonJS và ES Module
5.  Xuất nội dung HTML,JSON
6.  Đọc nội dung file HTML
7.  Xử lý Routing trong Nodejs
8.  HTTP get
9.  HTTP post
10. Xử lý Form trong Nodejs
11. Validate Form với Nodejs
12. Upload File với Nodejs
13. Session trong Nodejs
14. Cookie trong Nodejs

#ExpressJS Framework

1. kiến thức căn bản
   a. Tổng quan về ExpressJS Framework
   b. Cài đặt Express Generator
   c. Các thành phần của Express
   d. Cấu trúc Folder của Express Generator
   e. Tìm hiểu về lifecycle Request
   f. Middleware Express: Global Middleware, Routing Middleware
   g. Tự Xây dựng Middleware ExpressJS
   h. Routing Express và các kỹ thuật xử lý
   j. Request và Response trong ExpressJS
   k. Render giao diện trong ExpressJS
   l. Xây dựng trang Error
2. Mô hình MVC
   a. Tổng quan về mô hình MVC
   b. Làm việc với Controller
   c. Cách xây dựng với Controller
   d. Các tổ chức các action
   e. Làm việc với view
   f. Phân chia view hiệu quả
   g. Gửi và nhận dữ liệu từ Controller sang View
   f. Cú pháp trong template Engine Ejs
   g. Giới thiệu master layout Ejs
   h. Xây dựng giao diện theo Master Layout
   j. Làm việc với Model
   k. Tư duy xây dựng Model đúng
   l. Demo xây dựng COntroller - Model - View với dữ liệu fake
3. Cơ sở dữ liệu (MYSQL)
   a. Tổng quan về CSDL và các loại CSDL
   b. Phần mềm và công cụ cần chuẩn bị
   c. Kiến thức SQL - Thao tác với Database
   d. Kiến thức SQL - Các kiểu dữ liệu trong SQL
   e. kiến thức SQL - Tạo bảng
   f. Kiến thức SQL - thêm, sửa, xóa dữ liệu
   g. kiến thức SQL- thiết lập các ràng buôc
   h. kiến thức SQL - Truy vấn dữ liệu
   j. Kiến thức SQL - JOin Table
   k. kiến thức SQL - SubQuery
   l. kiến thức SQL - Import và Export Database
   z. Thiết kế Database bằng công cụ: phpadmin, navicat
   x. Thực hành trang web bán hàng
4. Thao tác Nodejs với MYSQL
   a. Xây dựng file config để lưu các cấu hình
   b. Tìm hiểu về file .env và cách sử dụng
   c. Tìm hiểu về sequelize, typeorm, Prisma và 3 thằng thể loại cli
   d. Kết nối Database với Sequelize và các kỹ thuật
   e. Các thao tác với dữ liệu như thêm, sửa, xóa, truy vấn
   f. Các kỹ thuật nâng cao
5. Mail trong Nodejs
   a. Tìm hiểu về các tình uống mail
   b. Tìm hiểu package nodemailer
   c. Tìm hiểu SMTP, cách lấy thông tin SMTP của gmail
   d. Thiết lập cấu hình SMTP trong file config
   f. Thao tác gửi mail với nodemailer
   h. Thao tác với template mail
   j. Làm việc với Notication Email với package có sẵn
6. Authentication với Nodejs
   a. TÌm hiểu Passport.js
   b. Cấu hình Passport.js
   c. Xây dựng chức năng Login sử dụng Passport.js
   d. Tìm hiểu các Middleware trong passport.js
   f. Xây dựng chức năng đăng xuất
   g. Kiểm tra trạng thái đăng nhập
   h. Tích hợp đăng nhập với mạng xã hội
   j. Thực hành xây dựng ứng dụng Authentication hoàn chỉnh
7. Phân quyền người dùng trong Nodejs
   a. Tổng quan về phần quyền người dùng
   b. Mối quan hệ giữa phân quyền và xác thực người dùng
   c. Tìm hiểu Access Control List(ACL)
   d. Tìm hiểu về mô hình Role Based Access Control (RBAC)
   e. Phân quyền vai trò với package node_acl
   f. xây dựng Middleware cho các route
   g. Tư duy phân tích Database phân quyền chủ đọng
   h. Thực hành xây dựng ứng dụng phân quyền hoàn chỉnh
8. Xử lý hàng đợi (Queue) troing Nodejs
   a. Tổng quan về Queue và các tình huống cần sử dụng queue
   b. Tìm hiểu về Kue, rxjs và các tính năng của nó
   c. Cài đặt Redis và KUE
   D. Tạo các worker job
   e. Quản lý các jobs
   f. Thực hành xây dựng chức năng gửi mail hàng loạt sử dụng Queue
   g. Xử lý job scheduling, cronjob trong Nodejs
9. Cache trong Nodejs
   a. Tìm hiểu về Redis
   b. Cách sử dụng Redis trong thực tế
   c. Cache dữ liệu với Redis trong Nodejs
10. RESTFul API với Nodejs
    a. Tổng quan về API và ResfullAPI
    b. Các nguyên tắc khi thiết kế RestFul API
    c. Xây dựng RestFul API hoàn chỉnh với tình huống thực tế
    d. Tìm hiểu về CORS
11. RESTFul API Authentication và Authorization với Nodejs
    a. Tìm hiểu về cookie-based authentication với token-based authentication
    b. Tại sao nên sử dụng Token-based?
    c. Tìm hiểu về JWT, cách mà JWT hoạt động
    d. Tại sao phải quản lý exprie trong accessToken
    e. Sự khác nhau giữa accessToken và refreshToken như thế nào là hợp lý
    f. Xác thực API với Authorization Bearer
    g. Xây dựng Authentication- Authorization API hoàn chỉnh

12. OAuth 2.0 trong Nodejs
    a. Tìm hiểu về Oauth 2.0 Server và tình huống thực tế
    b. tìm hiểu về node-oauth2-server
    c. xây dựng CSDL cho oAuth
    d. Xây dựng Route và Oauth 2.0 service
    f. Xây dựng ứng dụng thực tế sử dụng Oauth 2.0
13. MVCS Archiecture- Repository Pattern
    a. Tìm hiểu về kiến trúc MVCS
    b. cách triển khai kiến trúc MVCS trong thực tế
    c. Nâng cấp mô hình MVC lên MVCS
    d. Tìm hiểu về Repsitory và các tình huống thực tế
14. Bảo mật và các hình thức tấn công
    a. XSS
    b. SQL Injection
    c. CSRF
    d. HTML Injection
    f. File Upload Attack
    d. .env attack
