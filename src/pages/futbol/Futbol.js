import React, {useState, useEffect} from 'react'
import Header from '../../Components/nacionDeportes/Header'
import Slider from 'react-slick';




const Americano = () => {
  const [showText, setShowText] = useState("")
  const [teamId, setTeamId] = useState(1)
  const [teamIdArray, setTeamIdArray] = useState(2)
  const [teamName, setTeamName] = useState("")
    
    useEffect(() => {
        fetch(`https://alfred.to/reservas/spreadsheets/futbol/liga_mx`, {
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

function getTeamId(e){
    setTeamId(e.target.className)
    setTeamName(e.target.id)

  
}
console.log("teamName", teamName)
console.log('teamid', teamId)
useEffect(() => {
  if (Array.isArray(showText) && teamId) {
    const piso1 = showText.filter(tiendas => tiendas.hasOwnProperty('id') && tiendas.id === Number(teamId));
    setTeamIdArray(piso1)
    

  }
  else {
    console.log('message of error')
  }
},[showText, teamId])

const teamIdArraySellected = teamIdArray

let listShowButtonTeamss;
if (Array.isArray(teamIdArraySellected)) {
    listShowButtonTeamss = teamIdArraySellected.map(tienda =>
      <div style={{padding:'140px'}}>
        <div style={{display: 'flex', alignItems: 'center', height:'500px'}}>
        <img style={{width: '300px', height: '300px'}} src={tienda.teamLogo} alt="" /> 
         <div  style={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
          <div style={{marginLeft:'90px', lineHeight: 'initial', textAlign: 'start'}}>
          <p style={{color:'black', fontSize: '120px', fontWeight: 'bold'}}>MVP</p>
          <p style={{color:'black', fontSize: '100px', marginTop: '0px'}}>{tienda.team}</p>
          </div>
          <div>
          <img style={{width: '700px', position: 'relative', top: '340px', left:'128px'}} src={tienda.playerImage} alt="" />
          </div>
          </div>
          </div>
          <div style={{backgroundColor:'#c2c2c2'}}>
          <p style={{color:'white', fontSize: '120px', background: '#e41c42', paddingLeft: '40px', textAlign:'start',fontFamily:'Montserrat', fontWeight:'bold' }}>{tienda.player}</p>
          <p style={{color:'black', fontSize: '90px', textTransform: 'uppercase', paddingLeft: '120px', borderBottom:'10px solid #e41c42', textAlign:'start',fontFamily:'Montserrat', fontWeight:'bold' }}>Habilidades</p>
          <p style={{color:'black', fontSize: '90px', padding: '40px 0px 40px 120px', textAlign:'start', lineHeight: 'initial',fontFamily:'Montserrat', fontWeight:'100'}}>{tienda.skills.split(" | ").map(s => <p style={{fontWeight:'800', fontFamily:'Montserrat'}}>{s}</p>)}</p>      
          <div style={{display: 'flex', justifyContent: 'space-between', borderTop:'10px solid #e41c42'}}>
          <p style={{color:'black', fontSize: '90px', textTransform: 'uppercase', paddingLeft: '120px', textAlign:'start' ,fontFamily:'Montserrat', fontWeight:'bold'}}>valor en el mercado</p> 
          <p style={{color:'white', fontSize: '95px', padding: '20px', background:'#e41c42', borderRadius: '90px', fontWeight: 'bold', textAlign:'start',fontFamily:'Montserrat', textTransform: 'lowercase',}}>${tienda.marketPrice}</p>
          </div>  
          </div> 
             
      </div>
  )
}


 const propertyValues = Object.values(showText);
      
       
   


       const settings = {
        
        dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
       };
     
 

      
  return (
    <div style={{height: '94vh', backgroundColor: 'white'}}>
<Header></Header>
  <div style={{width: '100%', height: '96%', backgroundColor: 'white'}}>
   <div style={{display:'flex', justifyContent:'center'}}> <img style={{width: '800px', marginBottom:'120px'}} src="https://alfred.to/media/cc_uat/app_deportes/liga_mx/liga_mx.png" alt="" /></div>
  
   
    <Slider {...settings}>
    {propertyValues.map(tienda => (
      <div key={tienda.id}>
        <button onClick={getTeamId}  style={{width: '280px', height: '260px', fontSize: '40px', background:'white', padding: '20px', borderRadius: '60px'}}>
          <img style={{width: '100%', height: '100%'}}  className={tienda.id} src={tienda.teamLogo} alt="" />
        </button>
        <div>
          {tienda.name}
          <br />
          {tienda.description}
        </div>
      </div>
    ))}
  </Slider>

  <div className='listTextosoosososo'>{listShowButtonTeamss}</div>
  <p style={{display:'none', fontSize:'140px', fontWeight: 'bold', fontFamily:'Montserrat'}}>Matches</p>
  <div style={{display:'none', height:'20%', background: 'red'}}>
    <div></div>
  </div>

  </div>    </div>
  )
}

export default Americano