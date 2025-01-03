import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            esse, harum deleniti, itaque repudiandae, laudantium tenetur earum
            aliquid rerum est reprehenderit recusandae explicabo voluptatem rem
            quisquam libero maiores dolor nam. Quos, libero tempora! Quis labore
            ipsam porro soluta dolor, earum magnam corporis voluptates
            cupiditate perferendis qui accusamus in deserunt illum!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            corporis neque accusantium mollitia voluptates impedit ea ut sint
            earum ipsa nobis asperiores doloremque libero possimus fugit
            cupiditate eius nulla, error quibusdam repudiandae alias. Eveniet
            fugit iure earum sequi voluptas repellendus rerum nobis! Sapiente
            minus modi sequi labore quae expedita iusto.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit
            dicta ipsa? Quaerat consectetur delectus illum et ipsum numquam
            maxime iure distinctio vitae nemo a, quibusdam eaque fuga
            accusantium
          </p>
        </div>

        </div>

        <div className="text-xl py-4">

        <Title text1={"Why"} text2={"Choose Us"} />
        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio quasi libero saepe beatae minus officia ipsum aspernatur optio esse eos reiciendis, voluptatibus cum fugiat culpa vitae recusandae dignissimos veniam!</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio quasi libero saepe beatae minus officia ipsum aspernatur optio esse eos reiciendis, voluptatibus cum fugiat culpa vitae recusandae dignissimos veniam!</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio quasi libero saepe beatae minus officia ipsum aspernatur optio esse eos reiciendis, voluptatibus cum fugiat culpa vitae recusandae dignissimos veniam!
            </p>
          </div>

        </div>

        <NewsLetterBox/>
      
    </div>
  );
};

export default About;
