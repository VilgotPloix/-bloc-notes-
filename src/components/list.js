const List = (props) => {

    
    var cards = props.list.map((tests) => 
        <div key={tests} className="cards">
            <h1 className="cardTitle">{tests.title}</h1>
            <p className='cardContent'>{tests.content.props.children}</p>
        </div>
    
    )

    return (

        <div className="list">

        <button className="ajout">ajouter une note</button>

            {cards}

        </div>

    )

}

export default List