import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem (){
    return (
        <article className="teacher-item">
<header>
    <img src="https://avatars0.githubusercontent.com/u/50677428?s=460&u=daee1236878fc93e88c208230a2b17ce18836e8c&v=4" alt="Vanessa Oliveira"/>
    <div>
        <strong>Vanessa Oliveira</strong>
        <span>Quimica</span>
    </div>
</header>
        <p>
        Entusiasta das melhores tecnologias de química avançada. 
            <br/> <br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>
        <footer>
            <p>
                preço/hora
                <strong>R$ 80.00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp" />
                Entrar em contato
            </button>
        </footer>
</article>
    );
}

export default TeacherItem;