import type { NextRequest } from 'next/server'
import { z } from 'zod'
import data from '../data.json'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  await new Promise(resolve => setTimeout(resolve, 3000))

  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))
  const product = data.products.filter(product =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )

  if (!product) {
    return Response.json(
      { message: 'Product not found.' },
      {
        status: 400,
      }
    )
  }

  return Response.json(product)
}
