import React from "react";

const SEO = ({ title, description }) => {
  const siteTitle = "Holy Touch Hospital";
  const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <>
      <title>{finalTitle}</title>
      <meta
        name="description"
        content={description || "Trusted Surgical Care in Patuakhali"}
      />
      <meta property="og:title" content={finalTitle} />
    </>
  );
};

export default SEO;
