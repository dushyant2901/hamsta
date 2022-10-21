import React from "react";
import SectionData from "../components/SectionData";
import SectionTitle from "../components/SectionTitle";
const Section = ({ title, data }) => {
  return (
    <section className="container mx-auto py-10 px-2">
      <SectionTitle title={title} />
      <SectionData data={data} />
    </section>
  );
};

export default Section;
