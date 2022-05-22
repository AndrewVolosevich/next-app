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
//
// export const getStaticProps = async (context: any) => {
//     const {id} = context.params
//     const resp = await fetch(`https://jsonplaceholder.typicode.com/posts${id}`)
//     const data = await resp.json()
//
//     if(!data) {
//         return {
//             notFound: true
//         }
//     }
//     return {
//         props: {
//             post: data
//         }
//     }
// }

const Post = () => {
    return (
        <div>
            
        </div>
    );
};

export default Post;