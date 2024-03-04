import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import {useLocation} from "react-router-dom";
//import {useTranslation} from "react-i18next";
import i18next from "i18next";
import {useEffect} from "react";
import cookies from "js-cookie";
import "./multiLang.css"

const languages = [
    {
        code: "tr",
        name: "Türkçe",
        country_code: "tr",
        dir: "ltr",
    },
    {
        code: "en",
        name: "English",
        country_code: "gb",
        dir: "ltr",
    },
    {
        code: "ar",
        name: "العربية",
        country_code: "sa",
        dir: "rtl",
    },
];

function MultiLang() {
    const currentLanguageCode = cookies.get("i18next") || "en";
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
    //let location = useLocation();
    //const {t} = useTranslation()

    const refreshPage = () => {
        window.location.reload(false);
    };

    useEffect(() => {
        document.body.dir = currentLanguage.dir || "ltr";
    }, [currentLanguage]);

    return (
        <Container fluid className="my-1">
            <Row>
                <Col
                    xs={4}
                    md={2}
                    xl={1}
                    className="text-center d-flex align-items-center align-self-center"
                >
                </Col>

                <Col
                    xs={8}
                    md={10}
                    xl={11}
                    className="d-flex flex-wrap justify-content-end align-self-center"
                >
                    <Dropdown>
                        <div className="multi-lang">
                            {languages.map(({code, name, country_code}) => (
                                <div className="lang-items"
                                     key={country_code}
                                     onClick={() => {
                                         i18next.changeLanguage(code);
                                         refreshPage();
                                     }}
                                     disabled={code === currentLanguageCode}
                                >
                                    {name}
                                </div>
                            ))}
                        </div>
                    </Dropdown>
                </Col>
            </Row>
        </Container>
    );
}

export default MultiLang;