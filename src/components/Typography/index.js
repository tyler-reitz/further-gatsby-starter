import React, { Component } from 'react'

export const H1 = ({ className, children, ...props }) => <h1 className={`font-gotham-bold text-5xl leading-none mb-4 ${className}`}>{children}</h1>
export const H2 = ({ className, children, ...props }) => <h2 className={`font-gotham-medium text-4xl leading-none mb-4 ${className}`}>{children}</h2>
export const H3 = ({ className, children, ...props }) => <h3 className={`font-gotham-medium text-3xl font-semibold mb-4 block ${className}`}>{children}</h3>
export const H4 = ({ className, children, ...props }) => <h4 className={`font-gotham-light text-2xl font-medium mb-4 ${className}`}>{children}</h4>

export const Small = ({ className, children, ...props }) => <span className={`block w-full font-medium ${className}`}>{children}</span>

export const P1 = ({ className, children, ...props }) => <p className={`text-xl leading-normal font-light my-4 ${className}`}>{children}</p>
export const P2 = ({ className, children, ...props }) => <p className={`text-lg font-light leading-normal my-4  ${className}`}>{children}</p>
export const p3 = ({ className, children, ...props }) => <p className={`text-base font-light leading-normal my-4 ${className}`}>{children}</p>
