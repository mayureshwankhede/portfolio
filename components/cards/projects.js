import React, { useEffect, useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Tab } from "@headlessui/react";

const Projects = () => {
  const cardName = useSelector((state) => state.card.name);
  const cardRef = useRef();
  useEffect(() => {
    if (cardName == "projects") {
      cardRef.current.style.opacity = 0.5;
      cardRef.current.style.top = "-6px";
      setTimeout(() => {
        cardRef.current.style.opacity = 1;
        cardRef.current.style.top = "16px";
      }, 200);
    }
  }, [cardName]);

  return (
    <div
      ref={cardRef}
      className={`relative transform transition-all duration-150 ease-out  bg-white shadow overflow-hidden sm:rounded-lg my-8 border-black border-2 card-shadow ${
        cardName == "projects" ? "-order-1" : ""
      }`}
    >
      <div className="px-4 pt-5 pb-2 sm:px-6">
        <h3 className="text-lg leading-6 font-semibold text-gray-900 uppercase">
          <RoughNotation
            type="highlight"
            show={cardName == "projects" ? true : false}
            color="#ffff00"
          >
            Projects
          </RoughNotation>
        </h3>
      </div>

      <div className="px-4 pb-5 sm:px-6 mt-6 ">
        <div className="flex flex-col flex-wrap justify-between p-2 md:flex-row">
          <div className="flex-[0_0_100%]    md:flex-auto md:mr-5 md:w-32">
            <img
              src="https://dummyimage.com/500x500/ccc5f3/fff&text=ecommerce"
              alt=""
              srcSet=""
              className="rounded w-full "
            />
          </div>
          <div className="flex-[0_0_100%] mt-6 mb-3 md:flex-auto md:mt-0 md:w-64">
            <h3 className="font-bold ">
              <span className="pr-2">Connect 8</span>
            </h3>
            <div className="flex flex-wrap">
              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                React
              </span>
              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                Redux
              </span>
              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                MongoDB
              </span>
              <br />
              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                PayPal Payment
              </span>
              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                NodeJs
              </span>
              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                Heroku
              </span>
            </div>
            <p className="text-justify my-4 text-sm">
              An Ecommerce Application created for capstone project 2022 that
              included third party APIs like Paypal Payment Gateway.Implemented
              features like delivery system,Review Product,Create Product
              payment options (Credit/Debit & Paypal)
            </p>
            <div className="text-sm mt-3">
              <Link href="https://connect--8.herokuapp.com/">
                <a
                  target="_blank"
                  className="mr-2 my-1 border hover:bg-gray-100  font-bold py-2 px-4 "
                >
                  DEMO
                </a>
              </Link>
              <Link href="https://github.com/mayureshwankhede/capstone">
                <a
                  target="_blank"
                  className="ml-2 my-1 border bg-gray-700 hover:bg-gray-900  text-white  font-bold py-2 px-4 "
                >
                  GITHUB
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-between p-2 md:flex-row mt-6">
          <div className="flex-[0_0_100%]    md:flex-auto md:mr-5 md:w-32">
            <img
              src="https://dummyimage.com/500x500/ccc5f3/fff&text=simplesplit"
              alt=""
              srcSet=""
              className="rounded w-full "
            />
          </div>
          <div className="flex-[0_0_100%] mt-6 mb-3 md:flex-auto md:mt-0 md:w-64">
            <h3 className="font-bold ">
              <span className="pr-2">SimpleSplit</span>
            </h3>
            <div className="flex flex-wrap">
              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                Laravel
              </span>
              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                PHP
              </span>
              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                MYSQL
              </span>

              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                STRIPE
              </span>

              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                GMaps
              </span>
              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                Twilio
              </span>
              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                SendGrid
              </span>

              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                AWS EC2
              </span>
              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                S3 Bucket
              </span>
              <span class="m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                PWA
              </span>
            </div>
            <p className="text-justify my-4 text-sm">
              I took their existing site and turned it into a headless CMS with
              React on the frontend. The site features Stripe payment,SMS based
              expense tracking,subscription via stripe connect,PWA.
            </p>
            <div className="text-sm mt-3">
              <Link href="https://dashboard.simplesplit.co/">
                <a
                  target="_blank"
                  className="mr-2 my-1 border hover:bg-gray-100  font-bold py-2 px-4 "
                >
                  VIEW
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-between p-2 md:flex-row">
          <div className="flex-[0_0_100%]    md:flex-auto md:mr-5 md:w-32">
            <img
              src="https://dummyimage.com/500x500/ccc5f3/fff&text=myglit"
              alt=""
              srcSet=""
              className="rounded w-full "
            />
          </div>
          <div className="flex-[0_0_100%] mt-6 mb-3 md:flex-auto md:mt-0 md:w-64">
            <h3 className="font-bold ">
              <span className="pr-2">MYGlit</span>
            </h3>
            <div className="flex flex-wrap">
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                React
              </span>
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                Redux
              </span>
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                Laravel
              </span>
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                PHP
              </span>
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                socket.io
              </span>
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                AWS Elastic Bean
              </span>
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                Lodash
              </span>
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                ChartJs
              </span>
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                STRIPE
              </span>
            </div>
            <p className="text-justify my-4 text-sm">
              Assembled and lead a team of 12 developers to create core features
              and integrate third party APIs. Implemented Payment Gateway,
              Socket.io for chatting.
            </p>
            <div className="text-sm mt-3">
              <Link href="https://myglit.com/myglit_jobs">
                <a
                  target="_blank"
                  className="mr-2 my-1 border hover:bg-gray-100  font-bold py-2 px-4 "
                >
                  VIEW
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-between p-2 md:flex-row">
          <div className="flex-[0_0_100%]    md:flex-auto md:mr-5 md:w-32">
            <img
              src="https://dummyimage.com/500x500/ccc5f3/fff&text=flutter"
              alt=""
              srcSet=""
              className="rounded w-full "
            />
          </div>
          <div className="flex-[0_0_100%] mt-6 mb-3 md:flex-auto md:mt-0 md:w-64">
            <h3 className="font-bold ">
              <span className="pr-2">Flutter Course</span>
            </h3>
            <div className="flex flex-wrap">
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block mr-1 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
                <span className="inline-block">90k+ Students</span>
              </span>
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                Dart
              </span>
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                Flutter
              </span>
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                Android
              </span>
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                iOS
              </span>
              <span class=" m-0.5 bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ">
                Udemy
              </span>
            </div>
            <p className="text-justify my-4 text-sm">
              Over 90k+ Student has enrolled my flutter course with 1.6 hrs of
              educational content with 3000+ comments and 4.1 rating. Developing
              this course has helped me to improve my confidence & communication
              skills
            </p>
            <div className="text-sm mt-3">
              <Link href="https://www.udemy.com/course/learn-flutter-beginners-course/">
                <a
                  target="_blank"
                  className="mr-2 my-1 border hover:bg-gray-100  font-bold py-2 px-4 "
                >
                  VIEW
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
