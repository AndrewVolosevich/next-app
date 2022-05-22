import React, {useEffect} from 'react';
import {useRouter} from "next/router";

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    }, [router])

    return (
        <div>
            Our custom not found  page

        </div>
    );
};

export default NotFound;