import React from "react";

import './store.css'

function Store () {
    return(
        <>
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
        <div className="Suggestions">
            <h1>Suggestions</h1>
            <div className="Suggestion">
                <img src="https://img.freepik.com/premium-photo/indonesian-natural-scenery-with-green-rice-fields-sunny-morning-nature_80375-1006.jpg" alt="img" />
                <h1>Abdallah Mahmoud</h1>
                <button>Add</button>
            </div>
            <div className="Suggestion">
                <img src="https://menafn.com/updates/pr/2024-01/25/AWN_be688image_story.jpg" alt="img" />
                <h1>Mohamed Farrag</h1>
                <button>Add</button>
            </div>
            <div className="Suggestion">
                <img src="https://samajordan.com/images/thumbs/2021/05/49773_large.jpg" alt="img" />
                <h1>Mahmoud Badawe</h1>
                <button>Add</button>
            </div>
        </div>
        <div className="Recommendations"></div>
        <h1 className='name'>Recommendations</h1>
        <div className="Recommendation">
            <div className="Recommen">
                <img src="" alt="img" />
                <img src="" alt="img" />
            </div>
            <div className="Recommen">
                <img src="" alt="img" />
                <img src="" alt="img" />
            </div>
        </div>
        </>
    )
}

export default Store;