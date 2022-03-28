import React, { useState } from "react";
import arrowDown from "../../assets/angledown.png";
import arrowUp from "../../assets/angleup.png";

function Faq({ index }) {
  const [isOpen, setIsOpen] = useState(false);
  const _accordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="faq-wrapper">
        <div className="faq-header" onClick={_accordion}>
          <span>Can I purchase a gift certificate?</span>{" "}
          <span>
            {!isOpen ? (
              <img src={arrowDown} alt="arrowDown" />
            ) : (
              <img src={arrowUp} alt="arrowUp" />
            )}
          </span>
        </div>
        {isOpen && (
          <div className="faq-body">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
              facilisis egestas consequat orci. Nam ullamcorper pretium massa
              neque tortor et et fringilla pretium. Diam nulla malesuada aliquam
              scelerisque feugiat. Lorem purus scelerisque consectetur blandit
              ut amet ornare fermentum iaculis. Quam turpis id etiam nisi
              aliquam mattis eget tincidunt pellentesque. Ipsum ac vitae dictum
              lorem imperdiet. Nunc aliquam in at purus arcu dapibus commodo.
              Et.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Faq;
