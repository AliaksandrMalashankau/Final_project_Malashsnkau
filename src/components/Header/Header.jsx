import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Widget from "../Widget/Widget";
import WidgetFavorites from "../Widget/WidgetFavorites";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { SlSocialVkontakte } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaViber } from "react-icons/fa";
import { HiOutlineQueueList } from "react-icons/hi2";


const Header = () => {
    let [cw1, setcw1] = useState(false);
    const location = useNavigate();

    const switchLokate = (category) => {
        // setFilter(category);
        location('/catalog');
    }

    return (
        <>
            <header>   
                <div className="container"> 
                    < div className="header_nav">
                        <div className="header_nav_logo">QPICK</div>  

                        <div className="header_nav_accordion">
                            <div><BsPhone/> Выбрать модель телефона <IoMdArrowDropdown onClick={() => setcw1((cw1 =    !cw1))} /></div>
                            {cw1 && (
                            <div className="phone_selection">
                                <div className="apple"><Link to={"/catalog"}>Apple</Link></div>
                            <ul>
                                <li onClick={() => switchLokate('/product/:id')}>iPhone 12 </li>
                                <li onClick={() => switchLokate('/product/:id')}>iPhone 12 Max</li>
                                <li onClick={() => switchLokate('/product/:id')}>iPhone 13</li>
                                <li onClick={() => switchLokate('/product/:id')}>iPhone 13 Pro Max</li>
                                <li onClick={() => switchLokate('/product/:id')}>iPhone 14</li>
                            </ul>
                            </div>
                            )}
                        </div>
                    
                        <div className="header_nav_widget">
                            <div className="widgetFavorites"><WidgetFavorites/></div>
                            <div ><Widget/></div> 
                            <div className="mobil">
                                <div><HiOutlineQueueList icon={['fal', 'code']} size="30px" onClick={() => setcw1((cw1 =    !cw1))} /></div>
                                {cw1 && (
                                <div className="phone_selection">
                                    <div className="apple"><Link to={"/catalog"}>Apple</Link></div>
                                <ul>
                                    <li onClick={() => switchLokate('/product/:id')}>iPhone 12 </li>
                                    <li onClick={() => switchLokate('/product/:id')}>iPhone 12 Max</li>
                                    <li onClick={() => switchLokate('/product/:id')}>iPhone 13</li>
                                    <li onClick={() => switchLokate('/product/:id')}>iPhone 13 Pro Max</li>
                                    <li onClick={() => switchLokate('/product/:id')}>iPhone 14</li>
                                </ul>
                                </div>
                                )}
                            </div>
                        </div>
                        
                       
                    </div>

                    <Outlet />
                    
                    <div className="footer">  
                        <div className="header_nav_logo">QPICK</div>                       
                        <div className="footer_wwl">
                            <li>
                                <Link to="/cardFavorites">Избранное</Link>
                            </li>
                            <li>
                                <Link to="/card">Корзина</Link> 
                            </li>
                            
                            <li>
                                <Link to={"/сontacts"}>Контакты</Link>
                            </li>                       
                        </div>
                        <div>
                            <li>
                                <Link to={"service"}>Условия сервиса</Link>
                            </li>
                            <ul className="footer_language">
                                <li><AiOutlineGlobal/></li>
                                <li>Каз</li>
                                <li className='rus'>Рус</li>
                                <li>Eng</li>
                            </ul>
                        </div>
                        <div className="footer_social">
                            <ul>
                                <a href='https://vk.com/'target="_blank"><SlSocialVkontakte/></a>
                                <a href='https://www.instagram.com/'target="_blank"><SlSocialInstagram/></a>
                                <a href='https://web.telegram.org/a/'target="_blank"><PiTelegramLogoLight/></a>
                                <a href='https://www.viber.com/ru/'target="_blank"><FaViber/></a>
                            </ul>
                        </div>
                    </div>
                </div>
             
            </header>
            
        </>
    );
};

export default Header;
