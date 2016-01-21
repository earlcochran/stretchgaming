import React from 'react'

import $ from 'jquery'

class Donate extends React.Component {

    componentDidMount() {
        $("nav li.active").removeClass("active");
        $("a[href='#/donate']").parent().addClass("active");
    }

    render() {
        return (
            <div>
                <h1>Donate</h1>
                <p className="lead">Donations help keep the servers alive! <br />Depending on how much you choose to donate, the following perks will become available to you:</p>
                    <h4>
                        $5: Full access to the store, and any special commands.
                    </h4>
                    <h4>
                        $10: The above perks <i>plus</i> a reserved slot, and the VIP clantag.
                    </h4>


            </div>
        );
    }
}

export default Donate
