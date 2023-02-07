import React, {useState, useEffect} from 'react'
import Header from '../../Components/nacionDeportes/Header'
import Slider from 'react-slick';




const Americano = () => {
  const [showText, setShowText] = useState("")
  const [teamId, setTeamId] = useState(1)
  const [teamIdArray, setTeamIdArray] = useState(2)
  const [teamName, setTeamName] = useState("")
  const [teamNameApi, setTeamNameApi] = useState("")
  const [apiData, setApiData] = useState([]);
  const [index, setIndex] = useState(0);
  const [teamData, setTeamData] = useState(apiData.filter(data => data.teamId === teamId));
    
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
  fetch(`https://alfred.to/reservas/spreadsheets/match/futbol/${teamName}`, {
    headers: new Headers({
      'Authorization': 'Basic QWxmcmVkOlREODI0MThZYlBweCpuWDV4WDNrSlRrVFNeRTZndQ==',
    })
  })
    .then(response => response.json())
    .then(data => {

      // setShowDate(data.date)
      setTeamNameApi(data)
     

      

    })
      

    .catch(err => console.log(err));
},[teamName])

console.log('Team name Api', teamNameApi)
console.log(showText)
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
      
       console.log(showText)
   


       const settings = {
        
        dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
       };

     useEffect(() => {
    setIndex(0);
    setTeamData(apiData.filter(data => data.teamId === teamId));
  }, [teamId, apiData]);






    
      useEffect(() => {
        fetch(`https://alfred.to/reservas/spreadsheets/match/futbol/${teamName}`, {
          headers: new Headers({
            'Authorization': 'Basic QWxmcmVkOlREODI0MThZYlBweCpuWDV4WDNrSlRrVFNeRTZndQ==',
          })
        })
          .then(response => response.json())
          .then(data => {
      
            // setShowDate(data.date)
            setApiData(data)
           
      
            
      
          })
            
      
          .catch(err => console.log(err));
      },[teamName])

    const handlePrevClick = () => {
  if (index > 0) {
    setIndex(index - 1);
  }
};

const handleNextClick = () => {
  if (index < apiData.length - 1) {
    setIndex(index + 1);
  }
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
          <img style={{width: '100%', height: '100%'}} id={tienda.gameMatch}  className={tienda.id} src={tienda.teamLogo} alt="" />
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
  <p style={{fontSize:'140px', fontWeight: 'bold', fontFamily:'Montserrat'}}>Matches</p>
  <div style={{height:'20%'}}>
    <div>
    <div>
    {apiData.length > 0 && (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', backgroundColor: '#1880fe', borderRadius: '60px', position: 'relative', top: '70px', alignItems:'center' }}>
     <button style={{background:'#1880fe', border:'none'}} onClick={handlePrevClick}><img style={{height:'150px'}} src="https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_flecha%20_blanco_1-11.png" alt="" /></button>
    

    {apiData[index].teamAImage ? (
      <img style={{ width: '320px', height: '320px' }} src={apiData[index].teamAImage} alt="teamA" />
    ) : (
      <div style={{ width: '320px', height: '320px', backgroundColor: 'lightgray' }} />
    )}

    <img style={{ width: '250px', height: '150px' }} src="https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_vs.png" alt="" />

    {apiData[index].teamBImage ? (
      <img style={{ width: '320px', height: '320px' }} src={apiData[index].teamBImage} alt="teamB" />
    ) : (
      <div style={{ width: '320px', height: '320px', backgroundColor: 'lightgray' }} />
    )}
<button style={{background:'#1880fe', border:'none', width:'150px'}} onClick={handleNextClick}><img style={{height:'150px'}} src="https://alfred.to/media/cc_uat/app_deportes/iconos_navegacion_flecha%20_blanco_1-12.png" alt="" /></button>
    </div>
    <div style={{ background: '#c2c2c2', borderRadius: '40px', height: '338px', display: 'flex', flexDirection: 'column', lineHeight: 'initial', justifyContent: 'flex-end' }}>
      <p style={{ fontSize: '100px', fontWeight: 'bold', fontFamily: 'Montserrat' }}>
        {(() => {
          const dateText = apiData[index].dateText;
          if (!dateText) {
            return '';
          }
          const date = new Date(dateText);
          const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
          return date.toLocaleDateString('es-ES', options);
        })()}
      </p>
      <p style={{ fontSize: '100px', fontWeight: 'bold', fontFamily: 'Montserrat' }}>
        {apiData[index].timeText || ''}
      </p>
    </div>
</div>
      )}
      
      
    </div>
    </div>
  </div>

  </div>    </div>
  )
}

export default Americano