export default async function PostDetailPage({params}){
    const postId = params.postId;

    await new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve( )
        },2000);
    });
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
        next: {
            revalidate: 120,
        },
    });

    const post= await response.json();

    console.log(`===== ${params.postId}`);

    return (
        <div style={{padding:"20px"}}>
          <h1>Post Details</h1>

          <div 
          style={{width:"100%",
          background: "bisque",
          padding: "10px",
          borderRaduis:"10px",
          color:"black",
          marginTop:"20px",
          }}
          
          >
            <h1> {post.title}</h1>
             
             <hr />

             <p>{post.body}</p>
          
          
          </div>
        </div>
    )
}