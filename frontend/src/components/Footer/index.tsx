import './styles.css';

const Footer = () => {
    return (    
            <footer className="footer mt-auto py-3">
                <div className="container">
                    <p className="text-light">App desenvolvido por <a href="https://github.com/bianksilva" target="_blank" rel="noreferrer">Bianca Silva</a></p>
                    <p className="text-light"><small><strong>Semana Spring React 6.0</strong><br />
                        Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
                </div>
            </footer>
    );
}

export default Footer;