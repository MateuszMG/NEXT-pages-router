import Image from "next/image";
import ImgSmile from "../../public/smile.png";
const src = "http://localhost:4001/images/smile.png";

export default function Photo() {
  return (
    <main>
      <h1>Photo</h1>
      <Image
        src={"/smile.png"}
        alt="default"
        width={600}
        height={200}
        priority
      />

      <h1>Responsive </h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Image
          alt="Mountains"
          src={ImgSmile}
          sizes="100vw"
          style={{
            width: "40%",
            height: "auto",
          }}
        />
      </div>

      {/* <br />
      <br />
      <br />

      <h1>Fill</h1>
      <br />
      <br />
      <br />

      <div
        style={{
          display: "grid",
          gridGap: "8px",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, auto))",
        }}
      >
        <div style={{ position: "relative", height: "400px" }}>
          <Image
            alt="Mountains"
            src={ImgSmile}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <Image
            alt="Mountains"
            src={ImgSmile}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div> */}

      <br />
      <br />
      <br />

      <h1>From server</h1>
      <br />
      <br />
      <br />

      <Image
        // loader={() => src}  // <= loader or next.config.js
        src={src}
        alt="default"
        width={400}
        height={200}
        priority
      />
    </main>
  );
}
