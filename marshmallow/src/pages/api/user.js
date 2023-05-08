import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {email, name, profile_icon} = req.body
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                profile_icon
            },
        })
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

