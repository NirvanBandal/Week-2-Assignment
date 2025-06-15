import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    title: 'Wireless Mouse',
    price: '₹599',
    image: 'https://imgs.search.brave.com/pYWl9YSp03zrIwMByYg1cVZ-FxEaPZwXlQrzmwZigdw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/MDczNzE2L3Bob3Rv/L21vZGVybi1zaWx2/ZXItZ3JleS1wYy1t/b3VzZS1pc29sYXRl/ZC1vbi13aGl0ZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MFF2Wjd2ZHUzUFJE/Qi1nT2cyc3NwMkRs/enBFbzJ0cXpKRHdw/TlF2XzJzWT0'
  },
  {
    id: 2,
    title: 'Bluetooth Headphones',
    price: '₹1299',
    image: 'https://imgs.search.brave.com/C3Yr-0gf_eMrzV3uGiU8DwTSQpF4_OhUdLS07iTjeCU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/NTc0MjY0OS9waG90/by93aXJlbGVzcy1l/YXJidWRzLW9yLWVh/cnBob25lcy1vbi1i/bHVlLWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWFFUXA3cmJW/NU05Uk5MTDV4VjlJ/X3JfdGVKWi1xUWJf/WHFpQld0S3YxOWM9'
  },
  {
    id: 3,
    title: 'Laptop',
    price: '₹899',
    image: 'https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.jpg?s=612x612&w=is&k=20&c=GCjKE88W8aD3LB8HTlWYbdz7NE8yiEepZ7dIbGpZ1So='
  },
  {
    id: 4,
    title: 'Smartwatch',
    price: '₹3599',
    image: ' https://media.gettyimages.com/id/519592449/photo/smart-phone-and-smart-watch-on-white-background.jpg?s=612x612&w=gi&k=20&c=xfzcIVWXVw4fzKrj7mINJlUMqiUoe8ud1GLLNnRnRGY='
  }
]

function App() {
  return (
    <div className="container">
      <h1>My Shopping Product List</h1>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}

export default App


