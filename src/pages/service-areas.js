import React from "react";
import PageContainer from "../components/PageContainer";
import Rule from "../components/Rule";

export default () => (
  <PageContainer>
    <p className="mb-4">Make Trifecta your Los Angeles Painting Company. Contact us for inquiries outside our listed service area.</p>
    <Rule />
    <h1 className="mb-2">RESIDENTIAL</h1>
    <table className="w-full mb-4">
      <tr><td>Mixed-use:</td><td>Urban apartments built on top of street-level shops and stores</td></tr>
      <tr><td>Walk-up:</td><td>Typically 4 to 6 stories tall, without an elevator</td></tr>
    </table>
    <Rule />
    <h1 className="mb-2">COMMERCIAL</h1>
    <p className="mb-4">Santa Clarita south to Long Beach</p>
    <p className="mb-4">Oxnard east to Pasadena</p>
    <Rule />
  </PageContainer>
)