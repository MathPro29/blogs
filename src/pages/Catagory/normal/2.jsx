import React, { useContext, useState } from "react";
import myContext from "../../../context/data/myContext";
import Layout from "../../../components/layout/Layout";
import { useNavigate } from "react-router";

function ForumComponent() {
  const context = useContext(myContext);
  const { mode } = context;

  // State for form inputs
  const [fullName, setFullName] = useState("9999");
  const [commentText, setCommentText] = useState("↳ "+"");

  // State for forum posts
  const [forumPosts, setForumPosts] = useState([
    {
      id: 1,
      date: "13 Oct, 2024",
      title: "สวัสดีตอนเช้าครับ วันนี้ผมมีเรื่องอยากสอบถามพี่ๆทุกคน วันนี้ตอนเช้าพี่ๆกินข้าวกับอะไรครับ",
      UIDP: "8791",
      comments: [
        { UID: "4321", text: "↳ กินเจ อิ่มบุญสุดละครับ" },
        { UID: "7475", text: "↳ วันนี้ เรากินข้าวกับตุ๊กแกผัดเผ็ดค่ะ" },
      ],
    },
  ]);

  const navigate = useNavigate();

  const addComment = (e) => {
    e.preventDefault();

    // Create new comment object
    const newComment = {
      UID: fullName || "Anonymous", // Default to 'Anonymous' if no name is provided
      text: commentText,
    };

    // Update the forum post's comments
    setForumPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === 1 // Assuming we're adding comments to the first post
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );

    // Reset the form
    setFullName("9999");
    setCommentText("");
  };

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl">
          {/* Top Heading */}
          <div className="mb-5 flex justify-center items-center space-x-2" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>

            <h1
              className="text-center text-3xl font-bold"
              style={{ color: mode === "dark" ? "white" : "black" }}
            >
              สนทนาทั่วไป
            </h1>
          </div>

          {/* Main Content */}
          <div className="flex flex-col justify-center items-center mb-5" >
            {/* Forum Posts */}
            {forumPosts.length > 0 ? (
              <>
                {forumPosts.map((post) => (
                  <div className="mb-4 w-full max-w-2xl" key={post.id} style={{ background: mode === "dark" ? "#9BA4B5" : "white" }}>
                    {/* Top Items */}
                    <div className="p-6 border rounded-lg shadow-md">
                      {/* Blog Date */}
                      <h2
                        className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                      >
                        UID : {post.UIDP} {post.date}
                      </h2>

                      {/* Blog Title */}
                      <h1
                        className="title-font text-lg font-bold text-gray-900 mb-3"
                        style={{ color: mode === "dark" ? "white" : "#111827" }}
                      >
                        {post.title}
                      </h1>

                      {/* Blog Comments */}
                      {post.comments.map((comment, index) => (
                        <div key={index}>
                          <h2
                            className="tracking-widest text-xs title-font font-medium   text-gray-400  mb-1"
                          >
                            UID : {comment.UID} {post.date}
                          </h2>
                          <p
                            className="leading-relaxed mb-3"
                            style={{ color: mode === "dark" ? "#3F5895" : "#111827",
                              lineHeight: "1.6",
                              whiteSpace: "pre-line",
                            }}
                          >
                            {comment.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h1 className="text-xl font-bold">Not Found</h1>
            )}

            {/* Comment Form */}
            <form className="mb-6 w-full max-w-2xl" onSubmit={addComment}>
              {/* Full Name Input */}
              <div
                className="py-2 px-4 mb-4 rounded-lg rounded-t-lg 
                shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] border border-gray-200"
                style={{
                  background: mode === "dark" ? "#353b48" : "rgb(226, 232, 240)",
                }}
              >UID : 9999
              </div>

              {/* Text Area */}
              <div
                className="py-2 px-4 mb-4 rounded-lg rounded-t-lg 
                shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] border border-gray-200"
                style={{
                  background: mode === "dark" ? "#353b48" : "rgb(226, 232, 240)",
                }}
              >
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows={6}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400"
                  style={{
                    background: mode === "dark" ? "#353b48" : "rgb(226, 232, 240)",
                  }}
                  placeholder="Write a comment..."
                  required
                />
              </div>

              {/* Button */}
              <div className="">
                <button
                  type="submit"
                  style={{
                    background:
                      mode === "dark" ? "gray" : "#3B82F6",
                  }}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ForumComponent;
