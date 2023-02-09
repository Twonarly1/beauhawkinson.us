import { Fieldset, Form, Input, InputGroup, Label, Textarea } from "~/core"

type Props = {
    onSubmitted: ({ success }: { success: boolean }) => void
}

export function ContactForm({ onSubmitted }: Props) {
    return (
        <Form action="/api/contact" onSubmitted={onSubmitted}>
            <Fieldset>
                <InputGroup>
                    <Label htmlFor="email">Email *</Label>

                    <Input
                        autoFocus
                        name="Email"
                        id="email"
                        placeholder="Email"
                        required
                        type="email"
                    />
                </InputGroup>

                <InputGroup>
                    <Label htmlFor="phone">Phone number</Label>

                    <Input
                        name="PhoneNumber"
                        id="phone-number"
                        placeholder="Phone number"
                        type="text"
                    />
                </InputGroup>

                <InputGroup>
                    <Label htmlFor="message">Your inquiry *</Label>

                    <Textarea
                        maxLength={496}
                        minLength={3}
                        id="message"
                        name="Message"
                        placeholder="Inquiry"
                        required
                    />
                </InputGroup>

                <Form.Button>Submit</Form.Button>
            </Fieldset>
        </Form>
    )
}
