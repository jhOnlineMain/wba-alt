import React from "react"
import {graphql, useStaticQuery, Link} from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"


// const products = [
//     {
//       id: 1,
//       name: 'Machined Pen',
//       color: 'Black',
//       price: '$35',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
//       imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
//       availableColors: [
//         { name: 'Black', colorBg: '#111827' },
//         { name: 'Brass', colorBg: '#FDE68A' },
//         { name: 'Chrome', colorBg: '#E5E7EB' },
//       ],
//     },
//   ]
  
  export default function Products() {
    
    const qry = useStaticQuery(graphql`
        query ProductsQuery {
            product: allShopifyProduct(limit: 10) {
                nodes {
                    title
                    featuredImage {
                        gatsbyImageData(width: 200, layout: CONSTRAINED)
                    }
                    priceRangeV2 {
                        min: minVariantPrice {
                            amount
                        }
                        max: maxVariantPrice {
                            amount
                        }
                    }
                    link: onlineStorePreviewUrl
                }
            }
        }
    `)


const products = qry.product.nodes
console.log(products)
    return (
      <div className="bg-white">
        <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
          <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Support the Wolfpack</h2>
            <a href="#" className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              See everything<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
  
          <div className="mt-8 relative">
            <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
              <ul
                role="list"
                className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
              >
                {products.map(function(product, index)  {

                    let price = "From $" + String(product.priceRangeV2.min.amount)
                    console.log(price)
                    return (

                    <li key={index} className="w-64 inline-flex flex-col text-center lg:w-auto">
                        <div className="group relative">
                            <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                                <GatsbyImage
                                image={product.featuredImage.gatsbyImageData}
                                alt={"shopify " + product.title }
                                imgClassName="w-full h-full object-center object-scale-down group-hover:opacity-75"
                                />
                            </div>
                            <div className="mt-6">
                                <h3 className="mt-1 font-semibold text-gray-900">
                                <a href={product.link}>
                                    <span className="absolute inset-0" />
                                    {product.title}
                                </a>
                                </h3>
                                <p className="mt-1 text-gray-900">{price}</p>
                            </div>
                        </div>
                    </li>
                    )
                })}
              </ul>
            </div>
          </div>
  
          <div className="mt-12 flex px-4 sm:hidden">
            <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              See everything<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    )
  }