import "./ImageGenerator.css";
import default_image from "../assets/dog.png";
import React, { useRef, useState } from "react";

export const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState("/");
  let inputRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;

  const click = () => {
    console.log("click", apiKey);
  };
  const imageGenerator = async () => {
    const description = inputRef.current.value;
    setLoading(true);

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        response_as_dict: true,
        attributes_as_list: false,
        show_original_response: false,
        num_images: 1,
        providers: ["openai"],
        text: description,
        resolution: "1024x1024",
      }),
    };

    fetch("https://api.edenai.run/v2/image/generation", options)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        const dataArray = responseData.openai.items[0].image_resource_url;
        setImageUrl(dataArray);
        setLoading(false);
        console.log("imgurl", imageUrl);
      })

      .catch((err) => console.error(err));
  };

  return (
    <div className="ai-image-generator">
      <div className="header">
        AI Image <span>Generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img
            src={imageUrl === "/" ? default_image : imageUrl}
            alt=""
            width={800}
          />
        </div>
        <div className="loading">
          <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
          <div className={loading ? "loading-text" : "display-none"}>
            Loading....
          </div>
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          placeholder="Describe What You Want To See"
          className="search-input"
        />
        <div>
          <button className="generate-btn" onClick={() => imageGenerator()}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};
