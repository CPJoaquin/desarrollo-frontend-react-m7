const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className="landing-page-header">
                <b>Modulo 7: DESARROLLO FRONT END CON REACTJS</b>
            </div>
            <p className="landing-subtitle">Bienvenido</p>
            <p className="landing-text">
                Este módulo se centra en el uso de <b>React</b>, incluyendo la creación de <b>componentes</b>, y el uso de <b>Redux</b>
            </p>
            <p className="landing-subtitle">Temas cubiertos</p>
            <table className="landing-table">
                <tr>
                    <td>Componentes funcionales y de clase</td>
                    <td>Use de <b>React hooks como useState y use Effect</b></td>
                    <td>Creación de <b>custom hooks</b> como useForm</td>
                    <td>Gestión de variables de estado con <b>useState</b></td>
                    <td>Gestión de estado global con <b>Redux</b></td>
                    <td>Integración de <b>Redux</b> con <b>React</b></td>
                    <td>Manejo de <b>Formularios</b> en <b>React</b></td>
                    <td>Publicando nuestra <b>Pagina</b> con <b>GitHub Pages</b></td>
                </tr>
            </table>
            <p className="landing-subtitle">Recursos Adicionales</p>
            <p className="landing-text">
                Para profundizar en los temas cubiertos, sondulta con los siguientes recursos:
            </p>
            <p align="center">&copy; 2024 Modulo 7, USIP.</p>
        </div>
    );
}

export default LandingPage;