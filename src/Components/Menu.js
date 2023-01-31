import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

const Menu = () => {
    const [showText, setShowText] = useState("")
    const [categori, setCategori] = useState("")
    useEffect(() => {
        fetch(`https://alfred.to/reservas/spreadsheets/${categori}`, {
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
      },[categori])

      console.log(showText)
      console.log(categori)
      function americano(){
        setCategori('americano')
      }

      function baloncesto(){
        setCategori('baloncesto')
      }

      function futbol (){
        setCategori('futbol')

      }

      function f1 (){
        setCategori('f1')
      }
      const propertyValues = Object.values(showText);
       
      const listShowText = propertyValues.map(tienda =>
   
       <div>
         <p style={{fontSize:'70px', color: 'white'}}>{tienda.sportCategory}</p>
         <p style={{fontSize:'70px', color: 'white'}}>{tienda.text}</p>
       </div>
       )
  return (
    <div style={{height: '100%', display:'flex', alignItems: "center", flexDirection:'column', backgroundImage: 'url(https://alfred.to/media/cc_uat/app_deportes/back.png)'}}>
           
    <div style={{ width: '100%', height: '40%', display: 'flex', justifyContent: 'space-around', alignItems:'center', flexDirection: 'column'}}>
        <div style={{ height: '40%', width: '90%', borderRadius: '50px'}}>
          
           <Link to='/futbol-ligas' onClick={futbol} ><img src="https://alfred.to/media/cc_uat/app_deportes/futbol.png" alt="" style={{width: '100%'}} /></Link>
        </div>
        <div style={{ height: '40%', width: '90%', borderRadius: '50px'}}>
       <Link to='/americano-ligas' onClick={americano}><img src="https://alfred.to/media/cc_uat/app_deportes/nfl.png" alt="" style={{width: '100%'}} /></Link> 
        </div>
    </div>
    <div style={{width: '100%', height: '40%', display: 'flex', justifyContent: 'space-evenly', alignItems:'center', flexDirection: 'column'}}>
        
        <div style={{width: '100%', height: '40%', display: 'flex', justifyContent: 'space-evenly'}}>
        <div style={{ width: '45%', borderRadius: '50px'}}>
       <button onClick={baloncesto} style={{ width: '100%', backgroundColor: 'transparent', border: 'none'}}> <img src="https://alfred.to/media/cc_uat/app_deportes/basketball.png" alt="" style={{width: '100%'}} /></button>

        </div>
        <div style={{  width: '45%', borderRadius: '50px'}}>
       <button style={{ width: '100%', backgroundColor: 'transparent', border: 'none'}}> <img src="https://alfred.to/media/cc_uat/app_deportes/baseball.png" alt="" style={{width: '100%'}} /></button>

        </div>
        </div>
        <div style={{width: '100%', height: '40%', display: 'flex', justifyContent: 'space-evenly'}}>
        <div style={{ width: '45%', borderRadius: '50px'}}>
       <button style={{ width: '100%', backgroundColor: 'transparent', border: 'none'}}> <img src="https://alfred.to/media/cc_uat/app_deportes/tenis.png" alt="" style={{width: '100%'}} /></button>

        </div>
        <div style={{ width: '45%', borderRadius: '50px'}}>
       <button onClick={f1} style={{ width: '100%', backgroundColor: 'transparent', border: 'none'}}> <img src="https://alfred.to/media/cc_uat/app_deportes/f1.png" alt="" style={{width: '100%'}} /></button>

        </div>
        </div>
        
    </div>
    <div style={{height:'20%', width: '100%',  display: 'flex', justifyContent: 'center', alignItems: "center"}}>
        <div style={{width: '90%', height: '100%',  borderRadius: '50px', display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column'}}>
            <img src="https://alfred.to/media/cc_uat/app_deportes/resutados_home.png" alt="" style={{width:'50%'}} />
            <div style={{width:'1846px', height:'480px', background: '#04172e', borderRadius: '70px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
            {listShowText}
            </div>
        </div>
    </div>
</div>
  )
}

export default Menu