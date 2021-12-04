import { useState } from 'react'
import {Formik, Form, Field} from 'formik'
import './header.css'

const App = () => {

    const [fotos, setFotos] = useState([])

    const open = (url) => window.open(url)
    console.log('Fotos ', fotos);
    return (
        <div>
            <header>
                <Formik
                    initialValues={{search: ''}}
                    onSubmit={async values => {

                        const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
                            headers: {
                                'Authorization': 'Client-ID E1IjNbl36sCpnzc4zlXb1TO29MDpk-xw4Zt-rdnWBuU'
                            }
                        })

                        const data = await response.json()

                        setFotos(data.results)
                        // llamar animationPlayState: 
                        // console.log(data)
                    }}
                    >

                        <Form>
                            <Field name="search" />
                        </Form>

                </Formik>
            </header>
            <div className="container">
                <div className="center">
                    {fotos.map(
                        foto => 
                        <article key={foto.id} onClick={() => open(foto.links.html)}>
                            <img src={foto.urls.regular} />
                            <p>{[foto.description, foto.alt_description].join(' - ')}</p>
                        </article>
                    )}
                </div>
            </div>
        </div>
    )
}


export default App;