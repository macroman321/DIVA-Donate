import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="text-white bg-[#042940] focus:outline-none hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_130_148)">
            <path
              d="M9.465 24.3333H4.5C3.43913 24.3333 2.42172 23.9119 1.67157 23.1618C0.921427 22.4116 0.5 21.3942 0.5 20.3333V15.3333C0.5 14.2725 0.921427 13.2551 1.67157 12.5049C2.42172 11.7548 3.43913 11.3333 4.5 11.3333H13.357C13.8982 11.3336 14.4302 11.4736 14.9014 11.7397C15.3727 12.0058 15.7673 12.389 16.047 12.8523L19.264 9.31734C19.5301 9.02473 19.8512 8.78743 20.2091 8.619C20.5669 8.45058 20.9545 8.35432 21.3496 8.33575C21.7446 8.31718 22.1395 8.37664 22.5116 8.51075C22.8836 8.64487 23.2256 8.85099 23.518 9.11734C24.1014 9.65327 24.451 10.3968 24.4916 11.188C24.5321 11.9791 24.2605 12.7545 23.735 13.3473L16.935 20.9843C15.9961 22.0374 14.8453 22.8801 13.5579 23.4572C12.2706 24.0344 10.8758 24.3329 9.465 24.3333ZM4.5 13.3333C3.96957 13.3333 3.46086 13.5441 3.08579 13.9191C2.71071 14.2942 2.5 14.8029 2.5 15.3333V20.3333C2.5 20.8638 2.71071 21.3725 3.08579 21.7476C3.46086 22.1226 3.96957 22.3333 4.5 22.3333H9.465C10.5929 22.3329 11.708 22.0941 12.7372 21.6326C13.7664 21.1711 14.6864 20.4973 15.437 19.6553L22.242 12.0173C22.4187 11.8183 22.5101 11.5579 22.4967 11.2921C22.4832 11.0263 22.3659 10.7765 22.17 10.5963C21.9708 10.4173 21.7096 10.3229 21.442 10.3333C21.3093 10.339 21.1791 10.3709 21.0589 10.4274C20.9387 10.4839 20.831 10.5638 20.742 10.6623L16.316 15.5333C16.1217 16.0711 15.785 16.546 15.3419 16.9074C14.8988 17.2688 14.3659 17.5031 13.8 17.5853L8.639 18.3233C8.37644 18.361 8.10966 18.2928 7.89737 18.1338C7.68508 17.9748 7.54466 17.7379 7.507 17.4753C7.46934 17.2128 7.53752 16.946 7.69656 16.7337C7.85559 16.5214 8.09244 16.381 8.355 16.3433L13.517 15.6063C13.8035 15.5663 14.0642 15.419 14.2463 15.1941C14.4284 14.9693 14.5184 14.6838 14.4981 14.3952C14.4778 14.1065 14.3487 13.8364 14.1368 13.6393C13.925 13.4422 13.6463 13.3329 13.357 13.3333H4.5ZM11.5 9.40734C11.0468 9.40856 10.6067 9.25471 10.253 8.97134C8.541 7.59734 6.5 5.53334 6.5 3.53334C6.47545 2.71171 6.77728 1.91379 7.33948 1.31411C7.90168 0.714427 8.67849 0.361796 9.5 0.333344C10.2473 0.336254 10.9644 0.629161 11.5 1.15034C12.0356 0.629161 12.7527 0.336254 13.5 0.333344C14.3215 0.361796 15.0983 0.714427 15.6605 1.31411C16.2227 1.91379 16.5246 2.71171 16.5 3.53334C16.5 5.53334 14.459 7.59734 12.746 8.97234C12.3924 9.25514 11.9528 9.40862 11.5 9.40734ZM9.5 2.33334C9.20935 2.36251 8.94175 2.50456 8.75475 2.72897C8.56775 2.95337 8.47627 3.2422 8.5 3.53334C8.5 4.43334 9.651 5.92334 11.506 7.41234C13.349 5.92334 14.5 4.43334 14.5 3.53334C14.5237 3.2422 14.4323 2.95337 14.2453 2.72897C14.0582 2.50456 13.7906 2.36251 13.5 2.33334C13.2094 2.36251 12.9418 2.50456 12.7547 2.72897C12.5677 2.95337 12.4763 3.2422 12.5 3.53334C12.5 3.79856 12.3946 4.05291 12.2071 4.24045C12.0196 4.42799 11.7652 4.53334 11.5 4.53334C11.2348 4.53334 10.9804 4.42799 10.7929 4.24045C10.6054 4.05291 10.5 3.79856 10.5 3.53334C10.5237 3.2422 10.4323 2.95337 10.2453 2.72897C10.0582 2.50456 9.79065 2.36251 9.5 2.33334Z"
              fill="#DEEFE7"
            />
          </g>
          <defs>
            <clipPath id="clip0_130_148">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.5 0.333344)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="ml-3 font-normal text-base font-['Open_Sans'] text-right text-[#DEEFE7]">
          Donate
        </div>
      </button>
      {showModal ? (
        <>
          <div className="container justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-center p-5  rounded-t ">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_133_98)">
                      <path
                        d="M31.723 23C36.141 19.3921 39.1339 14.3322 40.1679 8.72275C40.3255 7.64877 40.25 6.55344 39.9464 5.51128C39.6427 4.46912 39.1182 3.50459 38.4084 2.68333C37.6874 1.84371 36.7939 1.1694 35.7887 0.706338C34.7835 0.243278 33.6903 0.00235949 32.5836 0L13.4265 0C12.3182 0.00060153 11.223 0.240686 10.216 0.703818C9.20903 1.16695 8.31401 1.8422 7.59221 2.68333C6.88057 3.50611 6.3551 4.47293 6.05175 5.51762C5.7484 6.56231 5.67434 7.6602 5.83463 8.73617C6.86371 14.3415 9.85381 19.3977 14.2699 23C9.85375 26.6036 6.86427 31.6613 5.83654 37.2677C5.67657 38.3429 5.75061 39.44 6.05361 40.4839C6.35662 41.5279 6.88144 42.4942 7.59221 43.3167C8.31401 44.1578 9.20903 44.833 10.216 45.2962C11.223 45.7593 12.3182 45.9994 13.4265 46H32.5836C33.6919 45.999 34.787 45.7588 35.7939 45.2957C36.8008 44.8326 37.6959 44.1575 38.418 43.3167C39.129 42.4942 39.6542 41.5281 39.9579 40.4842C40.2615 39.4403 40.3364 38.3432 40.1775 37.2677C39.1387 31.6604 36.1425 26.6041 31.723 23ZM34.1706 39.4048C33.9954 39.6647 33.7591 39.8777 33.4824 40.025C33.2057 40.1724 32.8971 40.2496 32.5836 40.25H13.417C13.1032 40.2502 12.7942 40.1733 12.517 40.0262C12.2399 39.879 12.0032 39.6661 11.8275 39.4061C11.6519 39.1461 11.5428 38.8469 11.5098 38.5349C11.4768 38.2229 11.5209 37.9075 11.6383 37.6165C13.6311 33.3267 16.6613 29.601 20.455 26.7758L21.7966 25.7044C22.1358 25.4346 22.5564 25.2878 22.9898 25.2878C23.4231 25.2878 23.8437 25.4346 24.1829 25.7044L25.5054 26.7605C29.2988 29.5957 32.3338 33.3233 34.3412 37.6127C34.4617 37.9025 34.5091 38.2175 34.4794 38.53C34.4497 38.8425 34.3436 39.1428 34.1706 39.4048ZM29.4192 36.4167H16.5775C18.2996 33.8843 20.4163 31.6441 22.847 29.7812L23.0003 29.6547L23.1364 29.7601C25.5662 31.6364 27.6863 33.8826 29.4192 36.4167Z"
                        fill="#005C53"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_133_98">
                        <rect width="46" height="46" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="relative justify-center items-center text-center p-6 flex-auto">
                  <h5 className="text-[#042940] font-medium text-2xl font-['lora']">
                    Confirm Your Donation
                  </h5>
                  <p className="text-[#005C53] my-4 font-normal text-base font-['Open_Sans'] ">
                    Confirm your transaction of 100 USDT towards{" "}
                    <p className="font-semibold">Fortune DIVA</p>
                  </p>
                </div>
                <div className="flex justify-evenly items-center p-6  rounded-b">
                  <button
                    className="text-[#042940] outline outline-offset-2 outline-[#042940] outline-1 rounded-md font-bold px-6 py-2 text-sm  mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-[#042940]  font-bold  text-sm px-6 py-3 rounded-md shadow mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
