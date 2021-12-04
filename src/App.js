
import {Formik, Form, Field} from 'formik'
import './header.css'

const App = () => {
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
                        // llamar animationPlayState: 
                        console.log(data)
                    }}
                    >

                        <Form>
                            <Field name="search" />
                        </Form>

                </Formik>
            </header>
        </div>
    )
}


export default App;