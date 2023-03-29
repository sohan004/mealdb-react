import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Card from './Card/Card';
import { delet, getData, local } from '../Utiliti';
import Food from './Food';

const Header = () => {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json()).then(data => setApiData(data))
    }, [])

    const [save, setSave] = useState([])
    const [sam, setSam] = useState(0)

    const click = (c, tf) => {
        tf ? local(c) : delet(c)
        setSam(sam > 10 ? 0 : sam + 1)
    }


    useEffect(() => {
        let newData = []
        const getData2 = getData()
        if (getData2 && apiData.length > 0) {
            for (const id in getData2) {
                const singleData = apiData.find(g => g.id === id)
                const quantity = getData2[id]
                const newSingle = { ...singleData, quantity }
                newData.push(newSingle)
            }
        }
        setSave(newData)
    }, [apiData, sam])



    return (
        <>
            <div className='row d-flex flex-column-reverse flex-md-row'>
                <div className="col-12 col-md-8">
                    <div className="row g-3 my-4">
                        {apiData.map(a => <Card click={click} key={a.id} a={a}></Card>)}
                    </div>
                </div>
                <div className="col-12 col-md-4 ">
                    <div className='my-4 bg-light shadow-lg p-3 rounded-3'>
                        <h3 className='text-center mb-4'>Selected Products</h3>
                        <div className='d-flex justify-content-between'>
                            <h6>Name.</h6>
                            <h6>Qn.</h6>
                            <h6>price</h6>
                            <h6>+-</h6>
                        </div>
                        <ol>{save.map(s => <Food click={click} s={s}></Food>)}</ol>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Header;