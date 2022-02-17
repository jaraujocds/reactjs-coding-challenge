import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const { t, i18n } = useTranslation();

  const setSpanish = () => {
    window.localStorage.setItem("preferredLang", "es");
    i18n.changeLanguage("es");
  };

  const setEnglish = () => {
    window.localStorage.setItem("preferredLang", "en");
    i18n.changeLanguage("en");
  };

  return (
    <header className="flex flex-row items-center h-24 px-5 bg-teal-600">
      <Link to="/" className="flex-1">
        <h1 className="text-3xl font-bold text-white">
          {t("Rick and Morty Characters")}
        </h1>
      </Link>
      <div className="flex flex-row gap-2">
        <img
          src="/en.svg"
          className="w-10 h-10 hover:cursor-pointer"
          alt="uk flag"
          onClick={setEnglish}
        />
        <img
          src="/es.svg"
          className="w-10 h-10 hover:cursor-pointer"
          alt="spain flag"
          onClick={setSpanish}
        />
      </div>
    </header>
  );
};

export default Header;
