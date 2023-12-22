import Link from "next/link";

export default function Header(){
    return(
        <header>
            <Link href={'/'}>Ecommerce</Link>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/products'}>All Products</Link>
                <Link href={'/categories'}>Categorias</Link>
                <Link href={'/account'}>Account</Link>
                <Link href={'/cart'}>Cart (0)</Link>
            </nav>
        </header>
    )
}