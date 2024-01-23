import { Testemonies } from "../../components/Home/Testemonies";
import { About } from "../../components/Home/About";
export function Home(props) {
    return (
        <div>
            <h1>Wellcome {props.name?props.name:null} to our finance web</h1>
            <About />
            <Testemonies />
        </div>
    )
}