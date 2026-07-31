import { useDispatch, useSelector } from "react-redux";  // Missing semicolon
import { authActions } from "./store";  // Incorrect import statement

const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const logoutHandler = () => dispatch(authActions.logout());  // `authAction` is not correctly imported

    return (
        <header className="flex w-[100%] h-20 content-between items-center bg-[#3c0080] py-0 px-[10%] text-white">
            <h1>Redux Auth</h1>
            {isAuth && (
                <nav>
                    <ul className="flex list-none m-0 p-0 items-center">
                        <li className="my-0 mx-4">
                            <a className="text-white text-base no-underline hover:text-purple-700 active:text-purple-700" href="/">My Product</a>
                        </li>
                        <li className="my-0 mx-4">
                            <a className="text-white text-base no-underline hover:text-purple-700 active:text-purple-700" href="/">My Sales</a>
                        </li>
                        <li className="my-0 mx-4">
                            <button className="text-base bg-yellow-400 border border-yellow-400 py-2 px-6 shadow-md text-gray-900 hover:text-[#ffa600] active:text-[#ffa600]" onClick={logoutHandler}>LogOut</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
