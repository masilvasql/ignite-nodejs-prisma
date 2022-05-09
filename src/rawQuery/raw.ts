import { PrismaClient, Prisma, Courses} from "@prisma/client";

const prisma = new PrismaClient();


//Mesmo com RawQuery é possível tipar o retorno
async function main(){

    const result = await prisma.$queryRaw<Courses[]>(
        Prisma.sql`select * from courses`
    )

    result.map(item => console.log(item.name))


}

main();