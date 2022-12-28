import "./style.css";
import { data } from "../../db";
import { useEffect, useState } from "react";

const Cards = ({ eventData }) => {
  const [item, setItem] = useState([]);

  const [currentItem, setCurrentItem] = useState([]);

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    eventData(currentItem);
  };

  const dragStartHandler = (e, cards) => {
    // setCurrentItem((prev) => [...prev, cards]);
    setCurrentItem(cards);
  };

  const dragEndHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setItem(data.cards);
  }, []);

  return (
    <div className="card_wrapper">
      {item.map((cards) => {
        return (
          <div
            className={"card"}
            key={cards.id}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragStart={(e) => dragStartHandler(e, cards)}
            onDragEnd={(e) => dragEndHandler(e)}
            draggable
          >
            <span className="card_time"> {`${cards.from} : 00`}</span>
            <span className="card_time">{`${cards.to}: 00`}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
