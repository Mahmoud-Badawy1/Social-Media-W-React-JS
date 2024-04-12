

import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import './AddPost.css'
import ImgComponent from "./imgComponent";
import Post from "./Post";

function AddPost() {
    const [postContent, setPostContent] = useState("");
    const [postedContent, setPostedContent] = useState({});
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleSend = () => {
        setPostedContent(prevState => ({
            ...prevState,
            [Date.now()]: postContent
        }));
        setPostContent("");
    };

    const handleEmojiSelect = (event, emojiObject) => {
        setPostedContent(prevState => ({
            ...prevState,
            [Date.now()]: { content: postContent + emojiObject.emoji }
        }));
    };

    return (
        <div className="addpost">
            <div className="tout">
                <div className="add">
                    <input
                        className="addp"
                        type="text"
                        placeholder="Share something"
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                    <button onClick={handleSend} className="but">Send</button>
                    <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="emoji">&#x1F603;</button>
                    {showEmojiPicker && (
                        <EmojiPicker
                            onEmojiClick={handleEmojiSelect}
                            pickerStyle={{
                                position: "absolute",
                                bottom: "50px",
                                right: "20px",
                                zIndex: 10,
                            }}
                        />
                    )}
                    <img
                        src="https://th.bing.com/th/id/R.2aa5ae92188f93fb4b5ee1ad6a0b5efb?rik=6vYVir79CfgGoA&pid=ImgRaw&r=0"
                        alt="er"
                    />
                </div>
                <div className="allbut">
                    <div className="button">
                        <div className="butt">
                            <button  className="butt">Img</button>
                            <img src="" alt="" />
                        </div>
                        <div>
                            {/* <ImgComponent /> */}
                        </div>
                        <div>
                            <button  className="butto">puplec</button>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Post postedContent={postedContent} />
            </div>
        </div>
    );
}

export default AddPost;

