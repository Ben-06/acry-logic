import { useRouter } from 'next/router'
import Map from '/comps/Map.js'

import Image from 'next/image'
import gameImg from '/public/levels/1.jpg'

const Game = () => {

  const router = useRouter()
  const { gid } = router.query

  const divStyle = {
    width :'658px',
    height:'900px',
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
