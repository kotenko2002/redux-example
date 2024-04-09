import { postAPI } from "../services/PostService";

const RtkPostList = () => {
    const {data: posts, isLoading, isError} = postAPI.useFetchAllPostsQuery(5);

    if(isLoading) {
        return <h3>Loading...</h3>;
    }

    if(isError) {
        return <h3>Error :\</h3>;
    }

    return ( 
        <div>
            {posts && posts.map(post => {
                return (
                    <div
                        style={{ margin: "10px", padding: "10px", border: "solid", textAlign: "left"}}
                        key={post.id}>
                            <div style={{textAlign: "center"}}><b>{post.title}</b></div>
                            <div>{post.body}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default RtkPostList;