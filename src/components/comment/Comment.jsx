import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Comment({
  addComment,
  commentText,
  setcommentText,
  allComment,
  // fullName,
  setFullName,
}) {
  const context = useContext(myContext);
  const { mode } = context;

  // Set fullName explicitly to "ID : 9999"
  const fullName = "ID : 9999";

  console.log(allComment);
  return (
    <section className=" py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-3">
          <h2
            className="text-lg lg:text-2xl font-bold"
            style={{ color: mode === "dark" ? "white" : "black" }}
          >
            Make Comment
          </h2>
        </div>
        {/* Comment Form  */}
        <form className="mb-6">

          <div
            className="py-2 px-4 mb-4 rounded-lg rounded-t-lg 
            shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] border border-gray-200"
            style={{
              background: mode === "dark" ? "#353b48" : "rgb(226, 232, 240)",
            }}
          >
            <input
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 "
              style={{
                background: mode === "dark" ? "#353b48" : "rgb(226, 232, 240)",
              }}
            />
          </div>

          {/* Text Area  */}
          <div
            className="py-2 px-4 mb-4 rounded-lg rounded-t-lg 
          shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] border border-gray-200 "
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
              onChange={(e) => setcommentText(e.target.value)}
              className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 "
              style={{
                background: mode === "dark" ? "#353b48" : "rgb(226, 232, 240)",
              }}
              placeholder="Write a comment..."
              required
              defaultValue={""}
            />
          </div>
          {/* Button  */}
          <div className="">
            <Button
              onClick={addComment}
              style={{
                background:
                  mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
                color:
                  mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
              }}
            >
              Post comment
            </Button>
          </div>
        </form>
     

         {/* Displaying Comments */}
         {allComment.length > 0 && (
          <article
            className="p-6 mb-6 text-base rounded-lg border border-gray-500 shadow"
            style={{
              background: mode === "dark" ? "#353b48" : "#FFFFFF",
            }}
          >
            <p className="inline-flex items-center mr-3 text-lg "style={{ color: mode === "dark" ? "white" : "black" }}
                      >Comment</p>
            {allComment.map((item, index) => {
              const { date, commentText } = item;
              return (
                <div key={index}>
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center my-2 bg-black px-3 py-2 rounded-lg bg-opacity-70">
                      <p
                        className="inline-flex items-center mr-3 text-xs"
                        style={{ color: mode === "dark" ? "#FFF8F3" : "#FFF8F3" }}
                      >
                        {fullName}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: mode === "dark" ? "#FFF8F3" : "#FFF8F3" }}
                      >
                        {date}
                      </p>
                    </div>
                  </footer>
                  <p
                    className="text-gray-500 dark:text-gray-400 text-md m-1"
                    style={{ color: mode === "dark" ? "white" : "black" }}
                  >
                    ↳ {commentText}
                  </p>
                </div>
              );
            })}
          </article>
        )}
      </div>
    </section>
  );
}

export default Comment;
