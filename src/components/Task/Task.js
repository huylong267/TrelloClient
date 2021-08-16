import React from "react";
import "./Task.scss"

function Task() {
    return(
        <li className="task-item">
            <img
                src="data:image/jpeg;base64,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"
                alt="Long"/>
            Title: Long
        </li>
    )
}
export default Task;
