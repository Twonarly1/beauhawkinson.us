"use client"
import Link from "next/link"

import { Section, Stack, Text } from "~/core"

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link className="p-1 text-sm font-medium" href={href}>
            {children}
        </Link>
    )
}

export function Footer() {
    return (
        <footer className="mx-auto mt-32 max-w-5xl border-t border-zinc-200 py-12 dark:border-zinc-700/60">
            <Section>
                <Stack
                    gap={8}
                    alignItems="center"
                    justifyContent="between"
                    direction={{ base: "vertical", sm: "horizontal" }}
                >
                    <Stack gap={8} direction="horizontal">
                        <NavLink href="/projects">projects</NavLink>

                        <NavLink href="/resume">resume</NavLink>
                    </Stack>

                    <Stack alignItems="center" direction="horizontal" gap={1}>
                        <Text size="xs" color={1000}>
                            &copy; {new Date().getFullYear()} Beau Hawkinson ·
                        </Text>

                        <a
                            className="p-1 text-xs text-pink-400 dark:text-pink-200"
                            href="https://github.com/Twonarly1"
                        >
                            Source
                        </a>
                    </Stack>
                </Stack>
            </Section>
        </footer>
    )
}
