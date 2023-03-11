import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiPhoneCall } from 'react-icons/fi';  

const Footer = () => (
    <footer className="footer">
        <div className="grid grid-cols-1  lg:grid-cols-2">
            <div className='p-4'>
                <h1 className="underline mb-6 text-sm font-semibold text-black-500 uppercase dark:text-black-400">CONTACT</h1>
                <ul className="text-base text-gray-500 dark:text-gray-400">
                    <div className="mb-4">
                        <p><FiMapPin />2 Avenue louis martins</p>
                    </div>
                    <div className="mb-4">
                        <p><FiMail />furmitures@hotmail.fr</p>
                    </div>
                    <div className="mb-4">
                        <p><FiPhoneCall />03.22.33.44.88</p>
                    </div>
                </ul>
            </div>
            <div className='p-4'>
                <h1 className="underline mb-6 text-sm font-semibold text-black-500 uppercase dark:text-black-400">RESAUX</h1>
                <ul className="text-base text-black-500 dark:text-black-400">
                    <li className="mb-4">
                        <p>@furnitures.meubles</p>
                    </li>
                    <li className="mb-4">
                        <p>@furnitures_meubles</p>
                    </li>
                    <li className="mb-4">
                        <p>facebook_account</p>
                    </li>
                </ul>
            </div>            
        </div> 
    
  
    </footer>
);
  
export default Footer;