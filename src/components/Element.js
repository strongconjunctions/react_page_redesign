import React from 'react';

export default class Element extends React.Component {
    render() {
        console.log(this.props.data);
        return (
            <li>
                {this.props.data.contents.map(function(element) {
                        return (
                            <div>
                                
                                <div className="conjugation">☌</div>
                                <h3 key={element.name} className="user-name">{element.name}</h3>
                                <p>{element.text}</p>
                            </div>
                        )
                    })}

            </li>
        )
    }
}