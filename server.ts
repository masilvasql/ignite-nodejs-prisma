import {  PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data:{
            duration:50,
            name:"Curso de dart",
            description:"Curso da Cod3r Cursos"
        }
    })

    console.log(result);
}

main();