/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import React, { useEffect } from 'react';
import AdminRow from './AdminRow';

export default function AdminTable(props) {
    useEffect(() => {
        console.log(props.products, 'props/po');
    }, []);

    var onProductTableUpdate = props.onProductTableUpdate;
    var rowDel = props.onRowDel;
    var filterText = props.filterText;
    var product = props.products.map(function(product) {
        if (product.taskName.indexOf(filterText) === -1) {
            return;
        }
        return (
            <AdminRow
                onProductTableUpdate={onProductTableUpdate}
                product={product}
                onDelEvent={rowDel}
                key={product.id}
            />
        );
    });
    return (
        <div>
            <div>
                <button
                    type='button'
                    onClick={props.onRowAdd}
                    className='btn btn-success pull-right'
                >
                    Add
                </button>

                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th> Task Name</th>
                            <th>Task Id</th>
                            <th>Task last name</th>
                            <th>Role</th>
                            <th>Time start/stop</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>{product}</tbody>
                </table>
            </div>
        </div>
    );
}
