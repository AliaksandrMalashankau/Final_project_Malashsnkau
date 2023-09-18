import { SlSocialVkontakte } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaViber } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";


const Contacts = () => {
  return (
    // <div className="container">    
      <div className='footer_contact'>
        <div className='footer_contact_map'> 
            <h2>Наш офис</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5813.50428864953!2d76.82137964430711!3d43.23565600093414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369df8337f677%3A0x1573d43498f5594e!2z0JDQutGB0LDQuS0z0LAsINCQ0LvQvNCw0YLRiywg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2sby!4v1694420580751!5m2!1sru!2sby" ></iframe>
            <p><IoLocationOutline/>Аксай-3а, 62ф, Алматы, Казахстан</p>
            <div className='footer_contact_tel'><BsFillTelephoneFill/>+7 777 777 77 77</div>
          </div>
          <div className='footer_contact_social' >
            <a href='https://vk.com/'target="_blank"><SlSocialVkontakte icon={['fal', 'code']} size="60px"/></a>
            <a href='https://www.instagram.com/'target="_blank"><SlSocialInstagram icon={['fal', 'code']} size="60px"/></a>
            <a href='https://web.telegram.org/a/'target="_blank"><PiTelegramLogoLight icon={['fal', 'code']} size="60px"/></a>
            <a href='https://www.viber.com/ru/'target="_blank"><FaViber icon={['fal', 'code']} size="60px"/></a>
          </div>
      </div>
    // </div>    
  );
};

export default Contacts;
