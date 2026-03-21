import { router } from './app.routes'
import { RouterProvider } from 'react-router'
import "./features/shared/styles/global.scss"
import { AuthProvider } from './features/auth/auth.context'
import { SongContextProvider } from './features/home/song.context'
import { UploadSongProvider } from './features/song/uploadSong.context'

const App = () => {
  return (
    <AuthProvider>
      <UploadSongProvider>

      <SongContextProvider>
        <RouterProvider router={router} />
      </SongContextProvider>
      </UploadSongProvider>
    </AuthProvider>
  )
}

export default App