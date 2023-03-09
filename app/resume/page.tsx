import { Button, Heading, Stack, Text } from "core"
import { config } from "lib/config"
import { Achievements, Company } from "./components"

export const metadata = {
    title: "Resume",
    description: "My portfolio resume with past positions, achievements, and more about myself!",
}

export default function ResumePage() {
    return (
        <Stack gap={8}>
            <Heading as="h2">{config.name}</Heading>

            <Text size="sm">
                To me, the most important goal in life is to learn new things - whether that be
                professionally in my career, or in my personal life while meeting new people,
                discovering new places and trying new things.
            </Text>

            <Text size="lg">👨‍💻 Experience</Text>

            <Company
                alt="Twonarly1"
                src="/two.png"
                website="https://beauhawkinson.us"
                location="Remote"
                startDate="2021/02/01"
                title="Freelance Full-stack Engineer"
            />

            <Company
                website="https://www.chisagohardware.com/"
                alt="Chisago-Hardware"
                src="/resume/ch.png"
                endDate="2023/01/23"
                location="Remote"
                startDate="2022/11/01"
                title="Freelance Full Stack Engineer"
            />

            <Company
                alt="Muse Dao"
                src="/resume/muse.webp"
                website="https://musedao.io/"
                location="Remote"
                startDate="2022/03/01"
                endDate="2022/04/01"
                title="Official Contributor"
            />

            <Company
                website="https://www.bend-tech.com/"
                alt="Bend-Tech"
                src="/resume/bt.png"
                endDate="2022/01/23"
                location="Wisconsin, US"
                startDate="2021/01/23"
                title="Engineering Technician"
            />

            <Company
                website="https://www.bend-tech.com/"
                alt="Bend-Tech"
                src="/resume/bt.png"
                endDate="2021/01/23"
                location="Wisconsin, US"
                startDate="2020/01/23"
                title="Service Manager"
            />

            <Company
                website="https://www.bend-tech.com/"
                alt="Bend-Tech"
                src="/resume/bt.png"
                endDate="2020/01/23"
                location="Wisconsin, US"
                startDate="2018/09/16"
                title="Service Technician"
            />

            <Text size="lg">📚 Education</Text>

            <ul className="flex w-full list-disc flex-col rounded-lg border border-neutral-100 bg-neutral-100 p-5 pl-10 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                <li>Marketing</li>

                <li>Bachelors of Science (BSc)</li>

                <li>Minnesota State University, Mankato · 2013 - 2017</li>
                <li>Average grade: 3.7</li>
            </ul>

            <Text size="lg">🧔‍♂️ Random facts</Text>

            <ul className="flex w-full list-disc flex-col rounded-lg border border-neutral-100 bg-neutral-100 p-5 pl-10 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                <li>
                    <Button
                        variant="link"
                        as="a"
                        href="https://www.16personalities.com/infj-personality"
                    >
                        INFJ-T Personality
                    </Button>
                </li>

                <li>
                    I enjoy reading Non-Fiction books about Health, Longevity, and theoretical
                    physics.
                </li>
                <li>Fan of movies and tv shows.</li>
            </ul>

            <Achievements />
        </Stack>
    )
}
