import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hook/useCart';
// import useProducts from '../Hook/useProduct';
import PageTitle from '../Page Title/PageTitle';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    // Products data load 
    // const [products, setProducts] = useProducts();
    // const [products, setProducts] = useState([]);

    // const [cart, setCart] = useCart(products);
    // const [pageCount, setPageCount] = useState(0);
    // const [currentPage, setCurrentPage] = useState(0)
    // const [pageSize, setPageSize] = useState(10)


    // useEffect(() => {
    //     fetch(`http://localhost:5000/product?page=${currentPage}&size=${pageSize}`)
    //         .then(res => res.json())
    //         .then(data => setProducts(data));
    // }, [pageCount, pageSize])


    // useEffect(() => {
    //     fetch('http://localhost:5000/productCount')
    //         .then(res => res.json())
    //         .then(data => {
    //             const count = data.count;
    //             const pages = Math.ceil(count / 10)
    //             setPageCount(pages)
    //         })
    // }, [])



    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(9);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [page, size]);

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 11);
                setPageCount(pages);
            })
    }, [])







    /*--------- // Use that in another component // --------- */


    const handleAddToCart = (selectedProduct) => {
        // New product push in Cart array 

        const existProduct = cart.find(product => product._id === selectedProduct._id);
        let newCart = []
        if (!existProduct) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            existProduct.quantity = existProduct.quantity + 1;
            newCart = [...rest, existProduct]
        }
        setCart(newCart);

        // Call Local storage Database 
        addToDb(selectedProduct._id);
    }




    return (
        <div className='shop-container'>

            {/* Page TItle  */}
            <PageTitle title='Shop'></PageTitle>

            {/* Product Container */}
            <div className="product-container">
                {
                    products.map(product => <Product key={product._id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }

                    <select onChange={e => setSize(e.target.value)}>
                        <option value="6">5</option>
                        <option value="9" selected>10</option>
                        <option value="15">15</option>
                        <option value="21">20</option>
                    </select>
                </div>
            </div>


            {/* Cart Container --- Cart.js*/}
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to={'/order'}>
                        < button className='review-btn'> Review Order</button>
                    </Link>
                </Cart>
            </div >
        </div >
    );
};

export default Shop;