export default function MenuItem(){
    return(
        <div className="bg-gray-200 p-4 rounded-lg text-center 
        group hover:bg-lb hover:shadow-xl hover:shadow-black/50 transition-all">
        <img src="/dosa.jpeg" alt="dosa" className="mx-auto"/>
        <h4 className="font-semibold text-xl my-3">Dosa</h4>
        <p className="text-gray-500 text-sm">Dosa is a traditional dish from South India. It's loved by Tamilians.</p>
        <button className="mt-4 bg-blue-500 text-white rounded-full px-8 py-2">Add to Cart $30</button>
      </div> 
    );

}