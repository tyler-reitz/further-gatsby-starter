import React from "react";

import Button from '../Button'

export default () => (
   <div className="flex items-center bg-grey-lighter h-screen-3/4 sm:h-screen-1/3 ">
      <div className="max-w-xl w-5/6  mx-auto p-4 sm:p-8 md:my-8">
        <h2 className="leading-tight text-4xl sm:text-5xl mb-2">Further Gatsby Starter</h2>
        <p className="mb-4 leading-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quia totam ut commodi esse, excepturi consectetur harum asperiores recusandae deleniti nihil distinctio optio assumenda provident quae? Quos laudantium officiis earum.</p>
        <Button>
          Click Me
        </Button>
      </div>
   </div>
);