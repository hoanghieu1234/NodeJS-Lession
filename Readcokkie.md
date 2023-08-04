# Cokkie là gì

- là một cách lưu trữ thông tin trên máy tính của người dùng
- Trong express cookie được sử dụng để lưu trữ và truyền dữ liệu giữa máy chủ và trình duyệt của người dùng qua các yêu cầu khác nhau
- khi một trình duyệt gửi yêu cầu lên máy chủ, máy chủ có thể gửi một hoặc nhiều cookie đến trình duyệt
- cookie này chứa những thông tin gồm các gặp key-value được lưu trữ trên trình duyệt của người dùng
- Khi trình duyệt gửi yêu cầu tiếp theo đến máy chủ, nó sẽ gửi lại các cookie đó để máy chủ có thể đọc và sử dụng được chúng
- Trong expressjs có thể cài cookie-parser

Cookie trong express có nhiều tác dụng quan trọng

- Xác thực người dùng: Bằng cách lưu trữ thông tin đăng nhập, cookie có thể sử dụng để xác thực và duy trì phiên làm việc của người dùng
- Lưu trữ thông tin phiên làm việc: Cookie có thể được sử dụng để lưu trữ và truyền thông tin về phiên làm việc
  của người dùng, cho phép duy trì trạng thái giữa các yêu cầu
- Theo dõi và phân tích người dùng: Bằng cách sử dụng cookie để lưu trữ thông tin về hoạt động của người dùng trên web, bạn có thể thu thập dữ liệu và phân tích để điều hành vi và tương tác của người dùng
- Tùy chỉnh trải nghiệm người dùng: Cookie cung cấp khả năng lưu trữ và truyền thông tin cá nhân hóa, cho phép cung cấp trải nghiệm cá nhân hóa cho người dùng, ví dụ như lưu trữ cài đặt ngôn ngữ hoặc thiết lập tùy chỉnh
