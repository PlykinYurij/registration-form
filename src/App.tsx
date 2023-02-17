import { useState } from 'react'
import './App.scss'
import { FormContainer } from './components/Form/FormContainer'
import { MyGlobalContext } from './context/isStatusActiveContext'

function App() {
  const [isActiveStatus, setIsActiveStatus] = useState<boolean>(false)
    return (
      <MyGlobalContext.Provider value={{
        isActiveStatus,
        setIsActiveStatus
      }}>
      <div className="app">
        <FormContainer />
      </div>
      </MyGlobalContext.Provider>

  )
}

export default App
