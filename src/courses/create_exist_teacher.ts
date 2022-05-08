import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de Migrações Fusion",
            description: "Curso Excelente ",
            duration: 300,
            teacher: {
                connect: {
                    id: "9655d638-4b62-4f81-804d-88a78ca485d4"
                }
            }
        }
    })

    console.log(result)

}

main();