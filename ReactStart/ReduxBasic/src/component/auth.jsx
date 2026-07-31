import { useDispatch } from 'react-redux';
import { authActions } from './store';  // Incorrect import statement

const Auth = () => {
    const dispatch = useDispatch();
    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(authActions.login());
    };

    return (
        <main className='my-20 mx-auto max-w-md p-4 text-center bg-[#f4f0fa] rounded-md'>
            <form onSubmit={loginHandler}>
                <div className='mb-2'>
                    <label className='block mb-2 uppercase text-gray-600' htmlFor="email">Email</label>
                    <input className="block w-100 m-auto rounded-md p-1 border border-1 border-gray-300" type="email" name="email" id="email" />
                </div>
                <div>
                    <label className='block mb-2 uppercase text-gray-600' htmlFor="password">password</label>
                    <input className="block w-100 m-auto rounded-md p-1 border border-1 border-gray-300" type="password" />
                </div>
                <button type="submit">Login</button>  {/* Added type="submit" to the button */}
            </form>
        </main>
    );
};

export default Auth;
