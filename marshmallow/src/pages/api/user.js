import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {email, name, profile_icon} = req.body

        const payload = {
            email,
            name,
            profile_icon
        };

        const newUser = await prisma.user.upsert({
            where: { email: payload.email },
            create: payload,
            update: {},
        });

        res.status(201).json(newUser);
    } else if (req.method === 'GET') {
       const user = await prisma.user.findUnique({
            where: {
                email: req.query.email
            }
       }) 
       res.status(200).json(user);
    }  else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
