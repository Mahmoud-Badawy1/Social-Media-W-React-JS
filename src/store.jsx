import React from "react";
import Suggestion from './Suggestion'

import './store.css'

function Store () {
    return(
        <div className="all">
        <div className="stor">
            <h1>Stories</h1> 
            <div className="fle">
            <div className="storeImg">
                <img src="https://i.ytimg.com/vi/Fv9mruaL8eI/maxresdefault.jpg" alt="img" />
                <div className="storeName">
                    <h1 className="head">Mohamed Farrag</h1>
                    <img src="https://menafn.com/updates/pr/2024-01/25/AWN_be688image_story.jpg" alt="img" width={100} />
                </div>
            </div>
            <div className="storeImg">
            <img src="https://wallpaperaccess.com/full/2748606.jpg" alt="img" />
                <div className="storeName">
                    <h1 className="head">Mahmoud Badawe</h1>
                    <img src="https://samajordan.com/images/thumbs/2021/05/49773_large.jpg" alt="img" />
                </div>
            </div>
            </div>
        </div>
        <div className="Suggestion"><Suggestion /></div>

        </div>
    )
}

export default Store;


// import React from "react";

// function Store() {
//     return (
//         <>
//             <div className="mt-20 mb-10 ml-80 text-4xl font-bold">Stories</div>
//             <div className="flex ml-20">
//                 <div className="flex flex-col items-center justify-center mr-16">
//                     <div className="relative">
//                         <img src="https://i.ytimg.com/vi/Fv9mruaL8eI/maxresdefault.jpg" alt="img" className="w-64 h-96 rounded-lg border border-gray-700" />
//                         <div className="absolute bottom-8 left-0 w-full bg-white p-4 rounded-lg">
//                             <h1 className="text-xl font-bold">Mohamed Farrag</h1>
//                             <img src="https://menafn.com/updates/pr/2024-01/25/AWN_be688image_story.jpg" alt="img" className="w-16 h-16 rounded-full absolute top-1/2 left-4 transform -translate-y-1/2" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center">
//                     <div className="relative">
//                         <img src="https://wallpaperaccess.com/full/2748606.jpg" alt="img" className="w-64 h-96 rounded-lg border border-gray-700" />
//                         <div className="absolute bottom-8 left-0 w-full bg-white p-4 rounded-lg">
//                             <h1 className="text-xl font-bold">Mahmoud Badawe</h1>
//                             <img src="https://samajordan.com/images/thumbs/2021/05/49773_large.jpg" alt="img" className="w-16 h-16 rounded-full absolute top-1/2 left-4 transform -translate-y-1/2" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="mt-20 mb-10 ml-80 text-4xl font-bold">Suggestions</div>
//             <div className="flex ml-20">
//                 <div className="flex flex-col items-center justify-center mr-16">
//                     <img src="https://img.freepik.com/premium-photo/indonesian-natural-scenery-with-green-rice-fields-sunny-morning-nature_80375-1006.jpg" alt="img" className="w-64 h-64 rounded-full border border-gray-700" />
//                     <h1 className="text-xl font-bold">Abdallah Mahmoud</h1>
//                     <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg">Add</button>
//                 </div>
//                 <div className="flex flex-col items-center justify-center mr-16">
//                     <img src="https://menafn.com/updates/pr/2024-01/25/AWN_be688image_story.jpg" alt="img" className="w-64 h-64 rounded-full border border-gray-700" />
//                     <h1 className="text-xl font-bold">Mohamed Farrag</h1>
//                     <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg">Add</button>
//                 </div>
//                 <div className="flex flex-col items-center justify-center">
//                     <img src="https://samajordan.com/images/thumbs/2021/05/49773_large.jpg" alt="img" className="w-64 h-64 rounded-full border border-gray-700" />
//                     <h1 className="text-xl font-bold">Mahmoud Badawe</h1>
//                     <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg">Add</button>
//                 </div>
//             </div>
//             <div className="mt-20 mb-10 ml-80 text-4xl font-bold">Recommendations</div>
//             <div className="flex ml-20">
//                 <div className="flex flex-col items-center justify-center mr-16">
//                     <div className="flex">
//                         <img src="" alt="img" className="w-32 h-32 rounded-lg border border-gray-700 mr-8" />
//                         <img src="" alt="img" className="w-32 h-32 rounded-lg border border-gray-700" />
//                     </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center">
//                     <div className="flex">
//                         <img src="" alt="img" className="w-32 h-32 rounded-lg border border-gray-700 mr-8" />
//                         <img src="" alt="img" className="w-32 h-32 rounded-lg border border-gray-700" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Store;
