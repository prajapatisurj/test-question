import React, { useState } from "react";
import "./transfer.css";

const TransferList = () => {
  const [select, setSelect] = useState([]); // Items selected on the right list
  const [transfer, setTransfer] = useState([]); // Items moved to the left list

  const arr = [
    { id: 1, name: "John Doe", amount: 1000 },
    { id: 2, name: "Jane Doe", amount: 500 },
    { id: 3, name: "Michael Doe", amount: 2000 },
  ];

  // Filter the original list to exclude transferred items
  const availableItems = arr.filter(
    (item) => !transfer.find((t) => t.id === item.id)
  );

  const handleSelect = (item, isRightSide) => {
    // Handle item selection on both sides
    const list = isRightSide ? select : transfer;
    const setList = isRightSide ? setSelect : setTransfer;

    if (list.find((selected) => selected.id === item.id)) {
      // Deselect if already selected
      setList(list.filter((selected) => selected.id !== item.id));
    } else {
      // Add to the selection
      setList([...list, item]);
    }
  };

  const handleMoveToLeft = () => {
    setTransfer(
      transfer.filter((item) => !select.find((s) => s.id === item.id))
    );
    setSelect([]);
  };

  const handleMoveToRight = () => {
    setTransfer([...transfer, ...select]);
  };
  
  return (
    <div className="main">
      <div className="transfer-list">
        <h1>Transfer List</h1>
        <div className="transfer-list__container">
          {/* Available Items (Right Side) */}
          <div className="list right-list">
            <h2>Available Items</h2>
            {availableItems.map((item) => (
              <div
                key={item.id}
                className={`list-item ${
                  select.find((s) => s.id === item.id) ? "selected" : ""
                }`}
                onClick={() => handleSelect(item, true)}
              >
                {item.name}
              </div>
            ))}
          </div>

          {/* Buttons to Move */}
          <div className="buttons">
            <button
              onClick={handleMoveToRight}
              disabled={select.length === 0}
              className="move-button"
            >
              Move Right ➡️
            </button>
            <button
              onClick={handleMoveToLeft}
              disabled={select.length === 0}
              className="move-button"
            >
              ⬅️ Move Left
            </button>
          </div>

          {/* Transferred Items (Left Side) */}
          <div className="list left-list">
            <h2>Transferred Items</h2>
            {transfer.map((item) => (
              <div
                key={item.id}
                className={`list-item ${
                  select.find((s) => s.id === item.id) ? "selected" : ""
                }`}
                onClick={() => handleSelect(item, false)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferList;
