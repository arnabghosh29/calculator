import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateMatrix, addMatrices } from "../slice";
import MatrixTable from "./MatrixTable";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function MatrixApp() {
    const dispatch = useDispatch();
    const { sumMatrix, mulMatrix, addedMatrix } = useSelector(
        (state) => state.matrix
    );

    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);

    const handleGenerate = () => {
        if (rows > 0 && cols > 0) {
            dispatch(generateMatrix({ rows: (rows), cols: (cols) }));
        }
    };

    const handleAdd = () => {
        dispatch(addMatrices());
    };

    return (
        <Container className="mt-5">
            <Row className="mb-3">
                <Col>
                    <Form.Control
                        type="number"
                        placeholder="Rows"
                        onChange={(e) => setRows(e.target.value)}
                    />
                </Col>
                <Col>
                    <Form.Control
                        type="number"
                        placeholder="Columns"
                        onChange={(e) => setCols(e.target.value)}
                    />
                </Col>
                <Col>
                    <Button onClick={handleGenerate}>Generate</Button>
                </Col>
            </Row>

            <MatrixTable data={sumMatrix} title="Matrix (i + j)" />
            <MatrixTable data={mulMatrix} title="Matrix (i * j)" />

            {sumMatrix.length > 0 && mulMatrix.length > 0 && (
                <Button variant="success" onClick={handleAdd} className="mb-3">
                    Add Matrix
                </Button>
            )}

            {addedMatrix && <MatrixTable data={addedMatrix} title="Added Matrix" />}
        </Container>
    );
}

export default MatrixApp;
