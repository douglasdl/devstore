import data from './data.json'

export async function GET() {
  return Response.json(data)
}

// BFF (Back-end for Front-end)
