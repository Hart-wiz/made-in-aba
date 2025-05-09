import React from "react";

const PageControl = () => {
  return (
    <div className="flex flex-row gap-6 justify-end px-9 py-5 bg-gray-600 text-white">
      <p className="italic">
        This is not the actual navbar, it is for page control :
      </p>

      <a href="/notfo" target="_blank" rel="noopener noreferrer">
        NotfoundPage
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        Home
      </a>
      <a href="/login" target="_blank" rel="noopener noreferrer">
        login/register
      </a>

      <a href="/auth/seller" target="_blank" rel="noopener noreferrer">
        Sellerpage
      </a>
      <a href="/auth/buyer" target="_blank" rel="noopener noreferrer">
        buyerpage
      </a>
    </div>
  );
};

export default PageControl;
