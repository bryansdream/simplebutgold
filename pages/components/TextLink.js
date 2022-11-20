import Link from "next/link";

export default function TextLink(props) {
    return(
        <Link href={props.url}>
        <div className="font-light mt-1.5 underline-offset-4 text-white">
            <p>{props.title}<span className="font-bold">{props.span}</span></p>
        </div>
        </Link>
    )
}