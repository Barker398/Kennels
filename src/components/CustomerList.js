import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customers.css"

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        console.log("CustomerList: useEffect - getCustomers")
        getCustomers()
    }, [])

    return (
        <section className="customer">
            {
                customers.map(customer => {
                    return (
                        <div className="customer" id={`customer--${customer.id}`}>
                            <div className="customer__name">
                                Name: { customer.name }
                            </div>
                            <div className="customer__address">
                                Location: { customer.address }
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}