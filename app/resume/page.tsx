import Link from "next/link"

import { Grid, Heading, Section, Stack } from "~/core"
import { Company } from "~/resume"

export default function ResumePage() {
    return (
        <div className="mt-32 mb-16">
            <Section>
                <Stack gap={16}>
                    <Stack gap={4}>
                        <Heading as="h2">Beau Hawkinson</Heading>

                        <Heading as="h3">
                            To me, the most important goal in life is to learn new things - whether
                            that be professionally in my career, or in my personal life while
                            meeting new people, discovering new places and trying new things.
                        </Heading>
                    </Stack>

                    <Stack gap={8}>
                        <Heading as="h3">👨‍💻 Experience</Heading>

                        <Grid columns={{ base: 1, sm: 2 }} rows={{ base: 1, sm: "auto" }} gap={16}>
                            <Company
                                alt="Twonarly1"
                                src="/two.png"
                                website="https://beauhawkinson.us"
                            >
                                <Company.Position
                                    location="Remote"
                                    startDate="2021/02/01"
                                    title="Full-stack Engineer"
                                />
                            </Company>

                            <Company
                                website="https://www.chisagohardware.com/"
                                alt="Chisago-Hardware"
                                src="/resume/ch.png"
                            >
                                <Company.Position
                                    endDate="2023/01/23"
                                    location="Remote"
                                    startDate="2022/11/01"
                                    title="Freelance Full Stack Engineer"
                                />
                            </Company>

                            <Company
                                alt="Muse Dao"
                                src="/resume/muse.webp"
                                website="https://musedao.io/"
                            >
                                <Company.Position
                                    location="Remote"
                                    startDate="2022/03/01"
                                    title="Official Contributor"
                                />
                            </Company>

                            <Company
                                website="https://www.bend-tech.com/"
                                alt="Bend-Tech"
                                src="/experience/bt.png"
                            >
                                <Company.Position
                                    endDate="2022/01/23"
                                    location="Wisconsin, US"
                                    startDate="2021/01/23"
                                    title="Engineering Technician"
                                />
                            </Company>

                            <Company
                                website="https://www.bend-tech.com/"
                                alt="Bend-Tech"
                                src="/experience/bt.png"
                            >
                                <Company.Position
                                    endDate="2021/01/23"
                                    location="Wisconsin, US"
                                    startDate="2020/01/23"
                                    title="Marketing Manager"
                                />
                            </Company>

                            <Company
                                website="https://www.bend-tech.com/"
                                alt="Bend-Tech"
                                src="/experience/bt.png"
                            >
                                <Company.Position
                                    endDate="2020/01/23"
                                    location="Wisconsin, US"
                                    startDate="2018/09/16"
                                    title="Service Technician"
                                />
                            </Company>
                        </Grid>
                    </Stack>

                    <Grid columns={2} gap={16}>
                        <Stack gap={8}>
                            <Heading as="h3">📚 Education</Heading>

                            <Stack gap={8}>
                                <div>
                                    <Heading as="h3">Marketing</Heading>

                                    <p>Bachelor of Science (BSc)</p>

                                    <p>
                                        Minnesota State University, Mankato · 2013 - 2017 · Average
                                        grade: 3.7
                                    </p>
                                </div>
                            </Stack>
                        </Stack>

                        <Stack gap={16}>
                            <Stack gap={8}>
                                <Heading as="h3">📜 Certifications</Heading>

                                <div>
                                    <Heading as="h3">GraphQL Professional</Heading>

                                    <p>Apollo · June 2022</p>
                                </div>

                                <div>
                                    <Heading as="h3">Web 3 Patrick Collins</Heading>

                                    <p>Full Stack, Hardhat, Solidity, Blockchain</p>

                                    <p>July 30 - Sep 27</p>
                                </div>
                            </Stack>

                            <Stack gap={8}>
                                <Heading as="h3">🧔‍♂️ Random facts</Heading>

                                <ul className="ml-6 list-disc">
                                    <li>
                                        <Link href="https://www.16personalities.com/infj-personality">
                                            INFJ-T Personality
                                        </Link>
                                    </li>

                                    <li>Eagle Scout of America, 2010</li>

                                    <li>
                                        2018 MN Wind Chill Athlete. Professional Ultimate Frisbee.
                                    </li>

                                    <li>
                                        I enjoy reading Non-Fiction books about Health, Longevity,
                                        and theoretical physics.
                                    </li>
                                </ul>
                            </Stack>
                        </Stack>
                    </Grid>
                </Stack>
            </Section>
        </div>
    )
}
