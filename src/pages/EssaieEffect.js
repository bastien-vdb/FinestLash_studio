import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function EssaieEffect(props) {

    useEffect(() => {


        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.defaults({
            toggleActions: "restart pause resume pause",
            scroller: ".container"
        });

        gsap.to(".orange p", {
            scrollTrigger: ".orange",
            duration: 2,
            rotation: 360
        });

        gsap.to(".red", {
            scrollTrigger: {
                trigger: ".red",
                toggleActions: "restart pause reverse pause"
            },
            duration: 1,
            backgroundColor: "#FFA500",
            ease: "none"
        });

        gsap.to(".yoyo p", {
            scrollTrigger: ".yoyo",
            scale: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2"
        });

    }, [])


    return (
        <>
            <div class="container">
                <section class="panel blue">
                    <h1>Pair with CSS Scroll Snapping</h1>
                </section>

                <section class="panel orange">
                    <p>This element will spin.</p>
                </section>

                <section class="panel red">
                    <p>This background color will change</p>
                </section>

                <section class="panel blue yoyo">
                    <p>Yoyo Text!</p>
                </section>
            </div>

            <header>
                <a href="https://greensock.com/scrolltrigger">
                    <img class="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
                </a>
            </header>
        </>
    );
}

export default EssaieEffect;