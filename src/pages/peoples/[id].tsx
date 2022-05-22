import React from 'react';

export const getServerSideProps = async (context: any) => {
    const {id} = context.params
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await resp.json()

    if(!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            people: data
        }
    }
}

const People = ({people}: any) => {
    const {name, email} = people;


    if (!people) {
        return <h2>No people</h2>
    }
    return (
        <div>
            <h2>People</h2>
            <div>
                <strong>Email: </strong>
                {email}
            </div>
            <div>
                <strong>Name: </strong>
                {name}
            </div>
        </div>
    );
};

export default People;