import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Link from "next/link";
import links from "../src/navLinks";

const Footer = () => {
  return (
    <div className="bg-primary h-[100%]">
      <div className="ctn lg:px-20 flex flex-col lg:flex-row justify-between lg:items-center h-full gap-6 pt-10 pb-6 text-white">
        <svg
          width="120"
          height="90"
          viewBox="0 0 90 60"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M49.0568 48.289H55.6555C56.4766 48.289 57.0107 47.4283 56.6475 46.6927L34.5408 2.07641C34.1348 1.25538 32.9598 1.25843 32.5569 2.07946L10.6913 46.6958C10.3311 47.4313 10.8652 48.289 11.6832 48.289H37.5563C38.3773 48.289 38.9114 47.4252 38.5452 46.6897L35.6823 40.9638C35.4961 40.5884 35.1115 40.3534 34.6934 40.3534H24.2184C23.3913 40.3534 22.8571 39.4774 23.2356 38.7419L32.6667 20.4564C33.0818 19.6507 34.2386 19.6598 34.6415 20.4748L48.0648 47.6755C48.251 48.0509 48.6356 48.289 49.0568 48.289Z" />
          <path d="M54.4958 24.4822H80.0789C80.6863 24.4822 81.1868 24.9736 81.1868 25.584C81.2051 35.9033 74.057 44.9835 65.743 47.9898C65.2302 48.176 64.6594 47.9532 64.4 47.4771L61.5737 42.2945C61.2716 41.7421 61.4944 41.0523 62.056 40.7746C65.2119 39.2119 67.7299 37.3836 69.3903 35.122C69.9305 34.3864 69.3994 33.3487 68.4868 33.3578L57.612 33.4799C57.1756 33.486 56.7757 33.2327 56.5957 32.8359L53.4916 26.051C53.1559 25.3154 53.69 24.4822 54.4958 24.4822Z" />
          <path d="M45.8368 10.3019L42.8915 4.41122C42.6138 3.85878 42.8457 3.18425 43.4012 2.91872C57.6426 -3.94251 73.4222 1.78027 79.3037 14.9869C79.6302 15.7194 79.0961 16.5496 78.2934 16.5496H71.0659C70.6966 16.5496 70.3548 16.3634 70.1472 16.0582C64.5068 7.78079 56.8307 5.44895 47.369 10.7719C46.8196 11.0771 46.1207 10.8696 45.8368 10.3019Z" />
          <path d="M0 58.5136L1.97169 53.3005H3.30853L5.28022 58.5136H4.06851L3.68089 57.3965H1.54744L1.15982 58.5136H0ZM1.86181 56.432H3.35736L2.64927 54.4298H2.57907L1.86181 56.432Z" />
          <path d="M5.7471 58.7029V58.6663H6.76346C6.76346 59.0325 7.04121 59.2004 7.55092 59.2004C8.22239 59.2004 8.57339 58.7914 8.57339 58.1474V57.7171H8.50014C8.22239 58.1108 7.84392 58.3245 7.25791 58.3245C6.34532 58.3245 5.53345 57.711 5.53345 56.484C5.53345 55.2509 6.34532 54.6436 7.25791 54.6436C7.84087 54.6436 8.21323 54.8481 8.50014 55.2418H8.57339L8.64664 54.7443H9.5806V58.0223C9.5806 59.5636 8.53676 60.0001 7.56618 60.0001C6.3148 60.0031 5.76236 59.5087 5.7471 58.7029ZM8.59475 56.484C8.59475 55.8766 8.14914 55.4768 7.55702 55.4768C6.96491 55.4768 6.54981 55.8064 6.54981 56.484C6.54981 57.1555 6.96491 57.4912 7.55702 57.4912C8.14914 57.4912 8.59475 57.0914 8.59475 56.484Z" />
          <path d="M10.3469 56.6305C10.3469 55.3028 11.1863 54.6436 12.3705 54.6436C13.5089 54.6436 14.2476 55.3517 14.2476 56.5267C14.2476 56.6427 14.2415 56.774 14.2262 56.8991H11.3572C11.4243 57.5278 11.8242 57.8636 12.3644 57.8636C12.694 57.8636 12.984 57.7262 13.1396 57.476H14.1255C13.9057 58.1627 13.2709 58.6144 12.3736 58.6144C11.1283 58.6175 10.3469 57.9094 10.3469 56.6305ZM13.2373 56.2215C13.158 55.666 12.7612 55.3974 12.3186 55.3974C11.8761 55.3974 11.4701 55.6904 11.3755 56.2215H13.2373Z" />
          <path d="M15.0195 58.5137V56.4169C15.0195 55.1746 15.749 54.6436 16.9332 54.6436C18.1236 54.6436 18.8469 55.1624 18.8469 56.4046V58.5137H17.8397V56.4046C17.8397 55.8125 17.5253 55.5073 16.9332 55.5073C16.3411 55.5073 16.0359 55.8217 16.0359 56.4199V58.5167H15.0195V58.5137Z" />
          <path d="M19.6133 56.6304C19.6133 55.3027 20.4252 54.6435 21.3377 54.6435C21.9146 54.6435 22.2931 54.8419 22.58 55.2417H22.6532V53.3005H23.6604V58.5136H22.7265L22.6532 58.01H22.58C22.2961 58.4037 21.9238 58.6174 21.3377 58.6174C20.4221 58.6174 19.6133 57.9673 19.6133 56.6304ZM22.6715 56.6304C22.6715 55.9162 22.2564 55.4767 21.6552 55.4767C21.0722 55.4767 20.648 55.8643 20.648 56.6304C20.648 57.3965 21.0722 57.7841 21.6552 57.7841C22.2564 57.7841 22.6715 57.3446 22.6715 56.6304Z" />
          <path d="M24.4233 56.6305C24.4233 55.2937 25.2352 54.6436 26.1478 54.6436C26.7247 54.6436 27.1031 54.8481 27.39 55.2418H27.4633L27.5365 54.7443H28.4705V58.5137H27.5365L27.4633 58.0101H27.39C27.1062 58.413 26.7338 58.6175 26.1478 58.6175C25.2352 58.6175 24.4233 57.9582 24.4233 56.6305ZM27.4846 56.6305C27.4846 55.9163 27.0696 55.4768 26.4683 55.4768C25.8853 55.4768 25.4611 55.8644 25.4611 56.6305C25.4611 57.3966 25.8853 57.7842 26.4683 57.7842C27.0665 57.7842 27.4846 57.3447 27.4846 56.6305Z" />
          <path d="M31.3914 55.9071C31.3914 54.1246 32.4505 53.1968 33.9765 53.1968C35.115 53.1968 36.2687 53.8621 36.3633 55.2356H35.2401C35.1455 54.5214 34.5534 54.1704 33.9765 54.1704C33.1006 54.1704 32.5145 54.7534 32.5145 55.9071C32.5145 57.0608 33.0975 57.6438 33.9765 57.6438C34.5534 57.6438 35.1363 57.2867 35.2401 56.5694H36.3633C36.2687 57.949 35.115 58.6143 33.9765 58.6143C32.4474 58.6174 31.3914 57.6895 31.3914 55.9071Z" />
          <path d="M36.9248 56.6305C36.9248 55.2876 37.7947 54.6436 38.985 54.6436C40.1906 54.6436 41.0452 55.2876 41.0452 56.6305C41.0452 57.9735 40.1906 58.6175 38.985 58.6175C37.7947 58.6175 36.9248 57.9735 36.9248 56.6305ZM40.0075 56.6305C40.0075 55.8278 39.5924 55.4463 38.9789 55.4463C38.3654 55.4463 37.9625 55.8247 37.9625 56.6305C37.9625 57.4271 38.3715 57.8147 38.9911 57.8147C39.5985 57.8147 40.0075 57.4271 40.0075 56.6305Z" />
          <path d="M41.8083 58.5137V56.4169C41.8083 55.1746 42.5378 54.6436 43.722 54.6436C44.9124 54.6436 45.6357 55.1624 45.6357 56.4046V58.5137H44.6285V56.4046C44.6285 55.8125 44.3142 55.5073 43.722 55.5073C43.1299 55.5073 42.8247 55.8217 42.8247 56.4199V58.5167H41.8083V58.5137Z" />
          <path d="M46.4019 57.5126C46.4019 57.4698 46.408 57.418 46.4171 57.3813H47.4182V57.418C47.4182 57.6743 47.7112 57.8636 48.1477 57.8636C48.5567 57.8636 48.8771 57.7384 48.8771 57.4393C48.8771 56.7465 46.4293 57.418 46.4293 55.8553C46.4293 55.1166 47.1008 54.6436 48.1019 54.6436C49.277 54.6436 49.8111 55.1197 49.8111 55.7759C49.8111 55.8125 49.8111 55.8431 49.805 55.8766H48.8039C48.8039 55.8705 48.81 55.8553 48.81 55.8247C48.81 55.605 48.6116 55.3944 48.1019 55.3944C47.6868 55.3944 47.4304 55.5104 47.4304 55.8095C47.4304 56.5176 49.8783 55.8247 49.8783 57.3874C49.8783 58.1261 49.2434 58.6144 48.1477 58.6144C46.8169 58.6175 46.4019 58.0528 46.4019 57.5126Z" />
          <path d="M50.6443 56.8562V54.7472H51.6607V56.8562C51.6607 57.4483 51.9659 57.7536 52.558 57.7536C53.1501 57.7536 53.4645 57.4331 53.4645 56.8349V54.7472H54.4717V56.8349C54.4717 58.0771 53.7422 58.6173 52.558 58.6173C51.3738 58.6173 50.6443 58.0984 50.6443 56.8562Z" />
          <path d="M55.3843 58.5136V53.3005H56.4006V58.5136H55.3843Z" />
          <path d="M57.9236 58.5137V55.608H57.0903V54.7473H57.9236V53.7401H58.9308V54.7473H59.8953V55.608H58.9308V58.5137H57.9236Z" />
          <path d="M60.5027 53.7034C60.5027 53.3616 60.7499 53.1113 61.0948 53.1113C61.4397 53.1113 61.6869 53.3586 61.6869 53.7034C61.6869 54.0483 61.4397 54.2956 61.0948 54.2956C60.7499 54.2956 60.5027 54.0453 60.5027 53.7034ZM60.5881 58.5136V54.7442H61.6045V58.5136H60.5881Z" />
          <path d="M62.5171 58.5137V56.4169C62.5171 55.1746 63.2466 54.6436 64.4308 54.6436C65.6211 54.6436 66.3445 55.1624 66.3445 56.4046V58.5137H65.3373V56.4046C65.3373 55.8125 65.0229 55.5073 64.4308 55.5073C63.8387 55.5073 63.5335 55.8217 63.5335 56.4199V58.5167H62.5171V58.5137Z" />
          <path d="M67.3211 58.7029V58.6663H68.3374C68.3374 59.0325 68.6152 59.2004 69.1249 59.2004C69.7964 59.2004 70.1474 58.7914 70.1474 58.1474V57.7171H70.0741C69.7964 58.1108 69.4179 58.3245 68.8319 58.3245C67.9193 58.3245 67.1074 57.711 67.1074 56.484C67.1074 55.2509 67.9193 54.6436 68.8319 54.6436C69.4148 54.6436 69.7872 54.8481 70.0741 55.2418H70.1474L70.2206 54.7443H71.1546V58.0223C71.1546 59.5636 70.1107 60.0001 69.1402 60.0001C67.8918 60.0031 67.3363 59.5087 67.3211 58.7029ZM70.1687 56.484C70.1687 55.8766 69.7231 55.4768 69.131 55.4768C68.5389 55.4768 68.1238 55.8064 68.1238 56.484C68.1238 57.1555 68.5389 57.4912 69.131 57.4912C69.7231 57.4912 70.1687 57.0914 70.1687 56.484Z" />
          <path d="M73.7095 58.5136L75.6812 53.3005H77.018L78.9897 58.5136H77.778L77.3904 57.3965H75.2569L74.8693 58.5136H73.7095ZM75.5713 56.432H77.0668L76.3587 54.4298H76.2855L75.5713 56.432Z" />
          <path d="M79.2458 57.5126C79.2458 57.4698 79.252 57.418 79.2611 57.3813H80.2622V57.418C80.2622 57.6743 80.5552 57.8636 80.9917 57.8636C81.4007 57.8636 81.7211 57.7384 81.7211 57.4393C81.7211 56.7465 79.2733 57.418 79.2733 55.8553C79.2733 55.1166 79.9448 54.6436 80.9459 54.6436C82.121 54.6436 82.6551 55.1197 82.6551 55.7759C82.6551 55.8125 82.6551 55.8431 82.649 55.8766H81.6479C81.6479 55.8705 81.654 55.8553 81.654 55.8247C81.654 55.605 81.4556 55.3944 80.9459 55.3944C80.5308 55.3944 80.2744 55.5104 80.2744 55.8095C80.2744 56.5176 82.7222 55.8247 82.7222 57.3874C82.7222 58.1261 82.0874 58.6144 80.9917 58.6144C79.6609 58.6175 79.2458 58.0528 79.2458 57.5126Z" />
          <path d="M83.3999 53.7034C83.3999 53.3616 83.6471 53.1113 83.992 53.1113C84.3369 53.1113 84.5841 53.3586 84.5841 53.7034C84.5841 54.0483 84.3369 54.2956 83.992 54.2956C83.6471 54.2956 83.3999 54.0453 83.3999 53.7034ZM83.4884 58.5136V54.7442H84.5048V58.5136H83.4884Z" />
          <path d="M85.2678 56.6305C85.2678 55.2937 86.0797 54.6436 86.9923 54.6436C87.5691 54.6436 87.9476 54.8481 88.2345 55.2418H88.3078L88.381 54.7443H89.315V58.5137H88.381L88.3078 58.0101H88.2345C87.9507 58.413 87.5783 58.6175 86.9923 58.6175C86.0797 58.6175 85.2678 57.9582 85.2678 56.6305ZM88.3291 56.6305C88.3291 55.9163 87.914 55.4768 87.3128 55.4768C86.7298 55.4768 86.3056 55.8644 86.3056 56.6305C86.3056 57.3966 86.7298 57.7842 87.3128 57.7842C87.911 57.7842 88.3291 57.3447 88.3291 56.6305Z" />
        </svg>
        <div className="font-bold text-2xl flex-grow lg:ml-4">
          <h2>Ready to talk growth.</h2>
          <p className="text-sm mt-2 lg:block hidden font-normal">{`© ${new Date().getFullYear()} Agenda Contulting Asia. All rights reserved`}</p>
        </div>
        <ul className="grid grid-cols-4 lg:grid-cols-1 lg:grid-rows-4 gap-2 flex-grow">
          {links.map((link) => (
            <li className="hover:text-secondary ani">
              <Link href={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className=" flex flex-col gap-2 lg:items-end">
          <p className="flex gap-2 items-center">
            <BsFillTelephoneFill />
            +852 2890 4550
          </p>
          <p className="flex gap-2 items-center">
            <FiMail />
            info@agconsulting.asia
          </p>
          <div className="flex text-2xl gap-6 mt-4">
            <a href="#" target="_blank">
              <BsFacebook />
            </a>
            <a href="#" target="_blank">
              <BsLinkedin />
            </a>
            <a href="#" target="_blank">
              <BsInstagram />
            </a>
          </div>
          <p className="text-sm mt-2 lg:hidden">{`© ${new Date().getFullYear()} Agenda Contulting Asia. All rights reserved`}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;