import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebase/clientApp';

export default function Access() {

    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [role, setRole] = useState<string>("")

    async function databaseRef() {
        await addDoc(collection(db, "users"), {
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role
        }).then(() => {
            alert('success')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='flex items-center justify-center h-screen min-h-[100vh] flex-col gap-[30px] bg-fixed bg-center bg-cover custom-img'>
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-slate-900/50' />
            <div className='inputBox'>
                <input type="text" placeholder=' ' onChange={e => setFirstName(e.target.value)} />
                <span>First Name</span>
            </div>
            <div className='inputBox'>
                <input type="text" placeholder=' ' onChange={e => setLastName(e.target.value)} />
                <span>Last Name</span>
            </div>
            <div className='inputBox'>
                <input type="text" placeholder=' ' onChange={e => setEmail(e.target.value)} />
                <span>Email</span>
            </div>
            <div className='z-10'>
                <div>
                    <span className='text-white font-semibold ml-[2px]'>I am an...</span>
                </div>
                <select name="role" id="role" className='selectBox' onChange={e => setRole(e.target.value)}>
                    <option value="artist">Artist</option>
                    <option value="investor">Investor</option>
                </select>
            </div>
            <div className='z-10'>
                <input className='border px-2 py-2 text-white w-[250px] font-semibold rounded-[4px] mt-[20px]' type="submit" id="submitBtn" onClick={databaseRef} />
            </div>
        </div>
    )
}