import React from 'react'
import ShowDown from 'showdown'
import Parse from 'html-react-parser'
import List from './list'
import stringify from 'json-stable-stringify'

const Corps = () => {

    const [title, setTitle] = React.useState('Titre');
    const [content, setContent] = React.useState('Content');
    const [arr, setArr] = React.useState([])

    const converter = new ShowDown.Converter()
    var html = converter.makeHtml(content)
    var lisible = Parse(html)

    var saved = []
    var things = {title: title, content: lisible}

    var testarossa = {name: "gustave", surname: "nutus", bonjour: true}

    saved.push(things)

    console.log(saved);

    // React.useEffect(() => {
    //     localStorage.setItem('notes', JSON.stringify(saved))
    // }, [saved])  
    
    
    
    return (
        <>
            <List list={arr} />
            <div className="corps">
                <div className="top">
                    <p className="title">{title}</p>
                    <p className="content">{lisible}</p>
                </div>
                <div className="bottom">
                   
                        <input className="titleInput" type="text" onChange={(e) => setTitle(e.target.value)} />
                        <textarea className="textInput" type="text" onChange={(e) => setContent(e.target.value)} />
                    <div className="submit"><input className="sub" type="submit" value="sauvegarder" onClick={() => setArr(saved)} /></div>
                   
                </div>
            </div>
        </>
    )
}

export default Corps