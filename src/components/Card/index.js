import Link from "gatsby-link";
import React from "react";
import Img from "gatsby-image"
const slugify = require('slugify')

export default ({ collection, title, path, root, sizes }) => {
  return (
    <div className="flex-shrink w-4/5 sm:w-45/100 lg:w-9/40 overflow-hidden mx-2 mb-8">
      <Link className="no-underline" to={`/${collection}/${ root || path ? (path ? path : '') : slugify(title)}`}>
        <h3 className="font-semibold text-primary text-center capitalize mb-2">
          {title}
        </h3>
        <Img
          className="w-full rounded"
          sizes={sizes}
        />
      </Link>
    </div>
  );
};
