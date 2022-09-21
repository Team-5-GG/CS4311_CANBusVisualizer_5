import './editPacket.css';

const goHome = event => {
    window.location.href='./'
};

function reroute() {
  window.location.href = './editPacket'
};

export function MainPage() {

  return (
    <body class="">
      <div>
    <nav>
      <div class="divide-x">
          <button onClick={goHome} class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-0 px-4 squared">
              Home
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-0 px-4 squared">
              File
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-0 px-4 squared" onClick={reroute}>
              Edit
          </button>
          <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-0 px-4 squared">
              View
          </button>
      </div>   
   </nav>
  </div>
    </body>
  )
  
}
export default MainPage;