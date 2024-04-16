import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-black py-4 mt-8 fixed bottom-0 w-full bg-white">
      <p>
        Made by{" "}
        <a
          href="https://marcioluiz.tec.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black"
        >
          Márcio Luiz
        </a>{" "}
        with &#10084; in BH, MG - Brasil
      </p>
    </footer>
  );
};

export default Footer;
