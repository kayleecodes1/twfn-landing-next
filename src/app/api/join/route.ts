import { NextResponse } from 'next/server';
import * as yup from 'yup';
import * as DiscordService from '@services/DiscordService';

export const joinSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().min(18).max(100).required(),
    location: yup.string().required(),
    genderIdentity: yup.string().required(),
    leadSource: yup.string().required(),
    socialLink: yup.string().required(),
});

export async function POST(request: Request) {
    const data = await request.json();

    // Validate payload.
    try {
        await joinSchema.validate(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json(error, { status: 400 });
    }

    // Construct message.
    const { name, email, age, location, genderIdentity, leadSource, socialLink } = data;
    const message = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Age: ${age}`,
        `Location: ${location}`,
        `Gender Identity: ${genderIdentity}`,
        `Lead Source: ${leadSource}`,
        `Social Link: ${socialLink}`,
    ].join('\n');

    // Send message to Discord.
    try {
        await DiscordService.sendChannelMessage(process.env.DISCORD_JOIN_CHANNEL_ID, message);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error submitting join request' }, { status: 502 });
    }

    return new Response('', { status: 200 });
}
