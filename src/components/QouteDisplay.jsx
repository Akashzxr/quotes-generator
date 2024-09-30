import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import TextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion"


function QouteDisplay() {
  const [quote, setQuote] = useState(null);
  const [random, setRandom] = useState( Math.floor(Math.random() * 29));

  const getQuote = async () => {
    const result = await axios
      .get("https://dummyjson.com/quotes")
      .then((response) => {
        //setQoute(response.data.quotes[random]);
        setQuote(response.data.quotes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    const random = Math.floor(Math.random() * 29);
    setRandom(random);
  };

  useEffect(() => {
    getQuote();
  }, [random]);

  return (
    <div className="main-div w-96 h-56 bg-slate-500 rounded-md flex items-center flex-col justify-center px-5 gap-6 ">
      <div key={quote ? quote[random].id : 1} className="quotes-div w-full h-1/2 flex items-start flex-col gap-3 text-base text-white">
          <div className="quotes italic">
            "{quote ? quote[random].quote : "no qoutes"}"
          </div>
          <div className="author">
            -{quote ? quote[random].author : "no author"}
          </div> 
      </div>
      <button onClick={handleClick} className="button flex items-center justify-center gap-2 border border-black rounded-md w-1/2 h-8">
        Generate<FontAwesomeIcon icon={faArrowsRotate} />
      </button>
    </div>
  );
}

export default QouteDisplay;


