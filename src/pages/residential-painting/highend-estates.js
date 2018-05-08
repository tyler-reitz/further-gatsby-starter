import React from "react";
import PageContainer from "../../components/PageContainer";
import Rule from "../../components/Rule";
import { H1, H2, H3, H4, P1, P2, P3 } from "../../components/Typography";

import bgImg from "../../assets/images/feat-estate.jpg";

export default () => (
  <PageContainer bgImg={bgImg}>
    <H1>High-End Estates</H1>
    <Rule />
    <H3>Confident, reliable and responsible.</H3>
    <P2>
      {" "}
      We work directly with homeowners, estate managers and influencers to
      deliver on expectations. Our management is smart, articulate, forward
      thinking and always available in person, by phone or email. And our
      painting teams are made up of a cohesive unit of highly skilled employee
      craftsmen: when we paint luxury estates in Los Angeles, our painters are
      never sub-contracted.
    </P2>
    <Rule />
    <H3>Full interior and exterior painting:</H3>
    <P2>
      {" "}
      From simply refreshing walls to highly detailed painting work, our
      tireless drive to minimize the stress of building work and deliver
      outstanding results for our clients is unsurpassed in the luxury
      refinishing market. We are absolutely certain that Trifecta is your single
      best option for all of your refinishing needs. With unsurpassed attention
      to detail, we use LED lights to double-check our work.
    </P2>
    <Rule />
    <H3>Premium lacquer and fine finishing.</H3>
    <P2>
      Specializing in kitchens and cabinetry, we start with comprehensive
      surface preparation, moving through to custom staining and lacquer. We
      also offer finish carpentry services and wallpaper removal and
      installation. Our team of skilled artisans can execute any job to the
      highest standards.
    </P2>
    <Rule />
    <H3>Airtight privacy.</H3>
    <P2>
      As our client, your privacy, your trust and your personal space is
      paramount to delivering the most extraordinary service experience. Our
      promise to you: All painters are fully vetted, and the job site supervisor
      is identifiable. Absolutely no cell phones are brought onto the premises,
      except for the supervisor. Your address, phone number and any other
      personal information is guarded and never shared with anyone outside of
      the job.
    </P2>
    <Rule />
    <H3>Fully insured.</H3>
    <P2>
      When you work with CertaPro Painters White Glove Painting Service, you
      will have peace of mind that you and your valuables are protected. We
      Carry:
    </P2>
    <table className="w-full mb-8">
      {[
        ["Full Workers Comp Insurance"],
        ["$2M Liability Insurance"],
        ["$1M Auto Liability Insurance"],
        ["$1M Umbrella Insurance"]
      ].map((row, idx) => (
        <tr
          className={`text-lg text-primary leading-normal my-4 ${
            idx % 2 ? "" : "bg-grey-light"
          }`}
        >
          <td className="font-semibold p-4 text-center">
            <H4>✔︎</H4>
          </td>
          <td className="p-4 text-center">
            <P1 className="font-medium">{row[0]}</P1>
          </td>
        </tr>
      ))}
    </table>
    <Rule />
    <H3>Not just clean, pristine.</H3>
    <P2>
      We put a heavy emphasis on cleanliness and dust collection. When we paint
      luxury homes in Los Angeles, we bring an air scrubber on site for every
      job. We are equipped for dustless sanding and employ HEPA vacuums for
      cleanup. We cover hard floors with durable ram board and soft floors with
      heavy duty 4 mil plastic, and we also bring our own portable toilet.
    </P2>
  </PageContainer>
);
