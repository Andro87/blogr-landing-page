import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Link from "../components/Link";
import { useState } from "react";
export default function Home() {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.main_wrap}>
            <Head>
                <title>Frontend Mentor | [Blogr]</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.header_wrap}>
                <div className={styles.header}>
                    <div className={styles.wrap}>
                        <img src="/images/logo.svg" alt="logo" />

                        <div className={styles.action_wrap}>
                            <button
                                type="button"
                                name="button"
                                title="button"
                                className={styles.hamburger_button}
                                onClick={() => setOpen(!open)}
                            >
                                {!open ? (
                                    <svg
                                        width="32"
                                        height="18"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g fill="#FFF" fill-rule="evenodd">
                                            <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
                                        </g>
                                    </svg>
                                ) : (
                                    <svg
                                        width="26"
                                        height="26"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z"
                                            fill="#FFF"
                                            fill-rule="evenodd"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <div
                            className={`${styles.link_desktop} ${
                                open ? styles.link_mobile : null
                            }`}
                        >
                            <div className={styles.link_wrap}>
                                <Link link="Product">
                                    <a href="#"> Overview</a>

                                    <a href="#">Pricing</a>
                                    <a href="#">Marketplace</a>
                                    <a href="#">Features</a>
                                    <a href="#">Integrations</a>
                                </Link>

                                <Link link=" Company">
                                    <a href="#"> About</a>
                                    <a href="#">Team</a>
                                    <a href="#"> Blog</a>
                                    <a href="#"> Careers</a>
                                </Link>

                                <Link link="   Connect">
                                    <a href="#"> Contact</a>
                                    <a href="#"> Newsletter</a>
                                    <a href="#"> LinkedIn</a>
                                </Link>
                            </div>

                            <hr className={styles.horizontal_line}></hr>

                            <div className={styles.interaction}>
                                <p>Login</p>
                                <button
                                    type="button"
                                    name="button"
                                    className={styles.signup_button}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.header_intro}>
                        <Header type="primary" theme="light">
                            A modern publishing platform
                        </Header>
                        <Paragraph type="primary">
                            Grow your audience and build your online brand
                        </Paragraph>
                        <div className={styles.button_wrap}>
                            <Button title="Start for Free" type="white" />
                            <Button title="Learn More" type="red" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.container_wrap}>
                <Header type="secondary" theme="dark">
                    Designed for the future
                </Header>
                <div className={styles.container}>
                    <div className={styles.box_wrap}>
                        <div className={styles.box}>
                            <Header type="third" theme="dark">
                                Introducing an extensible editor
                            </Header>
                            <Paragraph type="secondary">
                                Blogr features an exceedingly intuitive
                                interface which lets you focus on one thing:
                                creating content. The editor supports management
                                of multiple blogs and allows easy manipulation
                                of embeds such as images, videos, and Markdown.
                                Extensibility with plugins and themes provide
                                easy ways to add functionality or change the
                                looks of a blog.
                            </Paragraph>
                        </div>
                        <div className={styles.box}>
                            <Header type="third" theme="dark">
                                Robust content management
                            </Header>
                            <Paragraph type="secondary">
                                Flexible content management enables users to
                                easily move through posts. Increase the
                                usability of your blog by adding customized
                                categories, sections, format, or flow. With this
                                functionality, you’re in full control.
                            </Paragraph>
                        </div>
                    </div>
                    <div className={styles.illustration_img}></div>
                </div>
            </div>

            <div className={styles.infrastructure_wrap}>
                <div className={styles.infrastructure}>
                    <div className={styles.phone}></div>
                    <div className={styles.phone_mobile}>
                        <img
                            src="/images/illustration-phones.svg"
                            alt="phone"
                        />
                    </div>
                    <div className={styles.infrastructure_info}>
                        <Header type="secondary" theme="light">
                            State of the Art Infrastructure
                        </Header>
                        <Paragraph type="primary">
                            With reliability and speed in mind, worldwide data
                            centers provide the backbone for ultra-fast
                            connectivity. This ensures your site will load
                            instantly, no matter where your readers are, keeping
                            your site competitive.
                        </Paragraph>
                    </div>
                </div>
            </div>

            <div className={styles.info_wrap}>
                <div className={styles.info}>
                    <div className={styles.computer}></div>

                    <div className={styles.details}>
                        <div className={styles.info_box}>
                            <Header type="third" theme="dark">
                                Free, open, simple
                            </Header>
                            <Paragraph type="secondary">
                                Blogr is a free and open source application
                                backed by a large community of helpful
                                developers. It supports features such as code
                                syntax highlighting, RSS feeds, social media
                                integration, third-party commenting tools, and
                                works seamlessly with Google Analytics. The
                                architecture is clean and is relatively easy to
                                learn.
                            </Paragraph>
                        </div>

                        <div className={styles.info_box}>
                            <Header type="third" theme="dark">
                                Powerful tooling
                            </Header>
                            <Paragraph type="secondary">
                                Batteries included. We built a simple and
                                straightforward CLI tool that makes
                                customization and deployment a breeze, but
                                capable of producing even the most complicated
                                sites.
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer_wrap}>
                <div className={styles.footer}>
                    <img src="/images/logo.svg" alt="logo" />

                    <div className={styles.footer_box}>
                        <p className={styles.footer_heading}>Product</p>
                        <a href="#"> Overview</a>

                        <a href="#">Pricing</a>
                        <a href="#">Marketplace</a>
                        <a href="#">Features</a>
                        <a href="#">Integrations</a>
                    </div>

                    <div className={styles.footer_box}>
                        <p className={styles.footer_heading}>Company</p>

                        <a href="#"> About</a>
                        <a href="#">Team</a>
                        <a href="#"> Blog</a>
                        <a href="#"> Careers</a>
                    </div>

                    <div className={styles.footer_box}>
                        <p className={styles.footer_heading}>Connect</p>
                        <a href="#"> Contact</a>
                        <a href="#"> Newsletter</a>
                        <a href="#"> LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
