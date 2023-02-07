import { Component, ReactNode } from "react";

interface Props {
    caption: string;
    description: string;
    image: string;
}

export default class Card extends Component <Props>{
    render(): ReactNode {
        return <div style={{borderRadius: 25}}>
            <p>{ this.props.caption }</p>
            <p>{ this.props.description }</p>
            <img src= { this.props.image } alt="kutya"></img>
        </div>
    }
}

