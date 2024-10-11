document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const product = {
        title: document.getElementById('title').value,
        price: Number(document.getElementById('price').value),
        description: document.getElementById('description').value,
        image: "https://via.placeholder.com/150", 
        category: "electronics" 
    };

    fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })

    .then(data => console.log(data))
});