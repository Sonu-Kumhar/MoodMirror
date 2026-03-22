import React from 'react'
import FaceExpression from '../../expression/components/FaceExpression'
import Player from '../components/Player'
import { useSong } from '../hooks/useSong'
import UploadButton from '../components/UploadButton'

const Home = () => {

  const { handleGetSong } = useSong()

  return (
    <>

      <FaceExpression
        onClick={(expression) => {
          handleGetSong({ mood: expression })
        }}
      />
      <UploadButton />
      <Player />
    </>
  )
}

export default Home