import React from "react";
import "./Column.scss"
import Task from "../Task/Task";

function Column() {
    return(
        <div className="board-column">
            <header>Header</header>
            <ul className="task-list">
                <Task/>

            </ul>
            <footer>Add another card</footer>
        </div>
    )
}
export default Column;
