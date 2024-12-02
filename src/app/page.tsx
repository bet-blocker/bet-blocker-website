"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, LetterFx } from '@/once-ui/components';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	const links = [
		{
			href: "https://github.com/bet-blocker/bet-blocker",
			title: "Software",
			description: "Software focado em bloquear e impedir o acesso a sites de apostas.",
		},
		{
			href: "https://github.com/bet-blocker/bet-blocker-api",
			title: "API",
			description: "API que fornece uma lista detalhada de hosts de apostas.",
		},
		{
			href: "https://github.com/bet-blocker/bet-blocker-dns",
			title: "Servidor DNS",
			description: "Um bloqueador e impedir o acesso a sites de bets e cassinos via DNS usando docker.",
		},
		{
			href: "https://github.com/bet-blocker/bet-blocker-extension",
			title: "Extensão",
			description: "Extensão para navegadores que busca os domínios da BetBlocker API e restringe o seu acesso.",
		},
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={88}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl" justifyContent='center'>
							<Image alt='bet-blocker logo' width={300} height={300} src="/images/betblocker.svg" />
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24"
							direction="column"
							justifyContent='center'>
							<InlineCode
								className="shadow-m"
								style={{
									width: 'fit-content',
									padding: 'var(--static-space-8) var(--static-space-16)',
									backdropFilter: 'blur(var(--static-space-1))'
								}}>
								Acesse o repositório <Link href="https://github.com/bet-blocker"><span className="brand-on-background-medium">bet-blocker</span></Link>
							</InlineCode>
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<LetterFx
										trigger="instant">
										uma solução descentralizada e focada em bloquear e impedir o acesso a sites de apostas e bets
									</LetterFx>
								</span>
							</Heading>
						</Flex>
					</Flex>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(4, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{links.map((link) => (
							<Link
								target="_blank"
								style={{ padding: 'var(--responsive-space-l)' }}
								key={link.href}
								href={link.href}>
								<Flex
									fillWidth paddingY="8" gap="8"
									direction="column">
									<Flex
										fillWidth gap="12"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="arrowUpRight" />
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						))}
					</Grid>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Bet Blocker, <Link href="https://eduardev.com">EDUARDEV</Link>
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/bet-blocker"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://discord.com/#"
						prefixIcon="discord" size="s" variant="tertiary">
						Discord
					</Button>
				</Flex>
			</Flex>
		</Flex >
	);
}
