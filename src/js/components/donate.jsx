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
                <p className="lead">Donations help keep the servers alive! <br />Depending on how much you choose to donate, the following perks will become available to you:
                </p>
                <h4>
                    $5: Full access to the store, and any special commands.
                </h4>
                <h4>
                    $10: The above perks <i>plus</i> a reserved slot, and the VIP clantag.
                </h4>

                <div>
                    <br />
                    <h3>
                        We currently accept the following forms of donation:
                    </h3>
                    <br />
                </div>

                <div className="col-sm-4">
                    <h1> PayPal </h1>
                </div>
                <div className="col-sm-4">
                    <h1> Bitcoin </h1>
                    17nFQmbi4uGvqvGuh3dvBB6E7xDq7ft6UR
                </div>
                <div className="col-sm-4">
                    <h1> Skins </h1>
                </div>
            </div>
        );
    }
}

export default Donate
