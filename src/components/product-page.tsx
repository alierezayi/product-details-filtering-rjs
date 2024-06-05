import white from "../assets/white.webp";
import yellow from "../assets/yellow.webp";
import red from "../assets/red.webp";
import black from "../assets/black.webp";
import { Link, useSearchParams } from "react-router-dom";

const imageUrls: Record<string, string> = {
  white,
  red,
  black,
  yellow,
};

const colorVariants = ["black", "white", "red", "yellow"];
const sizeVariants = ["xs", "s", "md", "l", "xl"];

function ProductPage() {
  const [searchParams, setSearchParams] = useSearchParams({
    color: "black",
    size: "md",
  });
  const selectedColor = searchParams.get("color");
  const selectedSize = searchParams.get("size");

  //   const navigate = useNavigate();
  //   const [selectedColor, setSelectedColor] = useState<string>("red");
  //   const [selectedSize, setSelectedSize] = useState<string>("md");

  //   useEffect(() => {
  // window.history.pushState(
  //   null,
  //   "",
  //   `?color=${selectedColor}&size=${selectedSize}`
  // );
  //     navigate(`?color=${selectedColor}&size=${selectedSize}`);
  //     window.location.search = `?color=${selectedColor}&size=${selectedSize}`;
  //   }, [selectedColor, selectedSize, navigate]);

  return (
    <main className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white flex items-center w-[96%] md:max-w-6xl rounded min-h-[75vm] py-10">
        <div className="flex-[2] flex flex-col xl:flex-row justify-center">
          <img
            src={imageUrls[selectedColor!]}
            alt=""
            className="w-[500px] h-[450px]"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold">T-shirt (Just do it)</h1>
          <section className="bg-blue-500 text-white inline-block px-2 py-1 rounded-full mt-3 mb-10">
            $20.00 USD
          </section>
          <div>
            <section className="mb-5">
              <h2 className="text-md uppercase mb-2">colors</h2>
              <div className="flex gap-2">
                {colorVariants.map((color) => (
                  <button
                    // to={`?${new URLSearchParams({
                    //   color,
                    //   size: selectedSize!,
                    // })}`}
                    key={color}
                    onClick={() =>
                      setSearchParams((params) => {
                        params.set("color", color);
                        params.set("size", selectedSize!);
                        return params;
                      })
                    }
                    className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                      selectedColor === color
                        ? "border-blue-500"
                        : "border-slate-200"
                    }`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </section>
            <section className="mb-5">
              <h2 className="text-md uppercase mb-2">sizes</h2>
              <div className="flex gap-2">
                {sizeVariants.map((size) => (
                  <Link
                    to={`?${new URLSearchParams({
                      color: selectedColor!,
                      size,
                    })}`}
                    key={size}
                    onClick={() =>
                      setSearchParams((params) => {
                        params.set("color", selectedColor!);
                        params.set("size", size);
                        return params;
                      })
                    }
                    className={`bg-gray-100 px-4 py-1 rounded-full border-2 ${
                      selectedSize === size
                        ? "border-blue-500"
                        : "border-slate-300"
                    }`}
                  >
                    {size.toUpperCase()}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
