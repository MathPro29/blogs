import React, { useState, useContext } from "react";
import myContext from "../../../context/data/myContext";
import Layout from "../../../components/layout/Layout";
import { useNavigate } from "react-router";
import Modal from "react-modal";

// Set the root element for the modal
Modal.setAppElement("#root");

function CreateForumModal({ isOpen, onRequestClose, onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new post
    const newPost = {
      id: Date.now(), // Use current time as ID
      date: new Date().toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }),
      title,
      UIDP: "9999", // Replace with the correct UID
      UIDC1: "COMMENTER_1", // Replace with the correct UID
      comment1: description,
      UIDC2: "COMMENTER_2", // Replace with the correct UID
      comment2: "↳ ยังไม่มีการตอบกลับจากคนอื่น ๆ", // Sample reply
    };

    // Call the onCreate function to add the new post
    onCreate(newPost);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Create Forum"
      className="Modal w-full max-w-md mx-auto bg-white border border-gray-300 rounded-lg p-6"
      overlayClassName="Overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h1 className="text-2xl font-bold text-center mb-5">สร้างหัวข้อสนทนาใหม่</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-2">
          <span className="text-gray-700">หัวข้อ:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />
        </label>
        <label className="mb-2">
          <span className="text-gray-700">คำอธิบาย :</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            className="w-full border border-gray-300 p-2 rounded mb-4"
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          สร้าง
        </button>
      </form>
    </Modal>
  );
}

function ForumComponent() {
  const context = useContext(myContext);
  const { mode } = context;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [forumPosts, setForumPosts] = useState([
    {
      id: 1,
      date: "15 Oct, 2024",
      title: "ทำไมไม่มีสัปดาห์อ่านหนังสือคะ",
      UIDP: "1234",
      UIDC1: "4321",
      comment1: "↳ ไม่มีอ่ะ ตีล่ะ เดี๋ยวชีวิตว่างเกิน",
      UIDC2: "4231",
      comment2: "↳ ไม่อยากซ้ำ มันไม่เก๋",
    },
    {
      id: 2,
      date: "14 Oct, 2024",
      title:
        "สวัสดีตอนเช้าครับ วันนี้ผมมีเรื่องอยากสอบถามพี่ๆทุกคน วันนี้ตอนเช้าพี่ๆกินข้าวกับอะไรครับ",
      UIDP: "9584",
      UIDC1: "1721",
      comment1: "↳ กินเจ อิ่มบุญสุดละครับ",
      UIDC2: "4291",
      comment2: "↳ วันนี้ เรากินข้าวกับตุ๊กแกผัดเผ็ดค่ะ",
    },
    {
      id: 3,
      date: "13 Oct, 2024",
      title:
        "อยากทราบว่า นักศึกษาสาขาวิทยาการคอมพิวเตอร์ซ่อมเครื่องปริ้นได้ทุกคนไหมครับ",
      UIDP: "8791",
      UIDC1: "4321",
      comment1: "↳ ได้ครับ เด็กวิทคอมเก่งคับ",
      UIDC2: "7475",
      comment2: "↳ ปริ้นได้ เเต่ซ่อมไม่ได้คับ",
    },
  ]);

  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Navigate to the new route: normal/normal1
    navigate(`/normal/${postId}`);
  };

  const handleCreatePost = (newPost) => {
    setForumPosts((prevPosts) => [...prevPosts, newPost]); // Add the new post to the array
  };

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl">
          {/* Top Heading */}
          <div className="mb-5 flex justify-center items-center">
            {" "}
            {/* Change justify-between to justify-center */}
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              <h1
                className="text-center text-3xl font-bold" // Ensure text-center class is applied
                style={{ color: mode === "dark" ? "white" : "black" }}
              >
                สนทนาทั่วไป
              </h1>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              สร้างหัวข้อใหม่
            </button>
          </div>
          <br />

          {/* Main Content */}
          <div className="flex flex-col justify-center items-center mb-5">
            {/* Forum Posts */}
            {forumPosts.length > 0 ? (
              forumPosts.map((post) => (
                <div
                  className="mb-4 w-full max-w-2xl cursor-pointer"
                  key={post.id}
                  onClick={() => handlePostClick(post.id)}
                >
                  <div className="p-6 border rounded-lg shadow-md" style={{ background: mode === "dark" ? "#9BA4B5" : "white" }}>
                    {/* ทำ if else สีบล็ก กลางวันขาว กลางคืน bg-blue-gray-800"*/}

                    {/* Blog Date */}
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      UID : {post.UIDP} {post.date}
                    </h2>
                    <h1 className="title-font text-lg font-bold mb-3"style={{ color: mode === "dark" ? "white" : "#111827" }}>
                      {post.title}
                    </h1>
                    {/* if else ตัวหนังสือtitle light mode=  text-gray-900 mb-3 darkmode = text-gray-300  #6B7280*/}
                    <p className="leading-relaxed mb-3"style={{ color: mode === "dark" ? "#3F5895" : "#111827" }}>{post.comment1}</p>
                    <p className="leading-relaxed mb-3"style={{ color: mode === "dark" ? "#3F5895" : "#111827" }}>{post.comment2}</p>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-xl font-bold">Not Found</h1>
            )}
          </div>
        </div>

        {/* Modal Component */}
        <CreateForumModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)} // Close modal
          onCreate={handleCreatePost} // Pass function to modal
        />
      </section>
    </Layout>
  );
}

export default ForumComponent;
