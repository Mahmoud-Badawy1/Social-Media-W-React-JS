import React, { useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import './AddPost.css'
import ImgComponent from "./imgComponent";
import Post from "./Post";

function AddPost() {
    const [postContent, setPostContent] = useState("");
    const [postedContent, setPostedContent] = useState({});
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);

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

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handleFileUpload = (e) => {
        // يمكنك معالجة تحميل الملف هنا
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
                    <button
                        className="emoji"
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                        😊
                    </button>
                    {showEmojiPicker && (
                        <EmojiPicker
                            onEmojiClick={handleEmojiSelect}
                        />
                    )}
                    <img
                        src="https://th.bing.com/th/id/R.2aa5ae92188f93fb4b5ee1ad6a0b5efb?rik=6vYVir79CfgGoA&pid=ImgRaw&r=0"
                        alt="er"
                    />
                </div>
                <div>
                    <div className="button">
                        <div className="butt">
                        <label htmlFor="file" className="shareOption">
                            <span className="shareOptionText">Photo</span>
                        </label>
                        <input
                            style={{ display: "none" }}
                            type="file"
                            id="file"
                            accept=".png,.jpeg,.jpg"
                            ref={fileInputRef} // استخدم useRef هنا
                            onChange={handleFileUpload} // استخدم handleFileUpload بدلاً من setFile
                        />
                        </div>
                        <div>
                            <button  className="butto">puplec</button>
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <Post postedContent={postedContent} />
            </div> */}
        </div>
    );
}

export default AddPost;


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPosts, addPost } from '../redux/slices/postsSlice';
// import { toast } from 'react-toastify';

// const AddPostWidget = () => {
//   const dispatch = useDispatch();
//   const [content, setContent] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const { status, error, posts } = useSelector((state) => state.posts);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   const handleAddPost = async () => {
//     if (!content) {
//       toast.error('Please enter some content before posting.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('content', content);
//     if (selectedImage) {
//       formData.append('images', selectedImage);
//     }

//     try {
//       await dispatch(addPost(formData));
//       setContent('');
//       setSelectedImage(null);
//     } catch (error) {
//       // Error handling is already done in the addPost async thunk
//     }
//   };

//   return (
//     <div className="w-full bg-gray-100 shadow-md p-4 rounded-lg relative">
//         <div className="w-full bg-white shadow-md p-4 rounded-lg flex">
//       {/* Profile Picture */}
//       <div className="w-16 h-16 rounded-full bg-gray-200 left-4 top-4"></div>
//       <textarea
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         placeholder="Share something..."
//         className="flex-1 bg-white rounded-lg p-2 pl-20 focus:outline-none focus:ring focus:border-blue-300 mb-4 relative"
//       ></textarea>
//               </div>
//       <div className="flex items-center justify-between mb-4">
//         {/* Image Upload Button */}
//         <label htmlFor="imageUpload" className="cursor-pointer">
//           <img
//             src="./src/SVGs/Pictures Folder.svg"
//             alt="Upload"
//             className="h-6 w-6 cursor-pointer"
//           />
//           <input
//             type="file"
//             id="imageUpload"
//             className="hidden"
//             accept="image/*"
//             onChange={(e) => setSelectedImage(e.target.files[0])}
//           />
//         </label>

//         {/* Privacy Dropdown */}
//         <div className="relative flex items-center">
//           <img
//             src="./src/SVGs/Earth Planet.svg"
//             alt="Privacy"
//             className="h-6 w-6 mr-2"
//           />
//           <select
//             className="bg-[#fff6df] px-2 py-1 rounded-md"
//             name="privacy"
//             id="privacy"
//           >
//             <option value="">Public</option>
//             <option value="">Friends</option>
//             <option value="">Only Me</option>
//           </select>
//         </div>
//         {/* Send Button */}
//         <button
//           onClick={handleAddPost}
//           className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
//         >
//           Send
//         </button>
//       </div>
//       {/* Loading/Error Messages */}
//       {status === 'loading' && <p>Loading...</p>}
//       {status === 'failed' && <p>Error: {error}</p>}
//       {/* Display Posts */}
//       {posts.map((post) => (
//         <div key={post.id} className="bg-white rounded-lg p-4 mt-4 shadow">
//           <p>{post.content}</p>
//           {post.images && (
//             <img src={post.images[0]} alt="Post Image" className="mt-2 rounded-lg" />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AddPostWidget;