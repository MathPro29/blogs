import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";
import Layout from "../../../components/layout/Layout";
import { useNavigate } from "react-router";

function ForumComponent() {
  const context = useContext(myContext);
  const { mode } = context;

  const forumPosts = [
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
      title: "อยากทราบว่า นักศึกษาสาขาวิทยาการคอมพิวเตอร์ซ่อมเครื่องปริ้นได้ทุกคนไหมครับ",
      UIDP: "8791",
      UIDC1: "4321",
      comment1: "↳ ได้ครับ เด็กวิทคอมเก่งคับ",
      UIDC2: "7475",
      comment2: "↳ ปริ้นได้ เเต่ซ่อมไม่ได้คับ",
    },
  ];

  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Navigate to the new route: normal/normal1
    navigate(`/normal/${postId}`);
  };

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl">
          {/* Top Heading */}
          <div className="mb-5 flex justify-center items-center space-x-2">
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
          <div className="flex flex-col justify-center items-center mb-5">
            {/* Forum Posts */}
            {forumPosts.length > 0 ? (
              <>
                {forumPosts.map((post) => (
                  <div
                    className="mb-4 w-full max-w-2xl cursor-pointer"
                    key={post.id}
                    onClick={() => handlePostClick(post.id)} // Handle click
                  >
                    {/* Top Items */}
                    <div className="p-6 border rounded-lg shadow-md">
                      {/* Blog Date */}
                      <h2
                        className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                        style={{
                          color:
                            mode === "dark"
                              ? "rgb(226, 232, 240)"
                              : "rgb(30, 41, 59)",
                        }}
                      >
                        UID : {post.UIDP} {post.date}
                      </h2>

                      {/* Blog Title */}
                      <h1
                        className="title-font text-lg font-bold text-gray-900 mb-3"
                        style={{
                          color:
                            mode === "dark"
                              ? "rgb(226, 232, 240)"
                              : "rgb(30, 41, 59)",
                        }}
                      >
                        {post.title}
                      </h1>

                      {/* Blog Description */}
                      <h2
                        className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                        style={{
                          color:
                            mode === "dark"
                              ? "rgb(226, 232, 240)"
                              : "rgb(30, 41, 59)",
                        }}
                      >
                        UID : {post.UIDC1} {post.date}
                      </h2>
                      <p
                        className="leading-relaxed mb-3"
                        style={{
                          color:
                            mode === "dark"
                              ? "rgb(226, 232, 240)"
                              : "rgb(30, 41, 59)",
                          lineHeight: "1.6",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {post.comment1}
                      </p>
                      <h2
                        className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                        style={{
                          color:
                            mode === "dark"
                              ? "rgb(226, 232, 240)"
                              : "rgb(30, 41, 59)",
                        }}
                      >
                        UID : {post.UIDC2} {post.date}
                      </h2>
                      <p
                        className="leading-relaxed mb-3"
                        style={{
                          color:
                            mode === "dark"
                              ? "rgb(226, 232, 240)"
                              : "rgb(30, 41, 59)",
                          lineHeight: "1.6",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {post.comment2}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h1 className="text-xl font-bold">Not Found</h1>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ForumComponent;
