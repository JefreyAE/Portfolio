import React from "react";
import { Link, Element } from "react-scroll"
import { single, openClose, liskov, interfaceSegregation } from '../../data/solid';
import Principle from "./components/Principle";
export default function Theory() {
    return (
        <div className='page'>
            <h1 className='heading'>Index</h1>
            <ul>
                <li className="index-link"><Link to="Solid" activeClass="active" smooth={true} duration={500} >Solid Principles</Link></li>
                <li className="index-link"><Link to="BigO" smooth={true} duration={500} >Big O Notation</Link></li>
            </ul>
            <section className="topic-container">
                <Element name="Solid">
                    <h2>Solid principles</h2>
                    <p>The SOLID principles are a set of design rules that can help you create more maintainable and scalable software. These principles were introduced by Robert C. Martin and are fundamental to object-oriented programming. Here I present each of the SOLID principles along with theory and code examples in React using CodeMirror.</p>
                    <Principle principle={single} />
                    <Principle principle={openClose} />
                    <Principle principle={liskov} />
                    <Principle principle={interfaceSegregation} />
                </Element>
            </section>
        </div>
    )
}