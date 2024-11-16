"use client";
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks'; // Assuming hooks are configured for typing
import { admin_login } from '@/lib/slice/AuthSlice';

const AdminPage = () => {

    const [userMes, setUser] = useState([]);
    console.log(userMes);
    
    const dispatch = useAppDispatch();
    const { user, loading, error } = useAppSelector((state) => state?.auth);

    // Update userMes whenever user changes
    useEffect(() => {
        if (user) {
            setUser(user); // Updates state when user changes
        }
    }, [user]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(admin_login({ email, password }));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Page</h1>

            <form
                onSubmit={handleLogin}
                className="bg-gray-100 p-6 rounded shadow-md max-w-md mx-auto"
            >
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>

            {error && (
                <p className="text-red-500 mt-4">Error: {error}</p>
            )}

            {user && (
                <div className="mt-4">
                    <h2 className="text-xl font-bold">{JSON.stringify(userMes)}</h2>
                    {/* Add more user details here */}
                </div>
            )}
        </div>
    );
};

export default AdminPage;
