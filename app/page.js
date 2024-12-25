import { TopBanner } from "@/components/topBanner";
import {
  faFacebook,
  faTiktok,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBusinessTime,
  faCircle,
  faCircleDot,
  faDotCircle,
  faHeadset,
  faMapLocationDot,
  faMapPin,
  faPlaneDeparture,
  faQuoteLeft,
  faSearch,
  faShip,
  faTruck,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <TopBanner />

      <div
        id="work"
        className="sm:px-12 px-3 bg-gray-900 text-gray-100 py-12 text-center"
      >
        {/* Cars Section */}
        <h1 className="text-lg font-bold">Own a Vehicle on Your Terms</h1>
        <hr className="w-12 h-2 bg-[#fe9000] my-2 mx-auto rounded-md border-0" />
        <p>Apply for any of our vehicles below</p>

        <div className="grid sm:grid-cols-4 grid-cols-1 gap-6 mt-8">
          {[
            {
              name: "Toyota Corolla",
              description:
                "Reliable and fuel-efficient sedan for daily commutes.",
              image: "/corrola.jpeg",
              link: "#",
            },
            {
              name: "Honda Civic",
              description: "Stylish and sporty with advanced safety features.",
              image: "/civic.jpeg",
              link: "#",
            },
            {
              name: "Toyota Vitz",
              description: "Durable saloon car for all tasks and events.",
              image: "/vitz1.jpeg",
              link: "#",
            },
            {
              name: "Toyota Yaris",
              description: "Modern design and nice driving experience.",
              image: "/yaris.jpeg",
              link: "#",
            },
          ].map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-bold text-gray-900 mt-4">
                  {car.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{car.description}</p>
                <a
                  href={car.link}
                  className="text-[#fe9000] font-semibold mt-4 block"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 bg-[#fe9000] text-white px-6 py-2 rounded-md">
          View More Cars
        </button>
      </div>

      <div id="phone" className="sm:px-12 px-3 py-12 text-center">
        {/* Phones Section */}
        <h1 className="text-lg font-bold mt-16">Affordable Phone Loans</h1>
        <hr className="w-12 h-2 bg-[#fe9000] my-2 mx-auto rounded-md border-0" />
        <p>
          Get the latest devices with flexible daily or weekly payment plans.
        </p>

        <div className="grid sm:grid-cols-4 grid-cols-1 gap-6 mt-8">
          {[
            {
              name: "iPhone 13",
              description: "Powerful performance and advanced camera features.",
              image: "/13.jpeg",
              link: "#",
            },
            {
              name: "Samsung Galaxy S21",
              description: "Flagship Android phone with a sleek design.",
              image: "/21.jpeg",
              link: "#",
            },
            {
              name: "Google Pixel 6",
              description:
                "Pure Android experience with incredible camera quality.",
              image: "/pixel.jpeg",
              link: "#",
            },
            {
              name: "OnePlus 9",
              description: "Premium performance without the premium price.",
              image: "/one.jpeg",
              link: "#",
            },
          ].map((phone, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-md text-gray-900 font-bold mt-4">
                  {phone.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {phone.description}
                </p>
                <a
                  href={phone.link}
                  className="text-[#fe9000] font-semibold mt-4 block"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 bg-[#fe9000] text-white px-6 py-2 rounded-md">
          View More Phones
        </button>
      </div>

      <div className="relative bg-[url('/investment.jpg')] text-center bg-cover bg-center bg-fixed sm:px-12 px-3 py-12">
        <div className="absolute top-0 left-0 w-full h-full bg-white/60 backd z-20"></div>
        <div className="relative z-50">
          <h1 className="font-bold text-xl">INVEST WITH US NOW</h1>
          <p>Earn Big Tomorrow</p>
          <hr className="w-12 h-2 bg-[#fe9000] my-2 mx-auto rounded-md border-0" />

          <p className="mt-8">
            Our investment plan works for individuals over the age of eighteen
            (18) and organizations. A 7.5% rate of the total amount invested is
            earned as interest per every month in the duration of six (6)
            months.
          </p>

          <button type="button" className="rounded-md bg-black p-4 mt-8 text-sm text-white hover:bg-gray-700 transition duration-500 relative"> JOIN US NOW <FontAwesomeIcon icon={faCircle} width={20} height={20} className="absolute -top-1 -right-1 animate-ping" color="red" /> </button>
        </div>
      </div>

      <div className="relative bg-[url('/dots.png')] bg-cover bg-center bg-fixed">
        <div
          id="contact"
          className="sm:px-12 py-5 bg-[#004efe] opacity-75 grid md:grid-cols-3"
        >
          <div className="flex gap-4 sm:p-3 p-6 text-white">
            <div className="flex-shrink-0">
              <FontAwesomeIcon
                className="text-2xl"
                icon={faHeadset}
                width={30}
                height={30}
              />
            </div>
            <div>
              <h1 className="font-bold">CALL CENTER</h1>
              <p className="text-sm mt-1">Give us a free call</p>
              <p className="text-sm mt-1">+233 59 456 8876</p>
            </div>
          </div>
          <div className="flex gap-4 sm:p-3 p-6 text-white">
            <div className="flex-shrink-0">
              <FontAwesomeIcon
                className="text-2xl"
                icon={faBusinessTime}
                width={30}
                height={30}
              />
            </div>
            <div>
              <h1 className="font-bold">WORKING HOURS</h1>
              <p className="text-sm mt-1">Mon-Sat 7AM-5PM</p>
              <p className="text-sm mt-1">Sat 9AM - 3PM</p>
            </div>
          </div>
          <div className="flex gap-4 sm:p-3 p-6 text-white">
            <div className="flex-shrink-0">
              <FontAwesomeIcon
                className="text-2xl"
                icon={faMapLocationDot}
                width={30}
                height={30}
              />
            </div>
            <div>
              <h1 className="font-bold">OUR LOCATION</h1>
              <p className="text-sm mt-1">Pokuase, ACP - Kwabenya Road</p>
              <p className="text-sm mt-1">Accra, Ghana</p>
            </div>
          </div>
        </div>

        <div id="services" className="sm:px-12 py-8">
          <div className="p-3 grid md:gap-6 gap-16 md:grid-cols-3">
            <div className="col-span-1 relative">
              <h1 className="text-center text-sm font-bold">OUR SERVICES</h1>
              <hr className="w-12 h-2 bg-[#fe9000] my-2 mx-auto rounded-md border-0" />
              <p className="text-3xl text-center font-semibold">
                WHAT WE CAN DO FOR YOU
              </p>

              <div className="md:absolute -bottom-24 p-2 w-full md:mt-0 mt-8">
                <Image
                  src={"/truck_green.png"}
                  width={1000}
                  height={1000}
                  className="w-100 h-auto"
                  alt="dd"
                />
              </div>
            </div>
            <div className="md:col-span-2 grid gap-4 md:grid-cols-2">
              <div className="p-10 rounded-md bg-white shadow flex gap-4">
                <div className="flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faShip}
                    width={30}
                    height={30}
                    className="text-[#fe9000] text-3xl"
                  />
                </div>
                <div className="flex-grow-0">
                  <h1 className="font-bold">OCEAN CARGO</h1>
                  <p className="mt-1">
                    Transport your goods across the globe with our dependable
                    ocean cargo services. Whether it’s full container loads or
                    less-than-container loads, we ensure timely delivery, secure
                    handling, and cost-effective shipping solutions. Partner
                    with us for seamless logistics tailored to your needs.
                  </p>
                </div>
              </div>

              <div className="p-10 rounded-md bg-white shadow flex gap-4">
                <div className="flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faPlaneDeparture}
                    width={30}
                    height={30}
                    className="text-[#fe9000] text-3xl"
                  />
                </div>
                <div className="flex-grow-0">
                  <h1 className="font-bold">FLY ANYWHERE</h1>
                  <p className="mt-1">
                    Experience the speed and efficiency of our air freight
                    solutions. We offer express delivery for time-sensitive
                    shipments to destinations worldwide, ensuring your goods
                    arrive on schedule. With our global network and reliable
                    partners, your cargo is in safe hands.
                  </p>
                </div>
              </div>

              <div className="p-10 rounded-md bg-white shadow flex gap-4">
                <div className="flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faTruck}
                    width={30}
                    height={30}
                    className="text-[#fe9000] text-3xl"
                  />
                </div>
                <div className="flex-grow-0">
                  <h1 className="font-bold">PROFESSIONAL COURIER SERVICES</h1>
                  <p className="mt-1">
                    From documents to parcels, our professional courier services
                    guarantee fast and secure delivery. We prioritize customer
                    satisfaction, offering real-time tracking and door-to-door
                    service. Trust us to handle your courier needs with
                    precision and care.
                  </p>
                </div>
              </div>

              <div className="p-10 rounded-md bg-white shadow flex gap-4">
                <div className="flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faWarehouse}
                    width={30}
                    height={30}
                    className="text-[#fe9000] text-3xl"
                  />
                </div>
                <div className="flex-grow-0">
                  <h1 className="font-bold">CARGO STORAGE</h1>
                  <p className="mt-1">
                    Our state-of-the-art storage facilities are designed to keep
                    your goods safe and accessible. With climate control,
                    inventory management, and round-the-clock security, we
                    provide the perfect solution for storing your cargo before
                    it’s shipped to its destination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:p-12 py-12 bg-[url('/parallax.jpg')] bg-cover bg-center bg-fixed">
        <div className="grid md:grid-cols-3 p-3 md:gap-4 gap-8 mt-12">
          <div className="col-span-1 text-white">
            <h1 className="text-center font-bold text-sm">OUR CLIENTS</h1>
            <hr className="w-12 h-2 bg-[#fe9000] my-2 mx-auto rounded-md border-0" />
            <p className="text-3xl font-semibold text-center">
              CLIENTS THAT TRUST OUR SERVICES
            </p>
          </div>
          <div className="md:col-span-2 grid md:grid-cols-2 md:gap-4 gap-6 text-white">
            <div className="rounded-lg p-8 bg-white/20 flex gap-2">
              <div className="flex-shrink-0 text-gray-200/30">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  width={30}
                  height={30}
                  className="text-4xl"
                />
              </div>
              <div>
                <p>
                  RALOC Logistics has been instrumental in ensuring the seamless
                  transportation of our goods across regions. Their attention to
                  detail and commitment to timely delivery have made them a
                  trusted partner in our supply chain operations.
                </p>

                <p className="text-right font-bold mt-12">Michael Anane</p>
                <p className="text-right">Supply Chain Manager, Nestle Ghana</p>
              </div>
            </div>
            <div className="rounded-lg p-8 bg-white/20 flex gap-2">
              <div className="flex-shrink-0 text-gray-200/30">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  width={30}
                  height={30}
                  className="text-4xl"
                />
              </div>
              <div>
                <p>
                  Efficient logistics is critical to our operations, and RALOC
                  Logistics consistently exceeds expectations. Their advanced
                  tracking solutions and exceptional service have greatly
                  contributed to our ability to deliver on time, every time.
                </p>

                <p className="text-right font-bold mt-12">Akosua Dapaah</p>
                <p className="text-right">CTO, MTN Ghana</p>
              </div>
            </div>
            <div className="rounded-lg p-8 bg-white/20 flex gap-2">
              <div className="flex-shrink-0 text-gray-200/30">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  width={30}
                  height={30}
                  className="text-4xl"
                />
              </div>
              <div>
                <p>
                  We rely heavily on RALOC Logistics for the safe and efficient
                  handling of our goods. Their professionalism and tailored
                  logistics solutions have significantly optimized our
                  operations, making them an invaluable partner for our
                  business.
                </p>

                <p className="text-right font-bold mt-12">Kofi Mensah</p>
                <p className="text-right">Operations Manager, Kivo Ghana</p>
              </div>
            </div>
            <div className="rounded-lg p-8 bg-white/20 flex gap-2">
              <div className="flex-shrink-0 text-gray-200/30">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  width={30}
                  height={30}
                  className="text-4xl"
                />
              </div>
              <div>
                <p>
                  RALOC Logistics is a game-changer. Their reliable cargo
                  services and excellent customer support have helped us meet
                  tight deadlines and deliver our products with ease. I highly
                  recommend their services to businesses seeking dependable
                  logistics solutions.
                </p>

                <p className="text-right font-bold mt-12">
                  Deloris Frimpong Manso
                </p>
                <p className="text-right">CEO, Delay Foods</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12">
        <div className="relative md:pt-0 pt-12">
          <h1 className="md:text-left text-center text-sm font-bold mt-12 md:mt-0 md:pt-0 pt-16">
            OUR CORE VALUES
          </h1>
          <hr className="w-12 h-2 bg-[#fe9000] my-2 rounded-md border-0 md:mx-0 mx-auto" />
          <p className="text-3xl md:text-left text-center font-semibold">
            OUR SKILLS AND EXPERTISE
          </p>

          <div className="absolute -top-20 flex justify-end w-full">
            <Image
              src={"/forklift.png"}
              width={1000}
              height={1000}
              className="w-60 h-auto"
              alt="forklift"
            />
          </div>
        </div>

        <div className="mt-12 pt-12 grid md:grid-cols-4 md:gap-4 gap-12 text-center">
          <div>
            <h1 className="text-5xl font-semibold text-[#004efe]">1,230</h1>
            <h3 className="font-bold">DELIVERED PACKAGES</h3>
            <p className="mt-2 text-sm">
              Our team has successfully delivered thousands of packages
              globally, ensuring prompt and reliable service every time.
            </p>
          </div>
          <div>
            <h1 className="text-5xl font-semibold text-[#004efe]">473,283</h1>
            <h3 className="font-bold">KM PER YEAR</h3>
            <p className="mt-2 text-sm">
              Covering extensive distances annually, we guarantee seamless
              transportation for your goods across regions and borders.
            </p>
          </div>
          <div>
            <h1 className="text-5xl font-semibold text-[#004efe]">3,279</h1>
            <h3 className="font-bold">TONS OF GOODS</h3>
            <p className="mt-2 text-sm">
              With a strong logistics network, we handle substantial volumes of
              goods, delivering quality and consistency every step of the way.
            </p>
          </div>
          <div>
            <h1 className="text-5xl font-semibold text-[#004efe]">513</h1>
            <h3 className="font-bold">SATISFIED CLIENTS</h3>
            <p className="mt-2 text-sm">
              Hundreds of clients trust us for our exceptional service, making
              us their preferred logistics partner for all transportation needs.
            </p>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13088.88686946622!2d-0.31237776867005923!3d5.700294160246733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfa0264d81f6f1%3A0x287a31d834ac2efe!2sPokoasi!5e1!3m2!1sen!2sgh!4v1732887483038!5m2!1sen!2sgh"
          height={400}
          className="w-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <footer className="bg-[#004efe] relative">
        <div className="absolute -top-8 px-12 md:block hidden left-0 w-full">
          <div className="bg-[#004efe] p-8 relative mx-12">
            <span className="w-40 h-full top-0 -rotate-[25deg] bg-[#004efe] absolute -left-10 -top-4 rounded-lg"></span>

            <span className="w-40 h-full top-0 rotate-[25deg] bg-[#004efe] absolute -right-10 -top-4 rounded-lg"></span>
          </div>
        </div>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Image
                src="/logo.png"
                className="w-32 h-auto"
                alt="Logo"
                width={500}
                height={500}
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Resources
                </h2>
                <ul className="text-gray-50 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Follow us
                </h2>
                <ul className="text-gray-50 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Legal
                </h2>
                <ul className="text-gray-50 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-50 sm:text-center">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Raloc™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-50 hover:text-gray-900">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-50 hover:text-gray-900 ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-50 hover:text-gray-900 ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-50 hover:text-gray-900 ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-50 hover:text-gray-900 ms-5">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
