import React from "react";
import Slider from "../components/carrousel/Slider";
import Product from "../components/products/Product";
import "./Home.css";
import {useStateValue} from "../providers/StateProvider";
import productImg from "../imgs/slider-pc-1.png";

const productOne = {
  src:productImg,
  title: "Test PC",
  price: 599,
  cpu: "Ryzen 3 3400",
  graphics: "GTX 1660",
  mobo: "MSI B450",
  mem: "GSkill 3200",
  storage: "500GB SSD",
  case: "Corsair",
  psu: "EVGA Bronze 500 W"
}

function Home({loading}) {

  const [{products}, dispatch] = useStateValue();

  console.log(products);

  return (
    <div className='home'>
      <Slider />
      <div className='home_container'>
        <div className="home_mission">
          <h2>Company Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et velit et eros feugiat condimentum. Integer vehicula, nibh non gravida lacinia, ipsum ante sollicitudin nisl, viverra varius erat sem sit amet leo. Mauris vel fermentum elit, quis faucibus urna. Quisque vitae tincidunt arcu. Curabitur fringilla, risus venenatis ultrices imperdiet, sapien justo posuere lacus, sit amet tristique nunc neque sed tortor. Donec enim arcu, consectetur et turpis eget, facilisis luctus elit. Morbi finibus sollicitudin sapien sed varius. Morbi vel orci sem. Nullam consequat, ante a cursus fermentum, quam libero porttitor eros, vitae varius tortor neque quis neque. Vestibulum luctus, turpis sit amet fermentum ornare, magna est congue mi, et fermentum nibh nulla vitae eros. Sed at sapien lorem. Quisque nec pretium magna.</p>
          <h3>-Ethan 'Unknown Koder'</h3>
        </div>
        <h1>Entry Level Gaming Computers</h1>
        <div className="home_products">
          {loading ? <h1>Loading Products</h1> : products[0].map((product, index) => (
            <Product key={index} src={productImg} title={product.title} price={product.price} cpu={product.cpu} graphics={product.gpu} mobo={product.motherboard} mem={product.memory} storage={product.storage} case={product.case} psu={product.psu} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
