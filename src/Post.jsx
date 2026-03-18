export default function Post({post}){

    const {title, body} = post

    return(
        <div className="card">
            <h1>{title}</h1>
            <h3>{body}</h3>
        </div>
    )
}