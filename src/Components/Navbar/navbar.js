import React from "react";
import "./styles.css";
import { FaFolderOpen } from "react-icons/fa";
import { AiOutlineRise, AiOutlineSetting } from "react-icons/ai";
import { SiCircle } from "react-icons/si";
import { BiNote } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
        <div className="navbarContainer">
          <div className="navbarContent1">
            <div className="navbarLogoContent">
  
              <div className="navbarLogoOne">AEROSPACE</div>
              <div className="navbarLogoTwo">AGRO</div>
            </div>
            <div className="navbarLinksContent">
              <a className="navbarLink" href="/area">
                <FaFolderOpen className="navbarIcon" />
                Мои поля
              </a>
              <a className="navbarLink" href="/diagnostics">
                <AiOutlineRise className="navbarIcon" />
                Диагностика
              </a>
              <a className="navbarLink" href="/recomendation">
                <SiCircle className="navbarIcon" />
                Рекомендации
              </a>
              <a className="navbarLink" href="/note">
                <BiNote className="navbarIcon" />
                Заметки
              </a>
            </div>
          </div>
          <div className="navbarContent2">
            <div className="navbarLinksContent2">
              <a className="navbarLink2" href="/profile">
                <CgProfile className="navbarIcon2" />
                Профиль
              </a>
              <a className="navbarLink2" href="/notefication">
                <IoMdNotificationsOutline className="navbarIcon2" />
                Уведомления 5
              </a>
              <a className="navbarLink2" href="/setting">
                <AiOutlineSetting className="navbarIcon2" />
                Настройки
              </a>
            </div>
          </div>
        </div>
  );
};

export default Navbar;
