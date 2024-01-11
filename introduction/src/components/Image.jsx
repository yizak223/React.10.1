import { useState } from "react";
import './image.css';

function Images(props) {
    const [image, setCount] = useState('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg');
    return (
        <div>
            <img className="mainImg" src={image} alt="" />
            <button onClick={
                () => {
                setCount('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg')
            }}>
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg" alt="" />
            </button>
            <button onClick={
                () => { setCount('https://media.istockphoto.com/id/546208904/photo/milky-way-at-pigeon-point-lighthouse-pescadero-california.jpg?s=2048x2048&w=is&k=20&c=7KDP1S1O2IcERLlxxaAb2sEikt7J9khhjR0_0nQ9GtI=') }}>
                <img src="https://media.istockphoto.com/id/546208904/photo/milky-way-at-pigeon-point-lighthouse-pescadero-california.jpg?s=2048x2048&w=is&k=20&c=7KDP1S1O2IcERLlxxaAb2sEikt7J9khhjR0_0nQ9GtI=" alt="" />
            </button>
            <button onClick={
                () => { setCount('https://media.istockphoto.com/id/1286897582/photo/the-lighthouse-at-norah-head-on-the-central-coast-in-regional-new-south-wales-in-australia.jpg?s=2048x2048&w=is&k=20&c=NzB5MHjC2RSNw6CltMbe2FhbDlCqDh4f2_qx_2MpeCQ=') }}>
                <img src="https://media.istockphoto.com/id/1286897582/photo/the-lighthouse-at-norah-head-on-the-central-coast-in-regional-new-south-wales-in-australia.jpg?s=2048x2048&w=is&k=20&c=NzB5MHjC2RSNw6CltMbe2FhbDlCqDh4f2_qx_2MpeCQ=" alt="" />
            </button>
            <button onClick={
                () => { setCount('https://media.istockphoto.com/id/971567440/photo/near-and-far.jpg?s=2048x2048&w=is&k=20&c=Eqfzl0rdEnHJLRR5Yw6Xpen5T8sryU2x8n9jcHwcqjQ=') }}>
                <img src="https://media.istockphoto.com/id/971567440/photo/near-and-far.jpg?s=2048x2048&w=is&k=20&c=Eqfzl0rdEnHJLRR5Yw6Xpen5T8sryU2x8n9jcHwcqjQ=" alt="" />
            </button>
        </div>
    )
}
export default Images