import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createAuthor(){
    const result = await prisma.authors.create({
        data:{
            name:"André Vianco"
        }
    })
    console.log(result);
}

// createAuthor();


async function createAuthorAndBook(){
    const result = await prisma.authors.create({
        data:{
            name:"Robert C. Martin",
            books:{
                create:{
                    name:"Código Limpo"
                }
            }
        }
    })
    console.log(result);
}

// createAuthorAndBook();

async function createAuthorAndManyBooks(){
    const result = await prisma.authors.create({
        data:{
            name:"Mayk Brito",
            books:{
                createMany:{
                   data:[
                       {
                           name:"Como começar na programação"
                       },
                       {
                           name:"Como Ser Muito Produtivo"
                       }
                   ] 
                }
            }
        }
    })
    console.log(result);
}

createAuthorAndManyBooks();