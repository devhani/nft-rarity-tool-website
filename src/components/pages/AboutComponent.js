import React from 'react'
import { Button, Col, Jumbotron, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export const About = () => {
    const history = useHistory()
    return (
        <Jumbotron id="about" className="container-fluid">
            <Row className="p-5">
                <Col id="aboutBlock" sm={10} className="mx-auto py-5">
                    <h1 className="display-1">About</h1>
                    <hr />
                    <p className="lead">
                        Lorem ipsum dolor sit amet. Sed aliquam libero cum recusandae incidunt id numquam obcaecati vel reiciendis fuga ad tempora galisum et debitis laudantium. Qui culpa temporibus id quis voluptatem est voluptatem ducimus et quas sapiente et omnis tempora aut itaque sunt et expedita molestias.
                        Lorem ipsum dolor sit amet. Sed aliquam libero cum recusandae incidunt id numquam obcaecati vel reiciendis fuga ad tempora galisum et debitis laudantium. Qui culpa temporibus id quis voluptatem est voluptatem ducimus et quas sapiente et omnis tempora aut itaque sunt et expedita molestias.
                        Lorem ipsum dolor sit amet. Sed aliquam libero cum recusandae incidunt id numquam obcaecati vel reiciendis fuga ad tempora galisum et debitis laudantium. Qui culpa temporibus id quis voluptatem est voluptatem ducimus et quas sapiente et omnis tempora aut itaque sunt et expedita molestias.

                    </p>
                </Col>
                <Col id="roadMap" sm={8} className="mx-auto py-5 mt-5">
                    <h2 className="display-2">RoadMap</h2>
                    <hr />
                    <p className="lead">
                        <ul>
                            <li>stuff</li>
                            <li>stuff</li>
                            <li>stuff</li>
                            <li>stuff</li>
                            <li>stuff</li>
                            <li>stuff</li>
                        </ul>
                    </p>
                </Col>

                <Button className="col-6 mx-auto my-5" variant="dark" size="lg" onClick={() => history.push('/')}>Go back</Button>
            </Row>
        </Jumbotron>
    )
}
