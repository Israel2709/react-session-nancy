import React, { useState } from 'react'
import './App.css'

import Navbar from './Components/Navbar/index'
import MainContent from './Components/MainContent/index'
import Button from './Components/Button/index'
//isLogged
function App() {
  const [ isLogged, setIsLogged ] = useState( false ) //[ nombreDelEstado, () => { actualizar el estado }]
  const [ title, setTitle ] = useState("Sesión de react")
  const [ namesList, setNamesList ] = useState([])
  const [ name, setName ] = useState("")
  /*
    const title = Sesión de react
    const setTitle = (value) => { this.setState({title:value})}
    */
  console.log( isLogged )

  const loginHandler = () => {
    setIsLogged( !isLogged )
  }

  const nameInputHandler = event => {
    const name = event.target.value
    setName( name )
  }

  const saveNameHandler = () => {
    setNamesList([...namesList, name ])
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <Button 
        isLogged = { isLogged }
        handler = { loginHandler }
        classList = { isLogged ? 'signout' : 'login'}
      />
      <Navbar />
      {
        isLogged && <MainContent />
      }
      <div>
        <div>
          <form action="">
            <label htmlFor="">Escribe un nombre</label>
            <input type="text" onChange = { nameInputHandler } />
            <button type="button" onClick = { saveNameHandler }>Guardar nombre</button>
          </form>
        </div>
        <div>
          <ul>
            {
              namesList.map( name => {
                return <li>{ name }</li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
