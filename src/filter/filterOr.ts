import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){

    const result = await prisma.courses.findMany({
        where:{
            OR:[
                {
                    name:{
                        contains:"Elixir"
                    },
                },
                {
                    name:{
                        contains:"SQL"
                    }
                }
            ],
            AND:{
                duration:{
                    equals:150
                }
            }
        }
    })
    console.log(result)
}

main();