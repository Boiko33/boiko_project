import React, { useState } from "react"
import './BlogItem.css';

const BlogItem = (props) => {


    const [isOpen, setIsOpen] = useState(props.defaultOpen)


    let handleClick = () => {
        let changeOpen = !isOpen
        return (
            changeOpen
        )
    }


    const text = isOpen &&
        <div>
            {props.text}
        </div>
    return (
        <div className="card mx-auto card-body__div" style={{ width: "70%" }}>
            <div>
                <div className="card-header">
                    <div className="date">
                        <h6>
                            {props.date}
                        </h6>
                    </div>
                    <div>
                        <h2>
                            {props.title}
                            <button className="btn btn-primary btn-lg" onClick={() => setIsOpen(handleClick)}>
                                {isOpen ? "закрыть" : "открыть"}
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





export default BlogItem;