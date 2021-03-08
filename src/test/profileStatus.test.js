import React from 'react'
import ReactDOM from 'react-dom'
import ProfileStatus from "../components/Profile/ProfileInfo/ProfileStatus/ProfileStatus";

test('renders learn react link', () => {
    const div = document.createElement("div")
    ReactDOM.render(<ProfileStatus/>, div)
    ReactDOM.unmountComponentAtNode(div)
});