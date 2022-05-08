import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createBook(){
    const result = await prisma.books.create({
        data:{
            name:"Sétimo",
            author_id:"995ca352-dafe-40b3-913b-263b9c7a8ce3"
        }
    })
    console.log(result);
}

createBook(); 