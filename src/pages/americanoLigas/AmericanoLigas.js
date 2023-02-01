import React, {useState, useEffect} from 'react'
import Header from '../../Components/nacionDeportes/Header'
import {Link} from 'react-router-dom';

const FutbolLigas = () => {
    const [showText, setShowText] = useState("")

    useEffect(() => {
        fetch(`https://alfred.to/reservas/spreadsheets/americano/highlights `, {
          headers: new Headers({
            'Authorization': 'Basic QWxmcmVkOlREODI0MThZYlBweCpuWDV4WDNrSlRrVFNeRTZndQ==',
          })
        })
          .then(response => response.json())
          .then(data => {
      
            // setShowDate(data.date)
            setShowText(data)
           
      
            
      
          })
            

          .catch(err => console.log(err));
      },[])

      console.log(showText)

      const propertyValues = Object.values(showText);
      
       
      const listShowButtonTeams = propertyValues.map(tienda =>
   <>
   <div style={{height: '96%', backgroundColor:'white', display: 'flex', width: '100%', flexDirection: 'column' }}>
    <div style={{height: '46%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
   <div className="container-general-futbol-ligas">
   <div className='container-image-text-header'>
        <div className='container-image'>
            <img className='ligaImage' src={tienda.playerImage} alt="" />
        </div>
        <div className='container-text-header'>
            <p style={{color:'white', fontSize: '140px', marginTop: '0px', fontWeight: 'bold'}}>{tienda.headerText}</p>
        </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
    <div className='container-highlights-info'>
            <p style={{color:'white', fontSize: '120px', marginTop: '0px'}}>{tienda.playerName}</p>
            <p style={{color:'white', fontSize: '110px', marginTop: '0px'}}>{tienda.text}</p>
   </div>
   </div>
   </div>
   </div>
   <div style={{height: '54%'}}>
            <div className='liga-futbol-boxes'>
            <Link to='/americano'> <img style={{width:'100%', height: '100%'}} src="https://alfred.to/media/cc_uat/app_deportes/nfl_home.png" alt="" /></Link></div>
            <div className='liga-futbol-boxes'>
            <Link to='/americano-nacional'> <img style={{width:'100%', height: '100%'}}  src="https://alfred.to/media/cc_uat/app_deportes/ncaa_home.png" alt="" /></Link>
            </div>
            
   </div>
   </div>
   </>
  
       )
  return (
    <div style={{height: '94vh', backgroundColor:'white'}}>
        <Header></Header>

        {listShowButtonTeams}
    </div>
  )
}

export default FutbolLigas