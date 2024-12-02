import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from 'classnames';
import { Metadata } from "next";

import { style } from "@/once-ui/resources/config"

import { Background, Flex } from '@/once-ui/components'

import { Inter } from 'next/font/google'
import { Roboto_Mono } from 'next/font/google';

const primary = Inter({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap',
})

const code = Roboto_Mono({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

type FontConfig = {
    variable: string;
};


const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;


export const metadata: Metadata = {
	generator: 'Next.js',
	title: 'BetBlocker - Bloqueie sites de apostas',
	description: 'uma solução descentralizada e focada em bloquear e impedir o acesso a sites de apostas e bets',
	applicationName: 'BetBlocker',
	referrer: 'origin-when-cross-origin',
	keywords: ['bet', 'bloqueador', 'apostas', 'bet', 'apostar', 'block', 'gambling', 'blocker'],
	authors: [{ name: 'Eduardo Rigo', url: 'https://eduardev.com' }],
	creator: 'Eduardo Rigo',
	publisher: 'Eduardo Rigo',
	formatDetection: {
	  email: false,
	  address: false,
	  telephone: false,
	},
	openGraph: {
	  title: 'BetBlocker - Bloqueie sites de apostas',
	  description: 'uma solução descentralizada e focada em bloquear e impedir o acesso a sites de apostas e bets',
	  url: 'https://betblocker.com',
	  siteName: 'BetBlocker - Bloqueie sites de apostas',
	  images: [
		{
		  url: 'https://betblocker.com/images/bg.png',
		  width: 800,
		  height: 600,
		},
		{
		  url: 'https://betblocker.com/images/bg-g.png',
		  width: 1800,
		  height: 1600,
		},
	  ],
	  type: 'website',
	},
	icons: {
	  icon: '/favicon.ico',
	  shortcut: '/favicon.ico',
	},
  }

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<Flex
			as="html" lang="en"
			fillHeight background="page"
			data-neutral={style.neutral} data-brand={style.brand} data-accent={style.accent}
			data-border={style.border} data-theme={style.theme}
			data-solid={style.solid} data-solid-style={style.solidStyle}
			data-surface={style.surface} data-transition={style.transition}
			data-scaling={style.scaling}
			className={classNames(
				primary.variable, code.variable,
				secondary ? secondary.variable : '',
				tertiary ? tertiary.variable : ''
			)}>
			<Flex
				as="body"
				fillWidth fillHeight margin="0" padding="0">
				<Background
					style={{zIndex: '-1'}}
					position="fixed"
					mask="cursor"
					dots={{
						display: true,
						opacity: 0.4,
						size: '20'
					}}
					gradient={{
						display: true,
						opacity: 0.4,
					}}/>
				<Flex
					flex={1} direction="column">
					{children}
				</Flex>
			</Flex>
		</Flex>
	);
}