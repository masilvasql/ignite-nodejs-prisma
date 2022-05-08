import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createManyToMany(){
    const result = await prisma.coursesModules.create({
        data:{
            course:{
                create:{
                    duration:200,
                    name:"Curso de Node TS",
                    description:"Curso topzera",
                    fk_id_teacher:"2c473176-247f-42e8-a430-a53e497a24e4"
                }
            },
            module:{
                create:{
                    description:"Curso completo de prisma IO",
                    name:"Prisma IO"
                }
            }
        }
    })
    console.log(result)
}

createManyToMany();