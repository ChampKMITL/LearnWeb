

import React, { Component } from 'react';
    class Counter extends Component {
    constructor() {
        super();
        this.state = {
        count: 0,
        };
    }

    //บวก1
    IncrementCount = () => {
        this.setState((prevState) => ({
        count: prevState.count + 1,
    }), () => {
        // After the state is updated, check if count is less than or equal to 0
        if (this.state.count > 10) {
        // Display a window alert ถ้าน้อยกว่า 0 แล้วกดให้แสดงผล
        window.alert("Cannot Vote More");

        // Set count to 0 หลัง alert set ค่าเป็น 0
        this.setState({
            count: 10
        })
        
        }           
    });

};
    //ลบ1
    UnIncrementCount = () => {
        this.setState((prevState) => ({
                count: prevState.count - 1,
                    }), () => {
                        // After the state is updated, check if count is less than or equal to 0
                        if (this.state.count < 0) {
                        // Display a window alert ถ้าน้อยกว่า 0 แล้วกดให้แสดงผล
                        window.alert("Cannot Unvote");

                        // Set count to 0 หลัง alert set ค่าเป็น 0
                        this.setState({
                            count: 0
                        })
                        
                        }           
                    });

        };
    //อ่านค่าที่ได้มา
    readCount = () => {
        const { count } = this.state;
        if (count === 0) {
                return <p>Min</p>;
            } else if (count === 10) {
                return <p>Max</p>;
            } else {
                return <p>{count}</p>;
            }
        };

        // ส่งค่าไปที่เว็บ
    render() {
        return (
        <div id='countId'>
            <button id="button" onClick={this.IncrementCount}>Click to Vote</button>
            <div id='countShow'>
            <b><p>{this.readCount()}</p></b>
            </div>
            <button id="button" onClick={this.UnIncrementCount}>Click to UnVote</button>
        </div>
        );
    }
}



    export default Counter;
