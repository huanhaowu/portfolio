import './App.css'

function App() {
  return (
      <>
          <div className="grid grid-cols-5 grid-rows-6 gap-4 min-h-120">
              <div className="col-span-3 row-span-4 bg-blue-600 rounded-xl flex items-center justify-center">1</div>
              <div className="col-span-2 row-span-2 col-start-4 bg-blue-600 rounded-xl flex items-center justify-center">2</div>
              <div className="row-span-2 col-start-1 row-start-5 bg-blue-600 rounded-xl flex items-center justify-center">6</div>
              <div className="col-span-3 row-span-2 col-start-2 row-start-5 bg-blue-600 rounded-xl flex items-center justify-center">13</div>
              <div className="row-span-4 col-start-5 row-start-3 bg-blue-600 rounded-xl flex items-center justify-center">14</div>
              <div className="row-span-2 col-start-4 row-start-3 bg-blue-600 rounded-xl flex items-center justify-center">15</div>
          </div>
      </>
  )
}

export default App
