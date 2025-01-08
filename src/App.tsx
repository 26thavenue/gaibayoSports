

import './App.css'
import Button from './components/Button'

function App() {

  return (
    <>
      <Button
        size="medium"
        buttonName="Click Me"
        buttonType="primary"
        onClick={() => alert('Clicked!')}   
            />
      {/* <Card/> */}
    </>
  )
}

export default App
