import React,{useState} from 'react';
import AppLayout from '../components/Applayout';
import Head from 'next/head';
import { Form, Input,Checkbox,Button } from 'antd';

const Signup = () =>{
    const [id,setId] = useState('');
    const [nick,setNIck] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setpasswordCheck] =useState('');
    const [term, setTerm] = useState('');
    
    const onSubmit = () =>{

    }
    const onChangeId = (e) =>{
        setId(e.target.value);
    }
    const onChangeNick = (e) =>{
        setNick(e.target.value);
    }
    const onChangePassword = (e) =>{
        setPassword(e.target.value);
    }
    const onChangePasswordChk = (e) =>{
        setPasswordCheck(e.target.value);
    }
    const onChangeTerm = (e) =>{
        setTerm(e.target.value);
    }
    return(
        <>
            <Head>
                <title>Nodebird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                <Form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br/>
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                    </div>
                    <div>
                    <label htmlFor="user-nick">닉네임</label>
                        <br/>
                        <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                    </div>
                    <div>
                    <label htmlFor="user-password">비밀번호</label>
                        <br/>
                        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                    </div>
                    <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                        <br/>
                        <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordChk} />
                    </div>
                    <div>
                        <Checkbox name="user-term" value={term} onChange={onChangeTerm}>ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ동의합니다.</Checkbox>
                    </div>
                    <div>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>

            </AppLayout>
        </>
    )
}

export default Signup;