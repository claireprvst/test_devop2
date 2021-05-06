import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const paragraphStyles = {
    marginBottom: 48,
}
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
}

// markup
const aboutPage = () => {
    return (
        <main style={pageStyles}>
            <title> bonjour</title>
            <h1 style={headingStyles}>Test</h1>
            <p style={paragraphStyles}>

                j'ai encore encore encore ENCORE et encore et encore changé le texte
                <br />
                <br />
                <Link to="/">Go home</Link>.
            </p>
        </main>
    )
}

export default aboutPage
