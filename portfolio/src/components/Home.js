import React from 'react'
import profile from "../img/Image.png";
import grid from "../img/squares.png";
import group0 from "../img/Group.png";
import group1 from "../img/Group1.png";
import group2 from "../img/Group2.png";
import group3 from "../img/Group3.png";
import star from "../img/start.png";
import globe from "../img/globe.png";


const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mx-16" >
        <section className="relative h-[550px] w-[460px] p-8 my-20 ">
          <img
            className="z-10 absolute h-[500px] w-[400px] left-0 top-0 "
            src={profile}
          />
          <img
            className="z-0 absolute bottom-0 right-0 h-[300px] w-[300px]"
            src={grid}
          />
        </section>
        <section className="col-span-2 my-10   ">
          <div className="relative h-[100px] w-[600px] inline-flex">
            <img className="  h-[60px] absolute top-0 start-44 " src={globe} />
            <img className="h-[55px] absolute bottom-0 end-0" src={star} />
          </div>
          <div>
            <h1 className="anta-regular text-6xl font-bold my-8 mx-2">
              What's Trend in 2025 ?
            </h1>
            <p className="text-s font-normal px-40">
              Lorem eu ex sunt incididunt excepteur culpa aliquip voluptate
              culpa incididunt nisi. Reprehenderit qui sint qui enim. Nulla
              irure dolore non nulla.Lorem eu ex sunt incididunt excepteur .
            </p>
            <div className=" inline-flex gap-4 m-20">
              <button className="border rounded-lg bg-white border-black border-[3px]  anta-regular text-black font-normal text-xl px-8 h-8">
                Email Address
              </button>
              <button className="border rounded-lg bg-black border-black border-3 anta-regular font-normal text-white text-xl h-8 px-2">
                JOIN NOW
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 px-28 m-8">
            <img className=" h-[40px]" src={star} />
            <div>
              <h5 className="text-xl mb-4 font-medium">Contact Us</h5>
              <div className="flex flex-wrap gap-4 h-[30px] justify-center">
                <img className="h-[33px]" src={group0} />
                <img className="h-[33px]" src={group1} />
                <img className="h-[33px]" src={group2} />
                <img className="h-[33px]" src={group3} />
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Home