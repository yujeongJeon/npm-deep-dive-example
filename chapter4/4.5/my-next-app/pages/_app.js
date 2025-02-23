import React from 'react';
import App from 'next/app';

export default class Root extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: {
				// Call page-level getInitialProps
				...(Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {})
			}
		}
	}

	render() {
		const { Component, pageProps } = this.props

		return (
                <Component {...pageProps} />
		)
	}
}
