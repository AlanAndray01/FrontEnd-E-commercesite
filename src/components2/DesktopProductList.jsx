import React, { useMemo, useState } from 'react'
import { Star, ChevronUp, Grid2x2, Menu, Heart } from 'lucide-react'
import { products as mockProducts } from './mockData'

function Sidebar() {
  return (
    <aside className="w-72 p-2">
      <div className="space-y-6 sticky top-20">
        <div>
          <div className="flex justify-between">
            <h4 className="font-semibold mb-3">Category</h4>
            <ChevronUp />
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Mobile accessory</li>
            <li>Electronics</li>
            <li>Smartphones</li>
            <li>Modern tech</li>
            <li className="text-blue-600">See all</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between">
            <h4 className="font-semibold mb-3">Brands</h4>
            <ChevronUp />
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            {['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'].map((b) => (
              <label key={b} className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                <span>{b}</span>
              </label>
            ))}
            <div className="text-blue-600 mt-2">See all</div>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <h4 className="font-semibold mb-3">Features</h4>
            <ChevronUp />
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            {['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'].map((f) => (
              <label key={f} className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                <span>{f}</span>
              </label>
            ))}
            <div className="text-blue-600 mt-2">See all</div>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <h4 className="font-semibold mb-3">Price Range</h4>
            <ChevronUp />
          </div>
          <div className="space-y-2">
            <input type="range" min="0" max="1000" className="w-full accent-blue-600" />
            <div className="flex gap-2">
              <input className="w-1/2 border rounded px-2 py-1 text-sm" placeholder="Min" />
              <input className="w-1/2 border rounded px-2 py-1 text-sm" placeholder="Max" />
            </div>
            <button className="mt-2 w-full bg-white border border-gray-200 py-2 rounded text-sm">Apply</button>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <h4 className="font-semibold mb-3">Condition</h4>
            <ChevronUp />
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            {['Any', 'Refurbished', 'Brand new', 'Old items'].map((c) => (
              <label key={c} className="flex items-center gap-2">
                <input type="radio" name="condition" className="w-4 h-4 accent-blue-600" />
                <span>{c}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <h4 className="font-semibold mb-3">Ratings</h4>
            <ChevronUp />
          </div>
          <div className="space-y-2">
            {[5, 4, 3, 2].map((n) => (
              <label key={n} className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                <div className="flex items-center text-orange-400">
                  {Array.from({ length: n }).map((_, i) => (
                    <Star key={i} className="w-4 h-4" />
                  ))}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

function ProductRow({ p }) {
  const numeric = Number(p.rating) || 0
  const filled = Math.round((numeric / 10) * 5)

  return (
    <div className="relative bg-white border border-gray-200 rounded mb-4 p-4 flex gap-6 items-start">
      <img src={p.image} alt={p.name} className="w-44 h-44 object-cover rounded" />

      <div className="flex-1 pr-12">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
        </div>

        {/* Price */}
        <div className="mt-3">
          <div className="text-2xl font-bold text-gray-900">${p.price.toFixed(2)} {p.oldPrice && <span className="text-sm line-through text-gray-400 ml-2">${p.oldPrice}</span>}</div>
        </div>

        {/* Rating, orders, shipping - placed below price */}
        <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1 text-orange-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < filled ? 'text-orange-400' : 'text-gray-200'}`} />
            ))}
            <span className="ml-2 text-orange-500 font-medium">{numeric}</span>
          </div>

          <div className="text-sm text-gray-500">{p.orders} orders</div>

          {p.freeShipping && (
            <div className="text-sm text-green-600 font-semibold">Free Shipping</div>
          )}
        </div>

        {/* Description below rating/orders/shipping */}
        <p className="mt-3 text-gray-700 text-sm">{p.description}</p>

        <div className="mt-4">
          <a className="text-sm text-blue-600" href="#">View details</a>
        </div>
      </div>

      {/* wishlist heart top-right */}
      <button className="absolute top-4 right-4 w-10 h-10 rounded-md border border-gray-200 bg-white flex items-center justify-center text-blue-500 hover:text-red-500 transition-colors">
        <Heart className="w-5 h-5" />
      </button>
    </div>
  )
}

function ProductCard({ p }) {
  const filled = Math.round((Number(p.rating) || 0) / 10 * 5)
  return (
    <article className="border rounded p-4 bg-white flex flex-col h-full shadow-sm">
      <div className="mb-3">
        <div className="bg-white rounded overflow-hidden flex items-center justify-center ">
          <img src={p.image} alt={p.name} className="w-full max-h-40 max-w-30" />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-2">
            <div className="text-lg font-bold text-gray-900">${p.price.toFixed(2)}{p.oldPrice && <span className="text-sm line-through text-gray-400 ml-2">${p.oldPrice}</span>}</div>

            <button aria-label="Add to wishlist" className="w-11 h-11 rounded-md border border-gray-200 flex items-center justify-center text-blue-500 bg-white hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm mb-2" aria-hidden>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < filled ? 'text-orange-400' : 'text-gray-200'}`} />
              ))}
            </div>
            <div className="text-sm text-orange-500 font-medium">{p.rating}</div>
            <span className="sr-only">{filled} out of 5 stars</span>
          </div>

          <div className="text-sm text-gray-700 line-clamp-2">{p.name}</div>
        </div>
      </div>
    </article>
  )
}

const DesktopProductList = () => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [view, setView] = useState('grid') // 'grid' | 'list'

  const total = mockProducts.length
  const totalPages = Math.max(1, Math.ceil(total / perPage))

  const currentProducts = useMemo(() => {
    const start = (page - 1) * perPage
    return mockProducts.slice(start, start + perPage)
  }, [page, perPage])

  const goTo = (p) => setPage(Math.max(1, Math.min(totalPages, p)))

  return (
    <div className="hidden lg:block max-w-8xl bg-teal-50 px-16 py-6">
      <div className="grid grid-cols-[280px_1fr] gap-6">
        {/* Left - Sidebar with categories/filters */}
        <Sidebar />

        {/* Right - Products list */}
        <main>
          {/* Top bar */}
          <div className="flex bg-white p-2 items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="text-md font-semibold text-gray-600">{total.toLocaleString()} items in <span className="font-medium">Mobile accessory</span></div>
            </div>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" /> Verified only
              </label>
              <select className="border rounded px-3 py-2 text-sm">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
              </select>

              <div className="flex items-center border rounded">
                <button
                  onClick={() => { setView('grid'); setPerPage(6); setPage(1) }}
                  aria-pressed={view === 'grid'}
                  className={`p-2 ${view === 'grid' ? 'bg-gray-100 text-gray-800' : 'text-gray-500'}`}
                >
                  <Grid2x2 />
                </button>
                <button
                  onClick={() => { setView('list'); setPerPage(10); setPage(1) }}
                  aria-pressed={view === 'list'}
                  className={`p-2 ${view === 'list' ? 'bg-gray-100 text-gray-800' : 'text-gray-500'}`}
                >
                  <Menu />
                </button>
              </div>
            </div>
          </div>

          {/* Product rows / grid */}
          <div>
            {view === 'list' ? (
              <div>
                {currentProducts.map((p) => (
                  <ProductRow key={p.id} p={p} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-6">
                {currentProducts.map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <div />

            <div className="flex items-center gap-4">
              <div className="flex items-center p-1 rounded-md bg-white border border-gray-200">
                <label className="text-sm font-semibold text-gray-900">Show</label>
                <select
                  value={perPage}
                  onChange={(e) => {
                    const v = Number(e.target.value) || 10
                    setPerPage(v)
                    setPage(1)
                  }}
                  className=" px-2 py-1 text-sm"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => goTo(page - 1)}
                  disabled={page <= 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >&lt;</button>

                {(() => {
                  // show a 3-page window around current page (or fewer if totalPages < 3)
                  const pages = []
                  if (totalPages <= 3) {
                    for (let i = 1; i <= totalPages; i++) pages.push(i)
                  } else {
                    let start = Math.max(1, page - 1)
                    let end = Math.min(totalPages, start + 2)
                    if (end - start < 2) start = Math.max(1, end - 2)
                    for (let i = start; i <= end; i++) pages.push(i)
                  }
                  return pages.map((p) => (
                    <button
                      key={p}
                      onClick={() => goTo(p)}
                      className={`px-3 py-1 text-sm border rounded ${p === page ? 'bg-gray-100 border-gray-300 font-semibold' : 'bg-white border-gray-200'}`}
                    >
                      {p}
                    </button>
                  ))
                })()}

                <button
                  onClick={() => goTo(page + 1)}
                  disabled={page >= totalPages}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >&gt;</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DesktopProductList
