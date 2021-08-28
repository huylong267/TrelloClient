import React, {useState, useEffect} from "react";
import "./BoardContent.scss"
import Column from "../Column/Column";
import {initData} from "../../actions/initData";
import {isEmpty} from 'lodash';
import {mapOrder} from "../../utilities/sort";
import {Container, Draggable} from "react-smooth-dnd";


function BoarcContent() {
    const [board, setBoard] = useState({});
    const [columns, setColumn] = useState([]);
    useEffect(() => {
        const boardFromDB = initData.boards.find(b => b.id === 'board-1')
        if (boardFromDB) {
            setBoard(boardFromDB);
            setColumn(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
        }
    }, []);
    if (isEmpty(board)) {

        return <div className="not-found" style={{"padding": "10px", "color": "white"}}>Board not found!</div>
    }

    const  onColumnDrop = (dropResult)=>{
        console.log(dropResult);
    }
    return (

        <div className="board-content">
            <Container
                orientation="horizontal"
                onDrop={onColumnDrop}
                getChildPayload={index => columns[index]}
                dragHandleSelector=".column-drag-handle"
                dropPlaceholder={{
                    animationDuration: 150,
                    showOnTop: true,
                    className: 'cards-drop-preview'
                }}
            >
            {columns.map((column, index) => (
                <Draggable key={index}>
                    <Column  column={column}/>
                </Draggable>
            ))}
            </Container>

        </div>
    )
}

export default BoarcContent;
