import React from 'react';
import AppLayout from '../components/Applayout';
import Head from 'next/head';
const Signup = () =>{
    return(
        <>
            <Head>
                <title>Nodebird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                <div>
                    회원가입
                </div>
            </AppLayout>
        </>
    )
}

export default Signup;