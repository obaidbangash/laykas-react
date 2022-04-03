import React from "react";
import FaqModule from "../components/faq/FaqModule";
import GuaideLine from "../components/guaideline/GuaideLine";
import CopyToClipBoard from "../components/clipboard/copyToClipBoard";
function FaqPage() {
  return (
    <>
      <CopyToClipBoard>
        <FaqModule />
        <GuaideLine />
      </CopyToClipBoard>
    </>
  );
}

export default FaqPage;
