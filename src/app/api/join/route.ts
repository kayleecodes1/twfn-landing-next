import { NextResponse } from 'next/server';
import joinSchema from '@schemas/joinSchema';
import * as DiscordService from '@services/DiscordService';

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
