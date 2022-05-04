import './Resign.css';
function Resign(){
    return (<div style={{'position' : 'relative',
    'top' : '-270px'
   }}> 


    <header class="headerLogin">
        <div class="grid wide header__top">
            <div class="header__top-left">
                <a href="../index.html" class="header__link">
                    <img alt="" src="https://logodix.com/logo/2015027.png" alt="logo" class="header__logo_login" />
                </a>
                <h2 class="header__sign-up">Đăng Ký</h2>
            </div>
            <div class="header__top-right">
                <a class="header__help" href="">Cần giúp đỡ?</a>
            </div>
        </div>
    </header>

    <div class="container">
        <img alt="" src={require("./img/img.PNG")} alt="" class="container__img" />
        <form class="form">
            <div class="form__content">
                <h3 class="form__heading">Đăng ký</h3>
                <input type="text" placeholder="Số điện thoại" class="form-control" />
                <br/>
                <input class="btn-submit" type="submit" value="Đăng Ký"/>
            </div>

            <div class="middle">
                <span class="middle__line"></span>
                <span class="middle__text ">Hoặc</span>
            </div>

            <div class="links-list">
                <a href="" class="bg bg--blue">
                    <img  src={require("./img/fb.PNG")} alt="" class="link__img link__img--fb"/>
                </a>
                <a href="" class="bg bg--blue">
                    <img src={require("./img/gg.PNG")} alt="" class="link__img link__img--gg" />
                </a>
                <a href="" class="bg bg--black">
                    <img src={require("./img/ios.PNG")} alt="" class="link__img link__img--ios"/>
                </a>
            </div>

            <p class="form__desc">
                Bằng việc đăng kí, bạn đã đồng ý với Shopee về
                <br/><a href="">Điều khoản dịch vụ</a> & <a href="">Chính sách bảo mật</a>
            </p>

            <footer class="form__footer">
                <p>Bạn đã có tài khoản? <a href="../log_in/login.html"> Đăng nhập</a></p>
            </footer>
        </form>
    </div>

    <footer class="footer">

    </footer>




    </div>)
}
export default Resign;