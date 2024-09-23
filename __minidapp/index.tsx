"use client";
import "./minidapp.css";
import React from "react"
import {MemoryRouter, Route, Routes} from "react-router-dom";
import { default as Home } from "@/__minidapp/Home";
import { default as PageLayout } from "@/__minidapp/Page/layout";
import Page from "@/__minidapp/Page";

class ErrorBoundary extends React.Component<React.PropsWithChildren, { hasError: boolean }> {
    constructor(props: React.PropsWithChildren) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <a href="/public">Click here to go home</a>
                </div>
            );
        }

        return this.props.children;
    }
}

export default function MiniDappIndex() {
    return (
        <ErrorBoundary>
            <MemoryRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Home/>}
                    />
                    <Route
                        path="/*"
                        element={
                            <PageLayout>
                                <Page />
                            </PageLayout>
                        }
                    />
                </Routes>
            </MemoryRouter>
        </ErrorBoundary>
    );
}
