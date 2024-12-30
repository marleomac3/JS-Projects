import './App.css'
import WaveBackground from './WaveBackground'
import GameTitle from './GameTitle'
import GameBoard from './GameBoard'

function App() {

  return (
    <>
      <main className='relative'>
        <WaveBackground />
        <GameTitle />
        <GameBoard />
      </main>
    </>
  )
}

export default App
