import { useRouter } from 'next/router'
import Image from 'next/image'
import gameBackground from '/levels/2.png'
import React from 'react';
import Map from '/src/Map.js'

const Game = () => {

  const router = useRouter()
  const { gid } = router.query

  return (
    <div>
        <p>Game: {gid}</p>

        <Image src={gameBackground} width='700' height='600'  usemap="#gamemap" />
        <Map/>
    </div>
  );
}

export default Game
