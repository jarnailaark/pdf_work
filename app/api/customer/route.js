export async function GET(request, response) {
    const users = [
        { id:1 , name:"jarnail Singh" },
        { id:2 , name:"jony" },
        { id:3 , name:"amit" },
        { id:4 , name:"mayank" },
        { id:5 , name:"sagar" },

    ]

    return new Response(JSON.stringify(users))
}