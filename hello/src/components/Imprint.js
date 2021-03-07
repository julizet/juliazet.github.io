import React, { Component } from "react";
import logo from "../assets/favicon.ico";
import { Link } from "react-router-dom";

class Imprint extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <Link className="nav-link" to="/">
            <img src={logo} alt="This is my favicon." />
          </Link>
        </div>
        <div className="content">
          <h1>Imprint</h1>
          <h3>Responsible Person</h3>
          <p>
            Julia Zimmermann
            <br />
            Lenbachstraße 20
            <br />
            10245 Berlin
            <br />
            Tel.: +49 0174 414 65 32
            <br />
            juliazet(at)gmx.de
          </p>
          <h3>
            Person responsible for the contents pursuant to Section 5 Telemedia
            Act (TMG)
          </h3>
          <p>Julia Zimmermann</p>
          <h3>Disclaimer</h3>
          <p>
            We do not guarantee that the information provided on this website is
            complete, accurate or up-to-date. Although we take great care to
            check content, we do not assume any liability for the contents of
            external links. We do not have any influence on the current or
            future shaping of the linked websites. We expressly distance
            ourselves from all changes to the contents undertaken after the
            establishment of links to said websites. The providers of said
            websites are solely responsible for the contents of the linked
            websites. We reserve the right to change or supplement the
            information made available without prior notice. We endeavour to
            comply with all valid copyright laws in all publications. Should
            there nonetheless be an infringement of copyright law, we shall
            remove the corresponding item, after being informed, from the
            relevant publication or render it visible by reference to copyright
            law. All trademarks and brand names mentioned on websites that may
            be protected by third parties shall be covered in an unlimited
            manner by the respective valid labelling legislation and the
            ownership rights of the respective registered owners.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Imprint;
