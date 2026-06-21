import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    
      <div className='Parent'>
      <Card User = "Charlie" age = {22} img = 'https://images.unsplash.com/photo-1704656513340-98ca6aa308f5?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card User = "Emiley" age = {20} img='https://images.unsplash.com/photo-1780656094819-b90e8d27fa15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjJ8fHxlbnwwfHx8fHw%3D' />
      </div>
    
  )
}

export default App
