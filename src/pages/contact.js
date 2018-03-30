import React, { Component } from 'react'

export default () => (
  <div className="p-4 py-8 text-center max-w-2xl mx-auto">
    <h2 className="mb-4">Contact Us</h2>
    <ul className="md:flex md: flex-row md:justify-around lg:justify-center list-reset leading-loose text-justify p-4">
      <li className="mx-4">Phone:&nbsp;<a href="tel+:(888) 888-8888">(888) 888-8888</a></li>
      <li className="mx-4">Fax:&nbsp;<a href="tel+:(888) 888-0000">(888) 888-8080</a></li>
      <li className="mx-4">Address:&nbsp;
        <a 
          href="https://www.google.com/maps/place/Further./@34.1399754,-118.1537657,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c37a4848fe75:0xb205bab15d04167b!8m2!3d34.139971!4d-118.151577"
          target="_blank"
        >
          123 This St., City, State Zip
        </a>
      </li>
    </ul>
    <div className="mb-8">
      <div className="flex justify-center items-center max-w-xl w-5/6 mx-auto md:h-screen-1/3 m-4 bg-grey h-screen-1/2 md:h-screen- text-grey-lighter text-3xl lg:my-8">
        map
      </div>
    </div>
    <h2 className="mb-4">Send Us A Message</h2>
    <form action="" className="p-4 max-w-lg mx-auto">
      <input className="block w-full border border-grey border-solid rounded mb-4 mb-4 h-10 p-2" type="text" id="name" placeholder="name *" />
      <input className="block w-full border border-grey border-solid rounded mb-4 mb-4 h-10 p-2" type="text" id="email" placeholder="email *" />
      <textarea className="block w-full border border-grey border-solid rounded mb-4 mb-4 p-2" id="message" cols="30" rows="10" placeholder="email *" ></textarea>

    </form>
  </div>
)