/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */

import React, { useState } from 'react';

import AdminTable from '../../components/AdminTable/AdminTable';
import SearchBar from '../../components/AdminTable/SearchBar';

export default function AdminDashboard() {
    const [filterText, setFilterText] = useState('');
    const [products, setProducts] = useState([
        {
            id: 1,
            role: 'capsules user',
            taskId: 'hii@yahoo.com',
            tasklastName: 'fghjk',
            taskName: 'user1'
        },
        {
            id: 2,
            role: 'history user',
            taskId: 'rtyu@gmail.com',
            tasklastName: 'fghjk',
            taskName: 'user2'
        },
        {
            id: 3,
            role: 'roadster user',
            taskId: 'fghj@gmail.com',
            tasklastName: 'fghjk',
            taskName: 'user3'
        },
        {
            id: 4,
            role: 'rockets user',
            taskId: 'fghj@gmail.com',
            tasklastName: 'fghjk',
            taskName: 'user4'
        },
        {
            id: 5,
            role: 'capsules user',
            taskId: 'fghj@gmail.com',
            tasklastName: 'fghjk',
            taskName: 'user5'
        },
        {
            id: 6,
            role: 'capsules user',
            taskId: 'fghj@gmail.com',
            tasklastName: 'fghjk',
            taskName: 'user6'
        }
    ]);

    const handleRowDel = task => {
        var index = products.indexOf(task);
        products.splice(index, 1);
        setProducts(products);
    };

    const handleAddEvent = () => {
        console.log('add');
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(
            36
        );
        var product = {
            id: id,
            taskName: '',
            taskId: '',
            role: '',
            tasklastName: ''
            // delete: ''
        };
        products.push(product);
        // this.setState(this.state.products);
        console.log(products, 'products');
        setProducts(products);
    };

    const handleProductTable = evt => {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var tasks = products.slice();
        var newProducts = tasks.map(function (product) {
            for (var key in product) {
                if (key == item.name && product.id == item.id) {
                    product[key] = item.value;
                }
            }
            return product;
        });
        // this.setState({ products: newProducts });
        setProducts(newProducts);
    };
    return (
        <div>
            <h1 style={{ color: 'white' }}>
                Add or edit/delete a user as an admin
            </h1>

            <SearchBar
                filterText={filterText}
                // onUserInput={this.handleUserInput.bind(this)}
                onUserInput={() => setFilterText()}
            />
            <AdminTable
                onProductTableUpdate={e => handleProductTable(e)}
                onRowAdd={handleAddEvent}
                onRowDel={handleRowDel}
                products={products}
                filterText={filterText}
            />
        </div>
    );
}
