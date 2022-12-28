import { useState } from "react";
import Cards from "../cards";
import Table from "../table";
import "./style.css";

const Board = () => {
  const [tableData, setTableData] = useState([]);

  const handleData = (currentItem) => {
    setTableData(currentItem);
  };

  return (
    <div className="board">
      <Cards eventData={(card) => handleData(card)} />
      <Table table={tableData} />
    </div>
  );
};

export default Board;
