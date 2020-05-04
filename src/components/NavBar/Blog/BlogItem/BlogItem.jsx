import React, { Component } from "react"
import './BlogItem.css';

class BlogItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }

    }

    render() {
        const text = this.state.isOpen &&
            <div>
                {this.props.text}
            </div>
        return (
            <div className="card mx-auto card-body__div" style={{width: "70%"}}>
                <div>
                    <div className="card-header">
                        <div className="date">
                            <h6>
                                {this.props.date}
                            </h6>
                        </div>
                        <div>
                            <h2>
                            {this.props.title}
                            <button className="btn btn-primary btn-lg" onClick={this.handleClick}>
                            {this.state.isOpen ? "закрыть" : "открыть"}
                        </button>
                            </h2>
                        </div>
                        


                    </div>
                    <div className="card-body">
                        {text}
                    </div>
                </div>
            </div>
        );
    }


    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default BlogItem;