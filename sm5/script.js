document.getElementById('productForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const product = {
        title: document.getElementById('title').value,
        price: Number(document.getElementById('price').value),
        description: document.getElementById('description').value,
        image: "https://via.placeholder.com/150", 
        category: "electronics" 
    };

    const link = fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })

    const data = (await link).json();
    console.log(data);
});