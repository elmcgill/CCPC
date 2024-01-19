import React, {useState} from 'react';
import './DisplayProduct.css';
import img1 from '../../imgs/1.jpg';
import img2 from '../../imgs/2.jpg';
import img3 from '../../imgs/3.jpg';
import img4 from '../../imgs/4.jpg';
import img5 from '../../imgs/5.jpg';
import img6 from '../../imgs/6.jpg';
import img7 from '../../imgs/7.jpg';
import img8 from '../../imgs/8.jpg';

function DisplayProduct({product}) {

    const [curImg, setCurImg] = useState(img1);
    const [imgs, setImgs] = useState([
        img1, img2, img3, img4, img5, img6, img7, img8
        ]);

    const imgClick = (i) => {
        setCurImg(imgs[i]);
    }

    const renderGPU = () => {
        if(product.gpu === null) {
            return (
                <td className="part">Integrated Graphics</td>
            )
        } else {
            return (
                <td className="part">{product.gpu}</td>
            );
        }
    }

    const renderStorage = () => {
        if(product.storage === undefined){
            console.log(product);
        } else {
            return(
            product.storage.map((s, i) => (
                <p>{s}</p>
            )));
        }
    }

    const renderCPUCooler = () => {
        if(product.gpu === null) {
            return (
                <td className="part">Stock CPU Cooler</td>
            )
        } else {
            return (
                <td className="part">{product.cpu_cooler}</td>
            );
        }
    }

    return (
        <div className='display'>
            <div className='top'>
                <div className='gallery'>
                    <div className='active-img'>
                        <img src={curImg} />
                    </div>
                    <div className='imgs'>
                        {imgs.map((img, i) => {
                            return <img src={img} key={i} onClick={() => imgClick(i)} />
                        })}
                    </div>
                </div>
                <div className='specs'>
                    <table className='parts'>
                        <thead>
                            <th colSpan="2" className="spec-header">{product.title} - ${product.price}</th>
                        </thead>
                        <tr>
                            <th className="part-header">Processor</th>
                            <td className="part">{product.cpu}</td>
                        </tr>
                        <tr>
                            <th className="part-header">Graphics Card</th>
                            {renderGPU()}
                        </tr>
                        <tr>
                            <th className="part-header">Motherboard</th>
                            <td className="part">{product.motherboard}</td>
                        </tr>
                        <tr>
                            <th className="part-header">Memory (RAM)</th>
                            <td className="part">{product.memory}</td>
                        </tr>
                        <tr>
                            <th className="part-header">Storage (SSDs / HDDs)</th>
                            <td className="part">{renderStorage()}</td>
                        </tr>
                        <tr>
                            <th className="part-header">Power Supply Unit</th>
                            <td className="part">{product.psu}</td>
                        </tr>
                        <tr>
                            <th className="part-header">CPU Cooler</th>
                            {renderCPUCooler()}
                        </tr>
                        <tr>
                            <th className="part-header">Computer Case</th>
                            <td className="part">{product.case}</td>
                        </tr>
                    </table>
                    <div className='add-to-cart'>
                        <button className='btn'>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <h1 className='desc-header'>Computer Description</h1>
                <h3 className='desc-text'>{product.description}</h3>
                <p className='disclaimer'>Disclaimer : Motherboard and GPU are subject to change with respect to supply. All customers that have a motherboard or GPU will recieve an item of equal or greater quality and will be notified of this change.</p>
            </div>
        </div>
    )
}

export default DisplayProduct;
