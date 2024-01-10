import './Employee2.css'

function Employee2(props) {
    return(
        <div>
            <div className='personCard'>
                <img src={props.man.Image} alt="" width='300px' height='300px' />
                <h2>{props.man.name}</h2>
                <p className='role'>{props.man.role}</p>
                <div className='icons'>
                </div>
            </div>
        </div>
    )
}
export default Employee2