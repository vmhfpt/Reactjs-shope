import './Login.css'
function Login(){
    return (
<div style={{'position' : 'relative',
 'top' : '-270px'
}}>


<header class="headerLogin">
        <div class="grid wide header__top">
            <div class="header__top-left">
                <a href="../index.html" class="header__link">
                    <img alt="" src="https://logodix.com/logo/2015027.png" alt="logo" class="header__logo_login" />
                </a>
                <h2 class="header__sign-up">Đăng Nhập</h2>
            </div>
            <div class="header__top-right">
                <a class="header__help" href="">Cần giúp đỡ?</a>
            </div>
        </div>
    </header>

    <div class="container">
        <img alt="" src={require('./img/img.PNG')} alt="" class="container__img" />
        <form class="form">
            <div class="form__content">
                <h3 class="form__heading">Đăng nhập</h3>
                <input type="text" placeholder="Email/Số điện thoại/Tài khoản" class="form-control" />
                <input type="password" placeholder="Mật khẩu" class="form-control" />
                <br/>
                <input class="btn-submit" type="submit" value="Đăng Nhập" />
                <div class="form__content--bottom">
                    <a href="">Quên mật khẩu</a>
                    <a href="">Đăng nhập với SMS</a>
                </div>
            </div>

            <div class="middle">
                <span class="middle__line"></span>
                <span class="middle__text ">Hoặc</span>
            </div>

            <div class="links-list">
                <a href="" class="bg bg--blue">
                    <img alt="" src={require("./img/fb.PNG")} alt="" class="link__img link__img--fb" />
                </a>
                <a href="" class="bg bg--blue">
                    <img alt="" src={require("./img/gg.PNG")} alt="" class="link__img link__img--gg"/>
                </a>
                <a href="" class="bg bg--black">
                    <img alt="" src={require("./img/ios.PNG")} alt="" class="link__img link__img--ios"/>
                </a>
            </div>

            <footer class="form__footer">
                <p>Bạn mới biết đên Shopee ? <a href="../sign_up/sign_up.html"> Đăng ký</a></p>
            </footer>
        </form>
    </div>

    
</div>




        
    )








}
export default Login;