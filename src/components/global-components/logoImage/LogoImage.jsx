import React from "react";

function LogoImage({ logoUrl, logoImage }) {
  return (
    <a href={logoUrl}>
      <img src={logoImage} alt={logoImage} />
    </a>
  );
}

export default LogoImage;
