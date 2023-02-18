import "./Card.css"

// 1) Gdzie jest wywołana klasa Card
    // w pliku Ekspenses.js.  
//Jakie dane są do nie przekazne jako props?
    // klasa css oraz elementy ExpenseItem
function Card(props) {
    const classes= "card " + props.className;
    return <div className={classes}>{props.children}</div>
}
export default Card;