import React from 'react'

const Contact = () => {
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        alert("Đã ghi nhận thông tin");
    }
    return (
        <>
            <form className='form__contact' action="#" onSubmit={handleSubmit}>
                <h1>Form Thông Tin</h1>
                <div className="form_input">
                    <i class='bx bxl-facebook-circle'></i>
                    <input type="text" id="fb" name="fb" required />
                </div>
                <div className="form_input">
                <i class='bx bxl-gmail' ></i>  
                    <input type="text" id="gm" name="gm" required />
                </div>
                <div className="form_input">
                <i class='bx bxs-phone'></i>
                    <input type="number" id="phone" name="phone" required />
                </div>
                <button className='avatar-contact'>Submit</button>
            </form>
        </>
    )
}

export default Contact
