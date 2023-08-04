# Thế thì thằng cookie và thằng session này khác nhau như thế nào?

1. Điểm chung

- Đều là các phương thức được sử dụng để theo dõi danh tính của người sử dụng. Điều đó có nghĩa là như thế này:
- Trong các ứng dụng việc theo dõi hoạt động người dùng là rất quan trọng. Về lý thuyết, tất
  cả các hoạt động yêu cầu của một người dùng phải thuộc về cùng một phiên và tất cả các hoạt động yêu cầu của một người dùng khác phải thuộc về một phiên khác. Không được nhầm lẫn cả hai
- Ví dụ: bất kỳ tài sản được mua bởi người dùng A trong hệ thống aliconcon thì nên được đặt vào giỏ hàng của người A. Không được nhầm lẫn giữa các sản phẩm của người A và B và C. vì mỗi user đều có phiên hoạt động khác nhau. Chính vì lẽ đó cho nên cookie và session được đưa vào dùng để cho việc trên

2. Cookie là gì ?

- Như kiểu xác định danh tính khách hàng thông qua cái gọi như là căn cước công nhân ở trên máy khách nha
- Thế nguyên lý hoạt động của thằng db ra sao , ae mở file compare hai thàng bánh qui và sẹc xi lên giúp em.

3. Session là gì ?
   Ngoài việc sử dụng cookie, thì session thường được sử dụng trong các ứng dụng web để lưu lại trạng thái của người dùng . Session là một cơ chế để phía server sử dụng để ghi lại trạng thái của user phía bên client

- Nếu cơ chế cookie như là xác định danh tính khách hàng trên máy khách , thì thằng db Session là xác nhận danh tính khách hàng kiểm tra CCCD trên phái máy chủ. Phiên tương đương với một hồ sơ khách hàng được tạo bởi chương trình trên máy chủ. Khi một khách hàng truy cập. Session chỉ cần truy vấn sessionid

- Nguyên lý hoạt động của thằng db này ra sao ae vô thằng drawio giúp em

4. Rồi thì nó khác nhau chỗ quần què nào?

- Đầu tiên là dữ liệu cookie được lưu trữ ở phía bên máy khách và dữ liệu của session được lưu trữ ở phía bên máy chủ.
- Ví dụ: Ae mình đăng nhập vào một trang web, nếu máy chủ web sử dụng session thì tất cả dữ liệu sẽ được lưu ở phía bên máy chủ, mỗi khi client gửi yêu cầu thì thằng server sẽ gửi phiên hiện tại sessionId. Vì dữ liệu được lưu trữ trên server nên không ai có thể giả mạo được nó.
- Thông qua đó ae cũng biết về bảo mật thì thằng bd session sẽ ngon hơn thằng db cookie
- Thứ hai thằng lol cookie nó không an toàn lắm, những người khác có thể phân tích cookie được lưu trữ trong local và tiến hành giả mạo cookie, nếu chọn bảo mật thì sài ô thần session
- Thứ ba Session sẽ được lưu trên máy chủ trong một khoảng thời gian nhất định. Khi số lượng truy cập tăng lên, nó sẽ chiếm mất hiệu xuất của server. nếu chọn performent ae chọn ô thần cookie giúp em
- Giới hạn của một cookie duy nhất ở client là 4k, có nghĩa là cookie được lưu trữ bởi một trang web ở phía khách hàng không thể là 4k.
- Thứ 5: Tổng lại theo em dùng cả hai cho sướng. Cookie thì mình lưu mấy cái méo quan trọng =)). Còn thông tin user ae mình chọn session
