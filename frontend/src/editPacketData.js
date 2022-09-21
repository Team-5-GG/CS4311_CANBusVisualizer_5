const goHome = event => {
    window.location.href='./'
};

function EditPacket() {
  return (
    <body class="">
    <div>
        <nav>
                <div className="divide-x">
                    <button onClick={goHome} className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-0 px-4 squared">
                        Home
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-0 px-4 squared">
                        File
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-0 px-4 squared">
                        Edit
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-black font-bold py-0 px-4 squared">
                        View
                    </button>
                </div>   
        </nav>

        <main class ="text-center">            
            <div class="flex justify-center pt-7">
                <form class="bg-gray-300 shadow-2xl rounded px-8 pt-4 pb-8" action="#">
                    <header>
                <h2 class="text-gray-900 text-2xl  font-semibold">Edit Packet Data</h2>
                </header>
                <br></br>
                    <div class="mb-8">
                        <label class="text-black text-sm font-bold flex justify-start" for="neededInput">
                            Source:
                        </label>
                        <input class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="source" placeholder="Source"></input>
                    </div>

                    <div class="mb-8">
                        <label class="text-black text-sm font-bold flex justify-start" for="neededInput">
                            Destination:
                        </label>
                        <input class="border rounded w-full py-2 px-3 text-gray-700 mb-0 leading-tight focus:outline-none focus:shadow-outline" type="text" id="destination" placeholder="Destination"></input>
                    </div>

                    <div class="mb-8">
                        <label class="text-black text-sm font-bold flex justify-start" for="neededInput">
                            Decoded Physical Address:
                        </label>
                        <input class="border rounded w-full py-2 px-3 text-gray-700 mb-0 leading-tight focus:outline-none focus:shadow-outline" type="text" id="decodedPA" placeholder="Decoded Physical Address"></input>
                    </div>

                <div class="flex space-x-2">
                <input class="bg-white hover:bg-blue-700 text-black font-semibold py-0 px-4 rounded" type="submit" value="Something"></input>
                <input class="bg-white hover:bg-blue-700 text-black font-semibold py-0 px-4 rounded" type="submit" value="Exit"></input>
                <input class="bg-white hover:bg-blue-700 text-black font-semibold py-0 px-4 rounded" type="submit" value="Save and Exit"></input>
                <input class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-0 px-4 rounded" type="submit" value="Send to Bus"></input>
                </div>
                </form>
            </div>
        </main>
    </div>
    </body>
  );
}

export default EditPacket;
