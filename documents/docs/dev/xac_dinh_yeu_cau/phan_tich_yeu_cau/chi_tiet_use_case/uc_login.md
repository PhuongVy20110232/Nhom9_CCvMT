---
sidebar_position: 1
---

# Use case Login

## Phân tích use case 
![Screenshot](../resources/login/uc_login.png)

| Use Case ID:          | 	UC001                                                                                                                                                                                                                                                                                                                                                      |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Use Case Name:        | 	Login                                                                                                                                                                                                                                                                                                                                                      |
| Actors:               | 	Manager, Customer.                                                                                                                                                                                                                                                                                                                                         |
| Description:          | 	Chức năng đăng nhập cho phép người dùng đăng nhập vào hệ thống để sử dụng các chức năng của hệ thống.                                                                                                                                                                                                                                                      |
| Trigger:              | 	Chức năng này sẽ được sử dụng khi người dùng truy cập vào website                                                                                                                                                                                                                                                                                          |
| Preconditions:        | 	Người dùng đã được cấp một tài khoản để đăng nhập.                                                                                                                                                                                                                                                                                                         |
| Post Conditions:      | 1. Hệ thống sẽ đưa ra các chức năng chính để người dùng lựa chọn chức năng làm việc. 2. Một phiên làm việc của người dùng bắt đầu từ lúc đăng nhập thành công cho đến khi đăng xuất.                                                                                                                                                                       |
| Normal Flow:          | 1. Hệ thống sẽ đưa ra trang đăng nhập. 2. Người dùng nhập tên vào ô chữ có nhãn là “Username” và nhập mật khẩu vào ô chữ có nhãn là “Password”. 3. Khi người dùng nhấn nút “Login” thì hệ thống sẽ tự động chuyển qua trang chính của website.  4. Khi người dùng nhấn nút “Reset” thì hệ thống sẽ xóa hết các thông tin đăng nhập để người dùng nhập lại. |
| Alternative Flows:    | 1. Nếu người dùng không nhập thông tin vào các ô chữ và nhấn nút “Ok” thì hệ thống sẽ đưa ra thông báo lỗi và đòi hỏi phải nhập thông tin vào các ô chữ đó. 2. Nếu người dùng nhập sai tên đăng nhập hoặc mật khẩu đăng nhập, khi nhấn nút “Login”, hệ thống sẽ đưa ra thông báo lỗi và yêu cầu đăng nhập lại.                                             |
| Exceptions:           | Nếu tài khoản đăng nhập hiện đang được sử dụng, khi đăng nhập hệ thống sẽ đưa ra thông báo tài khoản hiện đang sử dụng.                                                                                                                                                                                                                                    |
| Special Requirements: |                                                                                                                                                                                                                                                                                                                                                            |
****
## Class diagram của use case login 
![Screenshot](../resources/login/cd_login.png)

****
## Activity diagram của use case login 
![Screenshot](../resources/login/ad_login.png)