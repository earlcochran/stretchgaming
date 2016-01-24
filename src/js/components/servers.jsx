import React from 'react'

import $ from 'jquery'

class Servers extends React.Component {

    componentDidMount() {
        $("nav li.active").removeClass("active");
        $("a[href='/servers']").parent().addClass("active");
    }

    render() {
        return (
            <h1>Servers!</h1>
        );
    }
}

export default Servers
