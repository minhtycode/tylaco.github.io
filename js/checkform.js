function check() {
    var user = document.getElementById('username');
    if (user.value.length == 0) {
        alert("Vui lòng nhập Username");
        user.style.backgroundColor = 'yellow';
        user.style.border = '5px solid red';
        return false;
    } else {
        user.style.backgroundColor = 'none';
        user.style.border = 'none';
        return true;
    }
    var email = document.getElementById('email');
    if (email.value.length == 0) {
        alert("Vui lòng nhập email ");
        email.style.backgroundColor = 'yellow';
        email.style.border = '5px solid red';
        return false;
    } else {
        email.style.backgroundColor = 'none';
        email.style.border = 'none';
        return true;
    }
    var pass = document.getElementById('password');
    if (pass.value.length == 0) {
        alert('Vui lòng nhập password');
        pass.style.backgroundColor = 'yellow';
        pass.style.border = '5px solid red';
        return false;
    } else {
        pass.style.backgroundColor = 'none'
        pass.style.border = 'none';
        return true;
    }
    var cpass = document.getElementById('cpassword');
    if (cpass == pass) {
        return true;
    } else {
        cpass.style.border = '5px solid red'
        cpass.style.backgroundColor = "yellow"
        alert("2 mật khẩu chưa khớp")
        return faslse;
    }
    var check = document.getElementById('check');
    if (check.checked) {
        return true;
    } else {
        alert("Vui lòng chọn I agree all statements in Terms of service");
        return false;
    }
    alert("Chúc mừng bạn đã đăng ký thành công");
    return true;

}