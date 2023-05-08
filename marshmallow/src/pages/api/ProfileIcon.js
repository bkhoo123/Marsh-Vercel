import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'PUT') {
        const {profile_icon} = req.body
        const updateProfileIcon = await prisma.user.update({
            where: {
                email: req.query.email
            },
            data: {profile_icon: profile_icon}
        }) 
        res.status(200).json(updateProfileIcon);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}