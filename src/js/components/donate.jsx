import React from 'react'

import $ from 'jquery'

class Donate extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = '';
    }

    componentDidMount() {
        $("nav li.active").removeClass("active");
        $("a[href='#/donate']").parent().addClass("active");

        // Creating PayPal button

        var PayPalButton = document.createElement("script")
        PayPalButton.src = "./dist/js/paypal-button.min.js?merchant=stretchs.surf@gmail.com"
        PayPalButton.async = 1
        PayPalButton.setAttribute("data-button", "donate")
        PayPalButton.setAttribute("data-name", "Server Donation")
        document.getElementById("paypal").appendChild(PayPalButton)
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
                    <p>(Whatever method you choose, please leave a note with your steam profile link so that the perks go to the right person!)</p>
                    <br />
                </div>

                <div className="col-sm-4">
                    <h1> PayPal </h1><br />
                    <div id="paypal"></div>
                </div>
                <div className="col-sm-4">
                    <h1> Bitcoin </h1>
                    <img id="qrcode" src="./dist/img/bitcoin.png" />
                    <p>17nFQmbi4uGvqvGuh3dvBB6E7xDq7ft6UR</p>
                </div>
                <div className="col-sm-4">
                    <h1> Skins </h1><br />
                    <a
                        href="https://steamcommunity.com/tradeoffer/new/?partner=6049336&token=h-r5d7xU"
                        target="_blank"
                    ><img id="steamtrade" src="./dist/img/steam.png" /></a>
                    <p>(Keys and Skins worth more than $5 only, no Steam Guard delayed trades.)</p>
                </div>
            </div>
        );
    }
}

export default Donate
