/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const products = [
    {
      id: 1,
      price: 4,
      name: "1 месяц",
      imageSrc: "https://i.ibb.co/FkTQVmK/photo1690445297.jpg",
      imageAlt: "1 месяц",
    },
    {
      id: 2,
      name: "6 месяцев",
      price: 22,
      imageSrc:
        "https://i.ibb.co/k29J6th/photo1690445300.jpg",
      imageAlt:
        "6 месяцев",
    },
    {
      id: 3,
      name: "1 год",
      price: 40,
      imageSrc:
        "https://i.ibb.co/hcHNHZW/photo1690445303.jpg",
      imageAlt:
        "1 год",
    },
  ];
  const router = useRouter();
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col text-center w-full mb-8">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ТВОЙ VPN БЕЗ ПРОБЛЕМ</h1>
    </div>
          <div className="grid  mx-auto gap-y-10 gap-x-30 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {products.map((product) => (
              <div
                onClick={() => {
                  router.push(`/items/${product.id}`);
                }}
                key={product.id}
                className="group text-sm"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 font-medium text-gray-900">
                  $ {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
