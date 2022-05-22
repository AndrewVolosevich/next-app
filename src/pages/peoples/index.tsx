import React, {useEffect, useState} from 'react';

export const getStaticProps = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()

    if(!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            peoples: data
        }
    }
}

const Peoples = ({peoples}: any) => {

    return (
        <div>
            Peoples
            <br />
            {peoples && peoples.map((people: any) => {
                return (
                    <div style={{display: 'flex'}} key={people?.id}>
                        <p>{people?.username}</p>
                        <p>{people?.email}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Peoples;