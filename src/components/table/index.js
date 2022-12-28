import "./style.css";
import { data } from "../../db";
import { useState, useEffect } from "react";

const Table = ({ table }) => {
  const [board, setBoard] = useState();

  const handleDrop = (e, item) => {
    e.preventDefault();
    const getIndex = board.item.indexOf(item);

    const tableCard = document.querySelectorAll(".table_card");

    board.item.map((__, index) => {
      if (index === getIndex) {
        const dropCard = document.createElement("div");
        dropCard.classList.add("drop_card");
        const cardItem = document.createElement("span");
        cardItem.classList.add("cardItem");
        dropCard.setAttribute("from", table.from);
        dropCard.setAttribute("to", table.to);

        cardItem.innerHTML = `
        ${table.from}:00 
        ${table.to}:00
        `;

        dropCard.appendChild(cardItem);

        tableCard[index].appendChild(dropCard);
      }
      return undefined;
    });
  };
  const handleOver = (e) => {
    e.preventDefault();

    console.log("over");
  };
  useEffect(() => {
    setBoard(data);
  }, []);

  return (
    <div className="table">
      {board?.item?.map((item) => {
        return (
          <div
            className="table_card"
            key={item.id}
            onDragOver={(e) => handleOver(e)}
            onDrop={(e) => handleDrop(e, item)}
          >
            <span>{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
