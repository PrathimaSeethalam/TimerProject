/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */

import React from 'react';
import EditableCell from './EditableCell';
import Timer from '../Timer/Timer';

export default function AdminRow(props) {
    function onDelEvent() {
        props.onDelEvent(props.product);
    }
    return (
        <tr className='eachRow'>
            <EditableCell
                onProductTableUpdate={props.onProductTableUpdate}
                cellData={{
                    type: 'taskName',
                    value: props.product.taskName,
                    id: props.product.id
                }}
            />
            <EditableCell
                onProductTableUpdate={props.onProductTableUpdate}
                cellData={{
                    type: 'taskId',
                    value: props.product.taskId,
                    id: props.product.id
                }}
            />
            <EditableCell
                onProductTableUpdate={props.onProductTableUpdate}
                cellData={{
                    type: 'tasklastName',
                    value: props.product.tasklastName,
                    id: props.product.id
                }}
            />
            <EditableCell
                onProductTableUpdate={props.onProductTableUpdate}
                cellData={{
                    type: 'role',
                    value: props.product.role,
                    id: props.product.id
                }}
            />

            <Timer />

            <td className='del-cell'>
                <input
                    type='button'
                    onClick={onDelEvent}
                    value='X'
                    className='del-btn'
                />
            </td>
        </tr>
    );
}
