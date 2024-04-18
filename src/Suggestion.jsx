import React from "react";

function Suggestion() {
    return(
        <div className="mb-20 text-4xl float-right">
        <h1>Suggestions</h1>
        <div className="Suggestion">
            <img 
            className="absolute transform -translate-y-1/2 w-5 h-8 rounded-full mt-4"
            src="https://img.freepik.com/premium-photo/indonesian-natural-scenery-with-green-rice-fields-sunny-morning-nature_80375-1006.jpg" alt="img" />
            <h1 className="ml-20 text-sm w-40 flex">Abdallah Mahmoud</h1>
            <button className="ml-10 text-lg bg-black rounded-lg text-white w-52 h-16 float-left">Add</button>
        </div>
        <div className="Suggestion">
            <img 
            className="absolute transform -translate-y-1/2 w-5 h-8 rounded-full mt-4"
            src="https://menafn.com/updates/pr/2024-01/25/AWN_be688image_story.jpg" alt="img" />
            <h1 className="ml-20 text-sm w-40 flex">Mohamed Farrag</h1>
            <button className="ml-10 text-lg bg-black rounded-lg text-white w-52 h-16 float-left">Add</button>
        </div>
       <div className="Suggestion">
            <img 
            className="absolute transform -translate-y-1/2 w-5 h-8 rounded-full mt-4"
            src="https://samajordan.com/images/thumbs/2021/05/49773_large.jpg" alt="img" />
            <h1 className="ml-20 text-sm w-40 flex">Mahmoud Badawe</h1>
            <button className="ml-10 text-lg bg-black rounded-lg text-white w-52 h-16 float-left">Add</button>
        </div>
    </div> 
    )
}

export default Suggestion