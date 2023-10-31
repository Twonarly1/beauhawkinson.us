"use client"

import { Button, Modal, Text } from "components/core"
import { SkillsSection } from "./skills-section"

export function SkillsDialog() {
    return (
        <>
            <Text size="sm" color={1000}>
                My strongest technologies and preferred stack include
                <b> · React, Next.js, Typescript, Tailwind CSS, GraphQL, and Supabase. </b>
                If you want to view all my learned skills, see below &darr;, or .
            </Text>
            <Modal trigger={<Button variant="header">Skills</Button>} title="Skills">
                <SkillsSection />
            </Modal>
        </>
    )
}
