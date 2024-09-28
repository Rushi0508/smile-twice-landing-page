"use client"
import { ArrowDown, ArrowRight, CirclePlus, Flower, Leaf, Tent } from "lucide-react";
import Image from "next/image";
import React, { ButtonHTMLAttributes } from "react";

const Button = (props: ButtonHTMLAttributes<any>) => {
  return (
    <button className={"bg-[#FFDE00] text-black text-[15px] px-6 py-3 rounded-full " + props.className}>
      {props.children}
    </button>
  )
}

const Header = () => {
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('top-bar');
      if (header) {
        console.log(window.screenY > header.offsetHeight)
        setIsSticky(window.scrollY > header.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header id="main-header">
      <div id="top-bar" className={`text-xs text-black relative z-20 text-center w-full bg-[#FFDE00] py-2 transition-opacity duration-300 ${isSticky ? 'opacity-0 hidden' : 'opacity-100 visible'
        }`}>
        <a href="#">FREE VANILLA LAVENDAR TOOTHPASTE ON ORDERS OVER $40</a>
      </div>
      <nav id="main-nav" className={`z-50 flex bg-transparent w-full py-2 transition-all duration-500 ${isSticky ? 'fixed w-full top-0 bg-white' : 'relative'
        }`}>
        <div className={`2xl:w-2/3 lg:w-[95%] mx-auto ${isSticky ? "text-black" : "text-[#FFDE00]"} flex justify-between items-center`}>
          <div className="flex text-xs gap-10">
            <p className="flex items-center">PRODUCTS
              <ArrowDown size={16} />
            </p>
            <p className="flex items-center">ABOUT
              <ArrowDown size={16} />
            </p>
          </div>
          <div className={`${isSticky ? "text-4xl" : "text-6xl"}`}>
            <p>twice.</p>
          </div>
          <div className="flex text-xs gap-10">
            <p>ACCOUNT</p>
            <p>CART</p>
          </div>
        </div>
      </nav>
    </header>
  )
}

const Hero = () => {
  return (
    <div className="h-screen flex items-center">
      <Image
        src="https://smiletwice.com/cdn/shop/files/Test-3-twice_1944x.jpg?v=1712606681"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 after:content-[''] after:w-full after:h-72 after:absolute after:top-0 after:left-0 after:bg-gradient-to-b after:from-[rgba(140,140,140,0.75)] after:to-[rgba(215,210,203,0)_86.14%] after:z-0 after:mix-blend-color-burn"></div>
      <div className="absolute w-full mb-[20vh]">
        <div className="mx-auto 2xl:w-2/3 lg:w-[95%]">
          <div className="max-w-lg flex flex-col gap-4">
            <p className="text-6xl text-black">HEALTHY MOUTH Healthy Safe</p>
            <p className="text-3xl text-black">Award winning <span className="italic">oral wellness</span></p>
            <div className="mt-6"><Button className="px-12">SHOP NOW</Button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const HeroBanner = () => {
  return (
    <div className="bg-white w-full">
      <div className="2xl:w-2/3 lg:w-[95%] mx-auto">
        <div className="py-12 flex justify-around border-b-[1px] border-gray-700">
          <p className="text-black">PORCHE</p>
          <p className="text-black">ROG</p>
          <p className="text-black">VOGUE</p>
          <p className="text-black">WALLMART</p>
          <p className="text-black">WEGMENS</p>
        </div>
        <div className="border-b-[1px] border-gray-700">
          <p className="text-6xl py-12 leading-tight text-black">TWICE is a holistic oral health system that combines <span className="italic">cutting-edge science </span>
            and <span className="italic">clean ingredients </span> for better mouth body balance</p>
        </div>
        <div className="border-b-[1px] border-gray-700 py-4">

        </div>
      </div>

    </div>
  )
}

const Video = () => {
  return (
    <div className="relative flex justify-center items-center">
      <video playsInline muted loop autoPlay preload="auto">
        <source src="https://cdn.shopify.com/s/files/1/0013/6632/7414/files/Twice-Diagnostic.mp4?v=1649283236" type="video/mp4" />
      </video>
      <div className="text-[#FFDE00] absolute text-center flex flex-col gap-8">
        <p className="text-xl">DIAGNOSTIC</p>
        <p className="text-6xl">Understand Your Mouth’s <span className="italic">microbiome</span></p>
        <div className="mt-4">
          <Button>GET STARTED</Button>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  const footerLinks: Record<string, any> = {
    shop: [
      { name: "Shop All", url: "/" },
      { name: "Oral Wellness", url: "/" },
      { name: "Toothpaste", url: "/" },
      { name: "FAQs", url: "/" }
    ],
    learn: [
      { name: "About Us", url: "/" },
      { name: "Wholesale", url: "/" },
      { name: "Terms and Conditions", url: "/" },
      { name: "Privacy Policy", url: "/" },
      { name: "Refund Policy", url: "/" },
      { name: "Blog", url: "/" },
      { name: "Contact Us", url: "/" },
      { name: "Accessibility Statement", url: "/" }
    ],
    follow: [
      { name: "Instagram", url: "/" },
      { name: "Twitter", url: "/" },
      { name: "Facebook", url: "/" },
      { name: "YouTube", url: "/" },
      { name: "TikTok", url: "/" },
      { name: "LinkedIn", url: "/" },
      { name: "Threads", url: "/" }
    ]
  };

  return (
    <footer className="border-t-2 bg-white">
      <div className="flex py-12 2xl:w-2/3 lg:w-[95%] mx-auto">
        <div className="flex gap-12 justify-between w-full py-6">
          <div>
            <div className="text-base">
              <p className="text-black">ORAL WELLNESS for</p>
              <p className="text-black">YOUR MOUTH, BODY and SOUL™️</p><br />
              <p className="text-xs text-black">© 2022 Twice. Made by Concrete and Wollson</p>
            </div>
          </div>
          {
            Object.keys(footerLinks).map((key) => (
              <div key={key} className="flex flex-col gap-2">
                <p className="text-xs text-black">{key.toUpperCase()}</p>
                <ul className="text-[15px] flex flex-col gap-2">
                  {
                    footerLinks[key].map((link: any) => (
                      <li key={link.name}>
                        <a className="text-black" href={link.url}>{link.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
          <div className="max-w-xs">
            <p className="text-xs text-black">SUBSCRIBE TO NEWSLETTER</p>
            <div className="relative my-4 flex flex-col gap-4">
              <input type="email" className="text-black rounded-full border-[1px] border-black px-4 py-2" placeholder="Email" />
              <Button>SUBSCRIBE</Button>
            </div>
            <div className="text-xs mt-8">
              <p className="text-black">Something to smile about in your inbox weekly. Your mouth, body and soul will thank you. Unsubscribe anytime.</p>
              <p className="mt-4 text-black">Get connected: info@smiletwice.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 pt-4 px-8">
        <img
          src={"https://cdn.shopify.com/s/files/1/0013/6632/7414/files/Twice-WordmarkDesk-RGB-Black.svg?v=1652266580"}
          width={1800}
          alt="logo"
          height={900}
        />
      </div>
    </footer >
  )
}

const CTA = () => {
  return (
    <div className="flex items-center bg-white">
      <div className="w-1/2 h-full px-12 mx-4 flex flex-col gap-6">
        <p className="text-xl text-black">CULT FAVORITE</p>
        <p className="text-6xl text-black">This is Oral Wellness IMMUNITY RINSE</p>
        <p className="text-xl text-black">Pioneering dual-action, nano-emulsion technology delivers full-mouth freshness that improves the wellness of your mouth</p>
        <div>
          <Button>SHOP NOW</Button>
        </div>
      </div>
      <div className="w-1/2">
        <img
          className="w-full"
          src={"https://smiletwice.com/cdn/shop/files/TWICE_WATER_FEB_202292772_v4_1_1080x.jpg?v=1712606677"}
          width={100}
          height={100}
          alt="demo"
        />
      </div>
    </div>
  )
}

const Shop = () => {
  const products = [
    {
      "name": "Oral Wellness Toothpaste",
      "description": "WITH FLUORIDE",
      "price": "$7.99",
      "img": "https://smiletwice.com/cdn/shop/files/Toothpaste_Spearmint-1500-rev_3b76fc0e-da1a-45e1-aec6-98e45011bb8b_540x.gif?v=1712606681"
    },
    {
      "name": "Oral Wellness Immunity Rinse",
      "description": "ULTRA CONCENTRATED",
      "price": "$19.99",
      "img": "https://smiletwice.com/cdn/shop/files/Toothpaste_Spearmint-1500-rev_3b76fc0e-da1a-45e1-aec6-98e45011bb8b_540x.gif?v=1712606681"
    },
    {
      "name": "Oral Wellness Floss",
      "description": "2-PACK",
      "price": "$7.99",
      "img": "https://smiletwice.com/cdn/shop/files/Toothpaste_Spearmint-1500-rev_3b76fc0e-da1a-45e1-aec6-98e45011bb8b_540x.gif?v=1712606681"
    },
    {
      "name": "Oral Wellness Whitening Pen",
      "description": "EXTRA STRENGTH",
      "price": "$22.39",
      "img": "https://smiletwice.com/cdn/shop/files/Toothpaste_Spearmint-1500-rev_3b76fc0e-da1a-45e1-aec6-98e45011bb8b_540x.gif?v=1712606681"
    }
  ]

  const info = [
    {
      name: "ENRICHED FORMULAS",
      icon: <CirclePlus size={40} color="black" />
    },
    {
      name: "MOUTH BODY BALANCE",
      icon: <Flower size={40} color="black" />
    },
    {
      name: "PLANT-POWERED CLEAN",
      icon: <Tent size={40} color="black" />
    },
    {
      name: "MADE WITHOUT COMPROMISE",
      icon: <Leaf size={40} color="black" />
    }
  ]

  return (
    <div className="py-12 w-full bg-[#FFDE00]">
      <div className="mx-auto 2xl:w-2/3 lg:w-[95%]">
        <div>
          <div className="flex justify-between">
            <p className="text-4xl text-black">Meet The Routine</p>
            <p className="italic flex gap-2 text-xl items-center text-black">Shop All <ArrowRight /></p>
          </div>
          <div className="flex justify-between">
            {
              products.map((product, index) => (
                <div key={index} className="flex flex-col justify-center items-center">
                  <img src={product.img} alt={product.name} />
                  <div className="flex flex-col items-center my-4">
                    <p className="text-lg text-black">{product.name}</p>
                    <p className="text-xs text-black">{product.description}</p>
                  </div>
                  <div className="flex flex-col items-center mt-4">
                    <p className="text-sm mb-2 text-black">{product.price}</p>
                    <Button className="text-[#FFDE00!important] bg-black text-xs px-10">SHOP NOW</Button>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="flex flex-col items-center justify-center py-12 my-12 mx-auto">
            <p className="text-6xl text-black">Oral Wellness</p>
            <p className="text-6xl text-black"><span className="italic">begins </span> WITHIN</p>
          </div>
          <div className="flex gap-16 pb-12">
            <div className="w-1/2 relative flex justify-end">
              <img src="https://smiletwice.com/cdn/shop/files/20211213_LW_TWICE_Brian_01_03789_copia_2_540x.jpg?v=1712606723" className="absolute z-30 left-10 w-[300px]" alt="img" />
              <img src="https://smiletwice.com/cdn/shop/files/20211213_LW_TWICE_Yolonda_01_00661_1_540x.jpg?v=1712606723" className="h-[600px] mt-20" alt="img" />
            </div>
            <div className="w-1/2 grid grid-cols-2 gap-10">
              {
                info.map((i, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    {i.icon}
                    <p className="text-lg text-black">{i.name}</p>
                    <p className="text-lg text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sed, necessitatibus illo aut corrupti debitis voluptatum laudantium ipsam ea ab.</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HeroBanner />
      <Shop />
      <CTA />
      <Video />
      <Footer />
    </div>
  );
}
