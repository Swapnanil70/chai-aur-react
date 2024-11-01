import './App.css'
import Card from './components/Card'  
function App() {

  return (
    <>
      <h1 className='text-3xl font-bold bg-green-400
      text-white p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Neel" />
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="Mishtu" />
    </>
  )
}

export default App
