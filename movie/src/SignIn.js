function SignIn() {


    return (
        <div >
            <div className='signin'>
                <form action="" className="form" >
                    <h2 className="form__title">Sign Up</h2>
                    <input type="text" name="name" placeholder="Enter your name" />
                    <input type='text' name="password" placeholder='Enter your password' />

                    <button type="submit" className="btn">Sign Up</button>
                </form>
            </div>

        </div>
    );
}

export default SignIn;
