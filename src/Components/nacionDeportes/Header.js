import React from 'react'
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div className='container-boxes'>
    <div className='container-box'>
        <div className='box'><Link to='/futbol-ligas'><img className='image-box' id='Bufalo Bils' src='https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_futbol.png' alt="" /></Link></div>
        <div className='box'><Link to='/americano-ligas'><img className='image-box' src='https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_nfl.png' alt="" /></Link></div>
        <div className='box'><img className='image-box' src='https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_basketball.png' alt="" /></div>
        <div className='box'><img className='image-box' src='https://alfred.to/media/cc_uat/app_deportes/baseball_icono.png' alt="" /></div>
        <div className='box'> <Link to='/futbol'><img className='image-box' src='https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_tenis.png' alt="" /></Link></div>
        <div className='box'><Link to='/americano'><img className='image-box' src='https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_f1.png' alt="" /></Link></div>
        <div className='box'><Link to='/'><img className='image-box' src='https://alfred.to/media/cc_uat/app_deportes/home.png' alt="" /></Link></div>
    </div>
</div>
  )
}

export default Header