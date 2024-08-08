import './App.css'
import { Compliance } from './components/compliance'
import { HotFix1 } from './components/hotFix1'
import { Members } from './components/members'
import { Membership } from './components/membership'
function App() {
  return (
    <div>
      <Compliance />
      <Membership />
      <HotFix1 />
      <Members />
    </div>
  )
}

export default App
