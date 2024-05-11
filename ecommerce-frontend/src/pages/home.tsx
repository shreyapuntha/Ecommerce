import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const Home = () =>{
    const addToCartHandler = () =>{}
    return(
        <div className="home">
            <section></section>.
            <h1>
                Latest Product
                <Link to="/search" className="findmore">More</Link>
            </h1>
            <main>
                <ProductCard productId="asas" name="Macbook" price={123323} stock={23}
                handler={addToCartHandler}
                photo={"https://www.maplestore.in/cdn/shop/files/r1587_Silver_PDP_Image_Position-1__en-IN_083d34e8-42f3-4ab5-9119-8128511450f0_823x.jpg?v=1701833356"}
                />
            </main>
        </div>
    )
}

export default Home