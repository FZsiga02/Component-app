import { Component, ReactNode } from "react";
import { Product as ProductInterface } from "../Product";

interface Props {
    product: ProductInterface
}

export default class Product extends Component<Props> {
    render(): ReactNode {
        return <p style={ {color: this.props.product.stocked ? 'black': 'red'} }
        >{ this.props.product.name } - { this.props.product.price }</p>
    }
}

