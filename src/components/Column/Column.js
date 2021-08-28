import React from "react";
import "./Column.scss"
import Card from "../Card/Card";
import {mapOrder} from "../../utilities/sort";
import {Container} from "react-smooth-dnd";

function Column(props) {
    const {column} = props;
    const cards = mapOrder(column.cards, column.cardOrder, "id");
    return (
        <div className="board-column">

            <header className="column-drag-handle">{column.title}</header>
            <div className="card-list">
                <Container
                    {...column.props}
                    groupName="col"
                    onDragStart={e => console.log("drag started", e)}
                    onDragEnd={e => console.log("drag end", e)}
                    onDrop={e => this.onCardDrop(column.id, e)}
                    getChildPayload={index =>
                        this.getCardPayload(column.id, index)
                    }
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    onDragEnter={() => {
                        console.log("drag enter:", column.id);
                    }}
                    onDragLeave={() => {
                        console.log("drag leave:", column.id);
                    }}
                    onDropReady={p => console.log('Drop ready: ', p)}
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'drop-preview'
                    }}
                    dropPlaceholderAnimationDuration={200}
                >
                    {cards.map((card, index) => <Card key={index} card={card}/>)}

                </Container>
            </div>
            <footer>Add another card</footer>
        </div>
    )
}

export default Column;
