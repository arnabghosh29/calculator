import React from "react";
import Table from "react-bootstrap/Table";

const MatrixTable = ({ data, title }) => {
    if (!data || !data.length) return null;

    return (
        <div className="mb-4">
            <h5>{title}</h5>
            <Table bordered hover>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i}>
                            {row.map((val, j) => (
                                <td key={j}>{val}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default MatrixTable;
