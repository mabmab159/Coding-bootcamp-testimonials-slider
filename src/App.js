import React from "react";
import { Card } from "./Card";
import "./App.css";
import john from "./assets/image-john.jpg";
import tanya from "./assets/image-tanya.jpg";

function App() {
  const [info, setInfo] = React.useState(0);
  const data = [
    {
      id: 1,
      name: "Tanya Sinclair",
      title: "UX Engineer",
      text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
      image: tanya,
    },
    {
      id: 2,
      name: "John Tarkpor",
      title: "Junior Front-end Developer",
      text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
      image: john,
    },
  ];
  return (
    <div>
      <Card
        key={data[info].id}
        id={data[info].id}
        name={data[info].name}
        title={data[info].title}
        text={data[info].text}
        image={data[info].image}
        info={info}
        setInfo={setInfo}
      />
    </div>
  );
}

export default App;
