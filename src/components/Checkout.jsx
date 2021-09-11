import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import Swal from 'sweetalert2'
import { CartContext } from '../Contexts/CartContext'
import { generateOrder} from "../firebase/generateOrder";
import { SectionTitle, SectionBody} from "./Section";


export const Checkout = () => {

    const {cart, clearCart} = useContext(CartContext)

    const [values, setValues] = useState({
        name: '',
        email: '',
        tel: 0,
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.name.length > 3 && values.email.length > 3 && values.tel.length > 5) {
            generateOrder(values, cart, cart.reduce((acc,item) => acc + item.price * item.quantity,0))
                .then( res => {

                    console.log(res)
                    Swal.fire({
                        icon: 'success',
                        title: 'Your purchase has been registered!',
                        text: `Save this identifier ${res.id}`,
                        confirmButtonText: 'Awesome!'
                    })

                    clearCart()
                })
                .catch( err => {
                    console.log(err)
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid fields',
                text: 'Please check your information'
            })
        }


    }



    return (
        <div>
            <SectionTitle>
                <h2>Checkout</h2>
                <hr/>
            </SectionTitle>
            <SectionBody>
                {!cart.length
                    ? <Redirect to="/"/>
                    :

                    <div>
                        <form onSubmit={handleSubmit} className="checkout__form">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                value={values.name}
                                onChange={handleInputChange}
                                name="name"
                                id="name"
                                required
                            />
                            <label htmlFor="tel">Telephone</label>
                            <input
                                type="tel"
                                value={values.tel}
                                onChange={handleInputChange}
                                name="tel"
                                id="tel"
                                required
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                value={values.email}
                                onChange={handleInputChange}
                                name="email"
                                id="email"
                                required
                            />
                            <label htmlFor="confirmEmail">Confirm Email</label>
                            <input type="email" id="confirmEmail"/>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                }
            </SectionBody>
        </div>
    )
}

export default Checkout