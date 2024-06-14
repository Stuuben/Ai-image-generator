import "./Gallery.css";

const generatedImages = [
  {
    id: 1,
    src: "car.png",
    alt: "car",
    phrase: "Supercar going superfast",
  },
  {
    id: 2,
    src: "hammer.png",
    alt: "hammer",
    phrase: "Thors hammer in the sky",
  },
  {
    id: 3,
    src: "/fire.png",
    alt: "Fire Phoenix",
    phrase: "Fire Phoenix spreading its wings",
  },
  {
    id: 4,
    src: "/ballon.png",
    alt: "ballon",
    phrase: "Red ballon",
  },
  {
    id: 5,
    src: "/valheim.png",
    alt: "Gamer playing Valheim in Valheim",
    phrase: "Gamer playing Valheim in Valheim",
  },
  {
    id: 6,
    src: "/cat.png",
    alt: "dog",
    phrase: "Happy cat on a stick",
  },
];

export const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="header">
        Example <span>Images</span>
      </h1>
      <div className="image-container">
        {generatedImages.map((image) => (
          <div className="image">
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              width={350}
            ></img>
            <p className="phrase">
              <i>{image.phrase}</i>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
