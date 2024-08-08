import './App.css'
import { Compliance } from './components/compliance'
import { HotFix1 } from './components/hotFix1'
import { HotFix2 } from './components/hotfix2Comp'
import { Members } from './components/members'
import { Membership } from './components/membership'
import { NComp1 } from './components/ncomp1'
function App() {
  return (
    <div>
      <Compliance />
      <Membership />
      <HotFix1 />
      <Members />
      <HotFix2 />
      <NComp1 />
    </div>
  )
}

export default App
