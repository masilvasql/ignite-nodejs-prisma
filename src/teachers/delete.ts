import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteRegister(){
    const result = await prisma.teachers.delete({
        where:{
            id:"63c06d79-864a-4ab7-801a-19a4c552017e"
        }
    })
    console.log(result);
}

deleteRegister();