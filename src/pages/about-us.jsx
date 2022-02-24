import React, { useState } from 'react'


export class AboutUs extends React.Component {
    state = {
        count: 1000,
    }
    render() {
        const { count } = this.state
        return (
            <section>
                <h2>About Us</h2>
            </section>
        )
    }
}