
import React from "react";
import bgImg from '../../assets/images/feat-interior.jpg';
import { TwoUp } from "../../components/ImagesContainers";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";
import { H1, H3, P3 } from "../../components/Typography";


export default () => (
  <PageContainer bgImg={bgImg}>
    <H1>Interior Painting</H1>
    <Rule />  
    <H3>We save you the trouble.</H3>
    <P3>Painting a home is a lot of work. Let us do it so you don’t have to. Our clean and efficient crews know how to paint your home are total professionals, with years of experience painting homes in Los Angeles. Every room in your house has its own particular requirements, and that’s why we have different techniques for painting kitchens, living rooms, bathrooms, and bedrooms.</P3>
    <TwoUp />
    <Rule />
    <H3>We listen to you.</H3>
    <P3>We’re here to answer your questions, and we pay careful attention to your concerns. The last thing you want when you’re getting your house painting in Los Angeles is someone comes into your home and thinks they know better than you about what color or sheen you want for your home. Trifecta will work with you to provide guidance and advice based on our extensive knowledge and experience — and we understand that the final decision on what you want will always be yours.</P3>
    <TwoUp />
    <Rule />
    <H3>Affordable, competitive rates.</H3>
    <P3>We understand that the cost to paint the interior of a house in Los Angeles is one of the first things a homeowner will look at when they want to hire an LA painting company. Trifecta can maintain a low overhead because our management and crews think with making every stage of our process as efficient as possible, without sacrificing quality. We can offer affordable rates thanks in part to excellent relationships with our suppliers, who help us find the best prices on paint products and supplies.</P3>
    <TwoUp />
    <Rule />
    <H3>Years of residential experience.</H3>
    <P3>Painting homes in Los Angeles is how we learned the business. Yes, we do commercial painting, but we got our start as a residential painting company, and we’ll always stay true to our roots with separate teams dedicated solely and only to painting houses and homes.</P3>
    <TwoUp />
  </PageContainer>
)