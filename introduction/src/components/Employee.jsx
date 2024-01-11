import './Employee.css'
function Employee(props){
    // const person = {
    //     name: 'lisa',
    //     age: 23,
    //     Image:'data:image/jpeg;base64,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'
    // }
    console.log(props);
    return(
    <div> 
        <img src={props.person.Image} alt="" width='300px' height='300px' />
        <h2>{props.person.name}</h2>
        <p className='role'>{props.person.role}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cum, sequi ex a amet facere, eius voluptatibus aperiam iste, magni aliquam lib
            ero nostrum fugiat similique itaque voluptatem aspernatur nam. Impedit.</p>
        <div className='icons'>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
        </div>

    </div>
    )
}
export default Employee