import Link from 'next/link'

type LogoProps = {
    size?: "sm" | "lg"
}

export function Logo({ size = "lg" }: LogoProps) {
    return (
        <Link href="/">
            <h1 className={`${size === "lg" ? 'text-2xl' : 'text-2xl'} font-semibold`}>
                <span className="text-accent">{`<`}</span>Fabio Albiero
                <span className="text-accent">{`/>`}</span>
            </h1>
        </Link>
    )
}
