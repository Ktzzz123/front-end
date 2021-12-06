import React from 'react'
import useStyles from './Styles'
// import styled from "styled-components"

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
        <div className={classes.footer_introduce}>
                <h5 className={classes.contact_name}>Giới thiệu</h5>
                <div className={classes.introduceText}>
                    Tranh Của Jelly is a personal web that show and sell pictures and DIY of Jelly
                </div>
            </div>
               <div className={classes.footer_contact}>
                    <div className={classes.footer_contact__link}>
                        <div className={classes.footer_contact__link_item}>
                            <h5 className={classes.contact_name}>Liên Kết</h5>
                            <div>
                                <div className={classes.contact_name_item}>Trang Chủ</div>
                                <div className={classes.contact_name_item}>Đăng ký</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.footer_contact__help}>
                        <h5 className={classes.contact_name}>Trợ Giúp</h5>
                        <div>
                            <div className ={classes.contact_name_item}>Báo lỗi</div>
                            <div className ={classes.contact_name_item}>Bảo mật</div>
                            <div className ={classes.contact_name_item}>Điều lệ</div>
                            <div className ={classes.contact_name_item}>liên hệ</div>
                        </div>
                    </div>
                    <div className={classes.footer_contact__contact}>
                        <h5 className={classes.contact_name}>liên hệ</h5>
                        <div><div className={classes.contact_name}>Email: Onehitkillall@gmail.com</div></div>
                    </div>
               </div>
           </div>
    )
}

export default Footer
