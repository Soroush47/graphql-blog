import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import App from "./App.jsx";
import theme from "./mui/theme.js";
import "./styles/index.css";
import "./styles/fonts.css";

const client = new ApolloClient({
    uri: import.meta.env.VITE_GRAPHCMS_URI,
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </ApolloProvider>
    </React.StrictMode>
);
