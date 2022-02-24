
import React, { useState } from 'react'
import { connect } from 'react-redux'

import { UserMsg } from './user-msg.jsx'

function _AppFooter({ count }) {
    return (
        <footer className="app-footer">
            <p>
                coffeerights 2021 - count: {count}
            </p>
        </footer>
    )
}


function mapStateToProps(state) {
    return {
        count: state.userModule.count,
    }
}

const mapDispatchToProps = {
}

export const AppFooter = connect(mapStateToProps, mapDispatchToProps)(_AppFooter)