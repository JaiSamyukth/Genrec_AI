import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()

        // Validate body
        if (!body.email || !body.message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Simulate sending email (would use Nodemailer here in production)
        console.log('Received contact form submission:', body)

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        return NextResponse.json({ success: true, message: 'Message sent successfully' })
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
