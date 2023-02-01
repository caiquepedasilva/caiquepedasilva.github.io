import './Conteudo.css'
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

function Conteudo() {
    return (
        <div>
            <a href='https://github.com/caiquepedasilva' target="_blank">
                <img src="https://github.com/caiquepedasilva.png"
                    alt='Foto do Caíque'
                    className='fotoPerfil'
                />
            </a>
            <p>
                Caíque Pereira da Silva
            </p>

            <div classname="">
                <h1>
                    Hi, I'm
                </h1>
                <h2>
                    I'm a Dev FrontEnd.
                </h2>
                <ul>
                    <li classname="">
                        <span>☕ </span>
                        Powered by coffee
                    </li>
                    <li classname="">
                        <span>🌎 </span>
                        Created in brazil
                    </li>
                    <li classname="">
                        <span>💼 </span>
                        Dev FrontEnd SECAD
                    </li>
                    <li classname="">
                        <a href='mailto:caiquepe.dasilva@gmail.com' target="_blank">
                            <span>📧 </span>
                        </a>
                        caiquepe.dasilva@gmail.com
                    </li>
                </ul>

                <a href='https://github.com/caiquepedasilva' target="_blank">
                    <AiFillGithub />
                </a>
                <a href='' target="_blank">
                    <AiFillFacebook />
                </a>
                <a href='https://www.linkedin.com/in/caiquepedasilva/' target="_blank">
                    <AiFillLinkedin />
                </a>
                <a href='https://www.instagram.com/caiquepe.dasilva/' target="_blank">
                    <AiFillInstagram />
                </a>
            </div>


        </div>

    )
}


export default Conteudo
