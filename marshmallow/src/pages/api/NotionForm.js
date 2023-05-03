import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const {firstName, lastName, email} = req.body
        const databaseId = 'e0d086e1956640ae96a3ea4efc59f8d1';
        
        const newItem = {
            'First Name': {
                title: [
                    {
                        text: {
                            content: firstName,
                        },
                    },
                ],
            },
            'Last Name': {
                rich_text: [
                    {
                        text: {
                            content: lastName
                        },
                    },
                ],
            },
            'Email': {
                email: email,
            },
        }

        try {
            const response = await notion.pages.create({
              parent: {
                database_id: databaseId,
              },
              properties: newItem,
            });
      
            res.status(200).json({ success: true });
          } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ success: false });
          }
        } else {
          res.status(405).json({ message: 'Method not allowed' });
        }
    }

export default handler