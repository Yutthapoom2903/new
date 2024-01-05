import './App.css'
import uploadLogo from './assets/upload.svg'

function App() {

  return (
    <>
      <div>
        <a href="">
          <img src={uploadLogo} className="logo" alt="Upload logo" />
        </a>
      </div>
      <h1>Upload File</h1>
      <div className="card">
        <input type="file" />
        <button>Upload File</button>
        <p>
          Plase upload your file
        </p>
      </div>
      <p className="read-the-docs">
        Example to upload your file
      </p>
    </>
  )
}

export default App
