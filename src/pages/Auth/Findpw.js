import React from 'react';
import "./Findpw.css";
import singlebungle_logo from "./singlebungle_logo.png";
import user from "./user.png";
import phone from "./phone.png";

const Findpw = () => {
    return (
            <div class="user_card">
                <div class="brand_logo_container">
                    <img src={singlebungle_logo} class="brand_logo" alt="Logo"/>
                </div>
                <form class="form_container">
                    <div class="stdnum_input">
                        <div class="stdnum_input_icon"><img class="stdnum_input_icon_img" src={user}/></div>
                        <input type="text" class="stdnum_input_box" placeholder="   학번"/>
                    </div>
                    <div class="phnum_input">
                        <div class="phnum_input_icon"><img class="phnum_input_icon_img" src={phone}/></div>
                        <input type="password" class="phnum_input_box" placeholder="   휴대폰번호"/>
                    </div>
                    <button type="button" class="findpw_btn">입력</button>
                </form>
            </div>
    );
};

export default Findpw;