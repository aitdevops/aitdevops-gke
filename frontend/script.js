document.addEventListener('DOMContentLoaded', function() {
    const productServiceUrl = 'http://10.0.19.213:5001';
    const orderServiceUrl = 'http://10.0.20.243:5002';
    const userServiceUrl = 'http://10.0.22.225:5003';
    

    document.getElementById('fetch-products').addEventListener('click', function() {
        fetch(`${productServiceUrl}/products`)
            .then(response => response.json())
            .then(data => {
                const productsDiv = document.getElementById('products');
                productsDiv.innerHTML = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                const productsDiv = document.getElementById('products');
                productsDiv.innerHTML = 'Error fetching products. Service might be down.';
            });
    });

    document.getElementById('fetch-orders').addEventListener('click', function() {
        fetch(`${orderServiceUrl}/orders`)
            .then(response => response.json())
            .then(data => {
                const ordersDiv = document.getElementById('orders');
                ordersDiv.innerHTML = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
                const ordersDiv = document.getElementById('orders');
                ordersDiv.innerHTML = 'Error fetching orders. Service might be down.';
            });
    });

    document.getElementById('fetch-users').addEventListener('click', function() {
        fetch(`${userServiceUrl}/users`)
            .then(response => response.json())
            .then(data => {
                const usersDiv = document.getElementById('users');
                usersDiv.innerHTML = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                const usersDiv = document.getElementById('users');
                usersDiv.innerHTML = 'Error fetching users. Service might be down.';
            });
    });
});
