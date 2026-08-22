function Product({ name, price, inStock }) {
    const stockStyle = { color: inStock ? 'green' : 'red' }
    return (
        <div style={{ border: '1px solid #888', padding: '8px', margin: '4px' }}>
            <h3>{name}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            <p style={stockStyle}>{inStock ? 'In stock' : 'Out of stock'}</p>
        </div>
    )
}
export default Product