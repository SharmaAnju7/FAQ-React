import { useState } from "react";
import Data from "../Data/Data.json";

const Hero = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };
  return (
    <div className="container mx-auto py-10  rounded-lg border border-gray-300 ml-1 px-8">
      <div className="max-w-2xl">
        {Data.map((item, index) => (
          <div key={index} className="mb-8">
            <div
              className="cursor-pointer p-4 rounded-lg bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
              onClick={() => handleQuestionClick(index)}
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform transition-transform ${
                  selectedQuestion === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {selectedQuestion === index && (
              <div className="mt-4 bg-orange-100 mx-auto p-4 rounded-lg">
                <p>{item.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
