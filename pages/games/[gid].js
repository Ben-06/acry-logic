import { useRouter } from 'next/router'
import Map from '/comps/Map.js'

import Image from 'next/image'
import gameImg from '/public/levels/2.png'

const Game = () => {

  const router = useRouter()
  const { gid } = router.query

  const divStyle = {
    width :'700px',
    height:'600px',
    position:"relative"
  };

  return (
    <div>
        <p>Game: {gid}</p>
        <div style={divStyle}>      
          <Image
            src={gameImg}
            alt="Acry Logic"
            layout={"fill"} 
            useMap="#gamemap"
          />   
          <Map/>
        </div>
    </div>
  );
}

export default Game
