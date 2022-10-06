import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeart,
  faSearch,
  faShoppingBag,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";




import { Link } from "react-router-dom";

const LandingPage = () => {
  const arrival = [
    {
      image:"https://i.ibb.co/s2KWYKF/p1.jpg"
    },
    {
      image:"https://i.ibb.co/dP3NNzG/p2.jpg"
    },
    {
      image:"https://i.ibb.co/th3QzBH/p3.jpg"
    },
    {
      image:"https://i.ibb.co/VvBM9Wm/p4.jpg"
    },
    {
      image:"https://i.ibb.co/47XGs7d/p5.jpg"
    },
    {
      image:"https://i.ibb.co/LhcFwb3/p6.jpg"
    },
    {
      image:"https://i.ibb.co/Gs7zXPf/p7.jpg"
    },
    {
      image:"https://i.ibb.co/WgbbZq6/p8.jpg"
    },
  ]

  const category = [
    {
      image:"https://i.ibb.co/85NCmjM/golden-cactus.jpg",
      name:"Golden"
    },
    {
      image:"https://i.ibb.co/ggSbYJ7/feather.jpg",
      name:"Feather"
    },
    {
      image:"https://i.ibb.co/P6cpFL7/Moon-Cactus.jpg",
      name:"Moon"
    },
    {
      image:"https://i.ibb.co/QM0hddq/Ladyfinger.jpg",
      name:"Ladyfinger"
    },
    {
      image:"https://i.ibb.co/rb71gJj/bunny-cactus.jpg",
      name:"Bunny"
    },
    {
      image:"https://i.ibb.co/Y3bTwkG/Blue-Columnar-cactus.jpg",
      name:"Blue Columnar"
    },
    
    // {
    //   image:"https://i.ibb.co/HTJdQrS/Parodia.jpg",
    //   name:"Parodia Cactus"
    // },
  ]

  const services = [
    {
      image:"https://i.ibb.co/qWgm36y/shipped.png",
      h4:"Free Delivery",
      p:"Over over $200"
    },
    {
      image:"https://i.ibb.co/R2YRBwF/return-of-investment.png",
      h4:"Money Returns",
      p:"3 Days money returns"
    },
    {
      image:"https://i.ibb.co/ckF0LB0/24-hours.png",
      h4:"24/7 Support",
      p:"Customer support"
    }
  ]
  return (
    <main>
      <header className="py-4 shadow-sm bg-white" >
        <div className="container flex items-center justify-between">
          <a href="link" id="LOGO">
            {/* <img src={logo} alt="" className="w-32" /> */}
            <h2 className="text-4xl font-serif text-primary font-bold">Cactus </h2>
          </a>

          <div className="w-full max-w-xl relative flex">
            <span className="absolute left-4 text-lg top-2 text-gray-400">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              type="text"
              className="w-full border border-primary border-r-0 pl-12 py-2 pr-3 rounded-l-md focus:outline-none"
              placeholder="Search"
            />
            <button className="bg-primary border-[1px] border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
              Search
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="link"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-xl">
                <FontAwesomeIcon icon={faHeart} className="" />
              </div>
              <div className="text-xs leading-3">Wish List</div>
              <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                9
              </span>
            </a>
            <a
              href="link"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-xl">
                <FontAwesomeIcon icon={faShoppingBag} className="" />
              </div>
              <div className="text-xs leading-3">Wish List</div>
              <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                9
              </span>
            </a>
            <a
              href="link"
              className="text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-xl">
                <FontAwesomeIcon icon={faUser} className="" />
              </div>
              <div className="text-xs leading-3">Wish List</div>
            </a>
          </div>
        </div>
      </header>

      <nav className="bg-gray-800">
        <div className="container flex">
          <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
            <span className="text-white">
              <FontAwesomeIcon icon={faBars} />
            </span>
            <span className="capitalize text-white ml-2">All Categories</span>
            <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-dashed divide-y divide-gray-300 opacity-0 group-hover:opacity-100 transition duration-500 invisible group-hover:visible">
              
              {
                category.map(cat => <a
                  href="a"
                  className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                >
                  <img src={cat.image} alt="" className="w-10 h-w-10 object-contain" />
                  <span className="ml-6 text-gray text-sm">{cat.name} Cactus</span>
                </a>)
              }
            </div>
          </div>

          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-6 capitalize">
              <a href="a" className="text-gray-200 hover:text-white transition">
                Home
              </a>
              <Link to="/shop" className="text-gray-200 hover:text-white transition">
                Shop
              </Link>
              <a href="a" className="text-gray-200 hover:text-white transition">
                About us
              </a>
              <a href="a" className="text-gray-200 hover:text-white transition">
                Contact us
              </a>
            </div>
            <a href="a" className="text-gray-200 hover:text-white transition">
              Login/Register
            </a>
          </div>
        </div>
      </nav>

     
      <section>
      <div
        className="bg-cover bg-no-repeat bg-center py-32 flex justify-end"
        style={{
          backgroundImage: `url("https://i.ibb.co/yRnv5xV/background.jpg")`,
        }}
      >
        <div className="container w-1/3">
        </div>
        <div className="container w-1/3">
          <h1 className="text-6xl text-gray-800 font-medium my-2 capitalize">
            Best Collection for Home Arrangment 
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, odit!</p>
          <div className="mt-12">
            <a href="p" className="bg-primary border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary border-[1px]">
              Shop Now
            </a>
          </div>
        </div>
      </div>
      </section>


      <section>
        <div className="container py-16">
           <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
              {
                services.map(srvc => <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src={srvc.image} alt="" className="w-12 h-12 object-contain"/>
                <div>
                  <h4 className="font-medium capitalize text-lg">{srvc.h4}</h4>
                  <p className="text-gray-500 text-sm">{srvc.p}</p>
                </div>
              </div>)
              }
           </div>
        </div>
      </section>


      <section className="">
        <div className="container py-16">
          <h2 className="text-3xl uppercase mb-6 text-gray-500">Shop by category</h2>
          <div className="grid grid-cols-3 gap-3">
              {
                category.map(cat => <div className="relative group rounded-sm overflow-hidden h-96">
                <img src={cat.image} alt="" className="w-full h-full" />
                <a href="p" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl font-robota font-medium text-white group-hover:bg-opacity-60">{cat.name}</a>
              </div>)
              }
          </div>
        </div>
      </section>


      <section>
        <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
              Top New Arrival
            </h2>

            <div className="grid grid-cols-4 gap-6">

              {
                arrival.map(arr => <div className="bg-white shadow rounded overflow-hidden">
                <div className="relative group">
                  <img src={arr.image} alt="" />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center gap-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-400">
                      <a href="p" className="text-white text-lg w-9 h-9 rounded-full bg-primary flex justify-center items-center hover:bg-gray-600 transition ">
                        <FontAwesomeIcon icon={faSearch} />
                      </a>
                      <a href="p" className="text-white text-lg w-9 h-9 rounded-full bg-primary flex justify-center items-center hover:bg-gray-800 transition ">
                        <FontAwesomeIcon icon={faHeart} />
                      </a>
                  </div>
                </div>

                <div className="pt-4 pb-3 px-4">
                    <a href="p">
                      <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Cactus</h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2 font-robota">
                      <p className="text-xl text-primary font-semibold">$45.00</p>
                      <p className="text-md text-gray-400 font-semibold line-through">$50.00</p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex gap-1 text-sm text-yellow-400">
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                </div>

                <div>
                  <a href="p" className="block w-full py-1 border-[1px] text-center bg-primary border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</a>
                </div>
              </div>)
              }

            </div>
        </div>
      </section>
      
    </main>
  );
};

export default LandingPage;
