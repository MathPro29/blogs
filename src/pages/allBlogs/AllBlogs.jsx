import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@material-tailwind/react"; // อย่าลืม import Button

function AllBlogs() {
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;

  const navigate = useNavigate();
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl ">
          {/* Top Heading  */}
          <div className="mb-5">
            <h1
              className=" text-center text-2xl font-bold"
              style={{ color: mode === "dark" ? "white" : "black" }}
            >
              All Blogs
            </h1>
          </div>
          {/* Main Content  */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {/* Card 1  */}
            {getAllBlog.length > 0 ? (
              <>
                {getAllBlog.map((item, index) => {
                  const { thumbnail, id, date } = item;
                  console.log(item);
                  return (
                    <div className="p-4 md:w-1/3" key={index}>
                      <div
                        style={{
                          background:
                            mode === "dark" ? "rgb(30, 41, 59)" : "white",
                          borderBottom:
                            mode === "dark"
                              ? " 4px solid rgb(226, 232, 240)"
                              : " 4px solid rgb(30, 41, 59)",
                        }}
                        className={`h-full shadow-lg  hover:-translate-y-1 hover:shadow-gray-400
                                                ${
                                                  mode === "dark"
                                                    ? "shadow-gray-700"
                                                    : "shadow-xl"
                                                } 
                                                rounded-xl overflow-hidden`}
                      >
                        {/* Blog Thumbnail  */}
                        <img
                          className="w-full h-48 md:h-60 lg:h-72 object-cover"
                          src={thumbnail}
                          alt="blog"
                        />

                        {/* Top Items  */}
                        <div className="p-6">
                          {/* Blog Date  */}
                          <h2
                            className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                            style={{
                              color:
                                mode === "dark"
                                  ? "rgb(226, 232, 240)"
                                  : " rgb(30, 41, 59)",
                            }}
                          >
                            {date}
                          </h2>

                          {/* Blog Title  */}
                          <h1
                            className="title-font text-lg font-bold text-gray-900 mb-3"
                            style={{
                              color:
                                mode === "dark"
                                  ? "rgb(226, 232, 240)"
                                  : " rgb(30, 41, 59)",
                            }}
                          >
                            {item.blogs.title}
                          </h1>

                          {/* Blog Description  */}
                          <p
                            className="leading-relaxed mb-3"
                            style={{
                              color:
                                mode === "dark"
                                  ? "rgb(226, 232, 240)"
                                  : " rgb(30, 41, 59)",
                            }}
                          >
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                          <div className="flex justify-end">
                            <p
                              onClick={() => navigate(`/bloginfo/${id}`)}
                              className="cursor-pointer text-blue-500 hover:underline"
                            >
                              ดูโพสต์
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* See More Button  */}
                <div className="flex justify-center my-5">
                  <Link to={"/allblogs"}>
                    <Button
                      style={{
                        background:
                          mode === "dark"
                            ? "rgb(226, 232, 240)"
                            : "rgb(30, 41, 59)",
                        color:
                          mode === "dark"
                            ? "rgb(30, 41, 59)"
                            : "rgb(226, 232, 240)",
                      }}
                    >
                      See More
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-xl font-bold">Not Found</h1>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AllBlogs;