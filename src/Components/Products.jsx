import React from 'react'

const Products = () => {

    const products = [
        {
            id:1,
            img : 'https://images.meesho.com/images/products/391407059/gaixq_400.webp',
            name : 'Fancy Retro Men T-shirts',
            price : '₹250',
            rating : '⭐⭐⭐⭐',
            child : (<button>Buy Now</button>)
        },
        {
            id:2,
            img : 'https://images.meesho.com/images/products/368517173/jwcod_400.webp',
            name : 'Trendy latest T-shirts',
            price : '₹189',
            rating : '⭐⭐⭐',
            child : (<button>Buy Now</button>)
        },
        {
            id:3,
            img : 'https://images.meesho.com/images/products/105845217/nrcxx_400.webp',
            name : 'Urbane Women wear',
            price : '₹483',
            rating : '⭐⭐⭐⭐',
            child : (<button>Buy Now</button>)
        },
        {
            id:4,
            img : 'https://images.meesho.com/images/products/204307799/s8zxk_400.webp',
            name : 'Stylish Men Wear',
            price : '₹317',
            rating : '⭐⭐⭐⭐⭐',
            child : (<button>Buy Now</button>)
        },
        {
            id:5,
            img : 'https://images.meesho.com/images/products/354803411/voxlh_400.webp',
            name : 'Elegant Frock',
            price : '₹ 247',
            rating : '⭐⭐⭐⭐',
            child : (<button>Buy Now</button>)
        },
        {
            id:6,
            img : 'https://images.meesho.com/images/products/315833908/sb5pq_400.webp',
            name : 'Modern Fancy Frock',
            price : '₹286',
            rating : '⭐⭐⭐⭐⭐',
            child : (<button>Buy Now</button>)
        },
        {
            id:7,
            img : 'https://images.meesho.com/images/products/390353989/i4mf0_400.webp',
            name : 'Fancy Unique Jeans',
            price : '₹713',
            rating : '⭐⭐⭐',
            child : (<button>Buy Now</button>)
        },
        {
            id:8,
            img : 'https://images.meesho.com/images/products/341487295/sqcdj_400.webp',
            name : 'Urbane Ravishing',
            price : '₹599',
            rating : '⭐⭐⭐⭐⭐',
            child : (<button>Buy Now</button>)
        },
        {
            id:9,
            img : 'https://images.meesho.com/images/products/391407059/gaixq_400.webp',
            name : 'Fancy Retro Men T-shirts',
            price : '₹250',
            rating : '⭐⭐⭐⭐',
            child : (<button>Buy Now</button>)
        },
        {
            id:10,
            img : 'https://images.meesho.com/images/products/204307799/s8zxk_400.webp',
            name : 'Stylish Men Wear',
            price : '₹317',
            rating : '⭐⭐⭐⭐⭐',
            child : (<button>Buy Now</button>)
        },
        {
            id:11,
            img : 'https://images.meesho.com/images/products/368517173/jwcod_400.webp',
            name : 'Trendy latest T-shirts',
            price : '₹189',
            rating : '⭐⭐⭐',
            child : (<button>Buy Now</button>)
        },
        {
            id:6,
            img : 'https://images.meesho.com/images/products/315833908/sb5pq_400.webp',
            name : 'Modern Fancy Frock',
            price : '₹286',
            rating : '⭐⭐⭐⭐⭐',
            child : (<button>Buy Now</button>)
        },
    ]
  return (
    <div className='bg-gray-200 rounded-md'>
        <div className='flex flex-wrap gap-8 pt-8 pb-5'>
            {
                products.map((image)=>{
                    return(
                        <div
                        key={image}                      
                        className='w-[300px] h-[350px] rounded-xl bg-blue-200 shadow-md mt-5 ml-10 overflow-hidden'>
                        <img className='w-[330px] h-[250px] hover:scale-105 duration-300' src={image.img}></img>
                            <div className='flex justify-between m-3 text-slate-700 font-semibold'>
                                <div>
                                    <p className=''>{image.name}</p>
                                    <p>{image.price}</p>
                                </div>
                                <div>
                                    <p>{image.rating}</p>
                                </div>
                            </div>
                            <div className='absolute ml-28 px-3 flex justify-center bg-yellow-400 text-white rounded-xl'>
                                <button>{image.child}</button>
                            </div>          
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Products