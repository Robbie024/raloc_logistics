import { Invest } from "@/components/invest";
import { Phones } from "@/components/phones";
import { TopBanner } from "@/components/topBanner";
import { Work } from "@/components/work";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faBoxes,
  faBusinessTime,
  faCircle,
  faHeadset,
  faMapLocationDot,
  faMoneyCheckAlt,
  faPlaneDeparture,
  faQuoteLeft,
  faRecycle,
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

      <Work />

      <Phones />

      <Invest />

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
              <p className="text-sm mt-1">+233 50 3905535</p>
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
              <p className="text-sm mt-1">
                Ofankor Barrier, Near the police station
              </p>
              <p className="text-sm mt-1">Accra, Ghana</p>
            </div>
          </div>
        </div>

        <div id="services" className="sm:px-12 py-8">
          <div className="p-3 md:gap-6 gap-16 relative">
            <div className="md:absolute -bottom-24 p-2 w-full md:mt-0 mt-8 flex justify-end">
              <Image
                src={"/truck_green.png"}
                width={1000}
                height={1000}
                className="w-[450px] h-auto"
                alt="dd"
              />
            </div>
            <div className="mb-8">
              <h1 className="text-center text-sm font-bold">OUR SERVICES</h1>
              <hr className="w-12 h-2 bg-[#fe9000] my-2 mx-auto rounded-md border-0" />
              <p className="text-3xl text-center font-semibold">
                WHAT WE CAN DO FOR YOU
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {/* Sourcing & Procurement */}
              <div className="p-10 rounded-md bg-white shadow flex gap-4">
                <div className="flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faSearch}
                    width={30}
                    height={30}
                    className="text-[#fe9000] text-3xl"
                  />
                </div>
                <div className="flex-grow-0">
                  <h1 className="font-bold">SOURCING & PROCUREMENT</h1>
                  <p className="mt-1">
                    We simplify the process of sourcing and procuring goods with
                    our vast network of suppliers. Save time and money with our
                    tailored procurement solutions.
                  </p>
                </div>
              </div>

              {/* Inventory Management */}
              <div className="p-10 rounded-md bg-white shadow flex gap-4">
                <div className="flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faBoxes}
                    width={30}
                    height={30}
                    className="text-[#fe9000] text-3xl"
                  />
                </div>
                <div className="flex-grow-0">
                  <h1 className="font-bold">INVENTORY MANAGEMENT</h1>
                  <p className="mt-1">
                    Optimize your stock levels with our advanced inventory
                    management solutions. Track and manage your inventory
                    seamlessly.
                  </p>
                </div>
              </div>

              {/* Payment of Suppliers */}
              <div className="p-10 rounded-md bg-white shadow flex gap-4">
                <div className="flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faMoneyCheckAlt}
                    width={30}
                    height={30}
                    className="text-[#fe9000] text-3xl"
                  />
                </div>
                <div className="flex-grow-0">
                  <h1 className="font-bold">PAYMENT OF SUPPLIERS</h1>
                  <p className="mt-1">
                    Simplify supplier payments with our secure and efficient
                    payment solutions. Ensure smooth operations and timely
                    transactions.
                  </p>
                </div>
              </div>

              {/* Warehouse Facilities */}
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
                  <h1 className="font-bold">WAREHOUSE FACILITIES</h1>
                  <p className="mt-1">
                    Our modern warehouses offer secure storage for your goods,
                    equipped with climate control and advanced inventory
                    systems.
                  </p>
                </div>
              </div>

              {/* Freight Forwarding */}
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
                  <h1 className="font-bold">FREIGHT FORWARDING</h1>
                  <p className="mt-1">
                    Streamline your supply chain with our reliable freight
                    forwarding services, tailored to meet your unique
                    transportation needs.
                  </p>
                </div>
              </div>

              {/* Cargo Ship Freight */}
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
                  <h1 className="font-bold">CARGO SHIP FREIGHT</h1>
                  <p className="mt-1">
                    Depend on our cargo ship services for cost-effective and
                    reliable transport of goods across international waters.
                  </p>
                </div>
              </div>

              {/* Reverse Logistics */}
              <div className="p-10 rounded-md bg-white shadow flex gap-4">
                <div className="flex-shrink-0">
                  <FontAwesomeIcon
                    icon={faRecycle}
                    width={30}
                    height={30}
                    className="text-[#fe9000] text-3xl"
                  />
                </div>
                <div className="flex-grow-0">
                  <h1 className="font-bold">REVERSE LOGISTICS</h1>
                  <p className="mt-1">
                    Manage returns, recycling, and reconditioning of products
                    with our specialized reverse logistics services.
                  </p>
                </div>
              </div>

              {/* Road Freight */}
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
                  <h1 className="font-bold">ROAD FREIGHT</h1>
                  <p className="mt-1">
                    Our road freight services ensure timely and secure delivery
                    of goods across local and regional destinations.
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
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3272.461585701859!2d-0.26777552501408375!3d5.658061494323333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzknMjkuMCJOIDDCsDE1JzU0LjciVw!5e1!3m2!1sen!2sgh!4v1734445577007!5m2!1sen!2sgh"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <footer className="bg-[#004efe] relative text-sm">
        {/* <div className="absolute -top-8 px-12 md:block hidden left-0 w-full">
          <div className="bg-[#004efe] p-8 relative mx-12">
            <span className="w-40 h-full top-0 -rotate-[25deg] bg-[#004efe] absolute -left-10 -top-4 rounded-lg"></span>

            <span className="w-40 h-full top-0 rotate-[25deg] bg-[#004efe] absolute -right-10 -top-4 rounded-lg"></span>
          </div>
        </div> */}
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
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/#services" className="hover:underline">
                      Services
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/#contact" className="hover:underline">
                      Contact Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/#work" className="hover:underline">
                      Work & Pay
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/#phone" className="hover:underline">
                      Phone Loans
                    </Link>
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
                      target="_blank"
                      href="https://www.facebook.com/raloctravels"
                      className="hover:underline "
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/raloctravels?igsh=amhlMjNjeDBxNmdi&utm_source=qr"
                      className="hover:underline"
                    >
                      Instagram
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
              <a
                href="https://www.facebook.com/raloctravels"
                className="text-gray-500 hover:text-white"
              >
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
              <a
                href="https://www.instagram.com/raloctravels?igsh=amhlMjNjeDBxNmdi&utm_source=qr"
                className="text-gray-500 hover:text-white ms-5"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 p-0" />
                <span className="sr-only">Instagram page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-white ms-5">
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
