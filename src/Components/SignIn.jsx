import React from 'react';

const SignIn = () => {
  return (
    <section className="h-full bg-white">
      <div className="container h-full px-10 py-5">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full max-w-md">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 w-full">
                  <div className="md:mx-6 md:px-12">
                    {/* Logo */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-10 mt-1  text-xl font-semibold">
                        We are The Lotus Team
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4 text-center text-lg">Please login to your account</p>

                      {/* Username input */}
                      <div className="mb-4">
                        <input
                          type="text"
                          placeholder="Username"
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                        />
                      </div>

                      {/* Password input */}
                      <div className="mb-4">
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
                        />
                      </div>

                      {/* Submit button */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                          type="button"
                        >
                          Log in
                        </button>
                        <a href="#!" className="text-sm">Forgot password?</a>
                      </div>

                      {/* Register button */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block hover:text-black rounded border-2 border-danger px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:bg-gray-200 hover:text-danger-600 focus:outline-none focus:ring-0"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
