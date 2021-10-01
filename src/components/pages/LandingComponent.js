import React from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MintButton = () => {
    return (
        <Button variant="warning" size="lg">
            Mint pass
        </Button>
    )
}

const ConnectButton = () => {
    return (
        <Button variant="warning" size="lg">
            Connect
        </Button>
    )
}



export const LandingPage = ({ user }) => {
    return (
        <div className="container-fluid">
            {/**This is where the code will redirect the user
             * if they go to any other URL on the site before
             * connecting their wallet to it. 
             */}
            <Row id="landing" className="pt-5 px-5">
                <Col sm={10} md={6} className="text-white d-flex flex-column justify-content-center">
                    <h1>ToolThing</h1>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet. Sed aliquam libero cum recusandae incidunt id numquam obcaecati vel reiciendis fuga ad tempora galisum et debitis laudantium. Qui culpa temporibus id quis voluptatem est voluptatem ducimus et quas sapiente et omnis tempora aut itaque sunt et expedita molestias.
                        <br />
                        <Link className="btn btn-info mt-3" to="/about">
                            Learn More.
                        </Link>
                    </p>
                </Col>
                <Col sm={10} md={3} className="mx-auto" >
                    <img
                        alt="fangs-gif"
                        height={400}
                        width={400}
                        src="/10fangs.gif"
                        style={{ borderRadius: "20%" }}
                    />
                </Col>
                <Row className="pb-5">
                    <Col sm={3} md={5} className="d-flex flex-column mx-auto justify-content-center p-5">
                        {/**IF wallet is connected, show mint, otherwise, show connect
                         * but if the wallet is connected AND it already holds an NFT pass,
                         * redirect them to the /home route
                         */}
                        {user ? <MintButton /> : <ConnectButton />}
                    </Col>
                </Row>
            </Row>
        </div >
    )
}
