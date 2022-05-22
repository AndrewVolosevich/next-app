import React from 'react';

// export const getStaticPath = async () => {
//     const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const data = await resp.json()
//
//     const paths = data.map(({id}: any) => ({
//         params: {id: id.toString()}
//     }))
//
//     return {
//         paths,
//         fallback: false
//     }
// }

const Posts = () => {
    return (
        <div>
            Posts
        </div>
    );
};

export default Posts;