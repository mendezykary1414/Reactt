import React from 'react';
import "./header.css";
import fotopersonal from "./fotopersonal.png";
//import { Smartphone, LocationOn, EmailOutlined, AlternateEmailSharp } from '@material-ui/icons';

export default function Header() {
    return (
        <div className='header'>
            <div className="headerPhoto">
                <img src={fotopersonal} alt="foto-personal" className={"headerPhotoImg"} />
            </div>
            <div className="headerNombres">
                <h1>Duvan esteban mendez henao</h1>
                <p>analista y programador de SOFTWARE</p>
                <p>Msc. Ingeniería de sistemas y computación</p>
                <p>Desarrollador Web FullStack</p>
            </div>
            <div className="headerContacto">
                <ul className='contactList'>
                    <li className='contactListItem'><p></p>  <p>(+57) 3006343044</p></li>
                    <li className='contactListItem'><p></p>      <p>Pereira / Risaralda - Colombia</p></li>
                    <li className='contactListItem'><p></p> <p>demendez13@misena.edu.co</p></li>
                    <li className='contactListItem'><p></p> <p>mendezykary@gmail.com</p></li>
                </ul>
            </div>
        </div>
    );
}
