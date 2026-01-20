import { useHistory } from "react-router-dom";

export const Login = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/pagina-inicial')
    }

    return (
        <div>
            Login

            <button onClick={handleClick}>Página inicial</button>
        </div>
    );
}