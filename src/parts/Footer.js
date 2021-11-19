import Button from 'elements/Button'
import React from 'react'

import Fade from 'react-reveal'
import IconText from './IconText'

export default function Footer() {

    return (
        <Fade>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <IconText />
                        <a className="brand-tagline">
                            We kaboom your beauty holiday instantly and memorable.
                        </a>
                    </div>
                    <div className="col-3">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register" >
                                    New Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties" >
                                    Start Booking a Room
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments" >
                                    Use Payments
                                </Button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-3">
                    <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/careers" >
                                    Our careers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy" >
                                    Privacy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms" >
                                    Terms & Conditions
                                </Button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-3">
                    <h6 className="mt-2">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:dulhafi19@gmail.com" >
                                    Support
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="tel:+62895332121828" >
                                    0895-3321-21828
                                </Button>
                            </li>
                            <li className="list-group-item">
                               <span>Staycation, Cicurug - Sukabumi</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col text-center copyrights">
                        Copyright 2021 * All rights reserved * Staycation
                    </div>
                </div>
            </div> 
        </footer>
        </Fade>
    )
}
