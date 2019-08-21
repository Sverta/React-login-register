import React, { Component } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from 'mdbreact';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskData: []
        };
    }

    // onload GET request
    async componentDidMount() {
        try {
            fetch('/tasks')
                .then(response => response.json())
                .then((result) => {
                    this.setState({
                        taskData: result
                    })
                })
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        const { taskData } = this.state;
        return (
            // <div>
            <MDBContainer>
                <MDBTable hover>
                    <MDBTableHead>
                        <tr>
                            <th>Number</th>
                            <th>State</th>
                            <th>Short Description</th>
                            <th>Priority</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            taskData.map((task, i) => (
                                <tr key={i} align="start">

                                    <td>{task.number}</td>
                                    <td>{task.state}</td>
                                    <td>{task.short_description}</td>
                                    <td>{task.priority}</td>

                                </tr>
                            ))
                        }

                    </MDBTableBody>
                </MDBTable>
                </MDBContainer>
            // </div>
        )
        // return (
        //     <div>
        //         <MDBContainer>
        //             <BDTable taskData={taskData} />
        //             <h1>HI</h1>
        //         </MDBContainer>
        //     </div>
        // )

    }
}

export default HomePage;


