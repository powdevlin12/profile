import React from 'react'

const Introduce = () => {
    return (
        <div className='intro'>
            <div className="intro-container">
                <p className='intro-p'>Họ và Tên : Trần Thư Đạt</p>
                <p className='intro-p'>Quê quán : Hà Tĩnh</p>
                <p className='intro-p'>Sinh năm : 2001</p>
                <p className='intro-p'>Học tại : PTIT HCM</p>
                <p className='intro-p'>Mong muốn tương lai : Full-stack developer</p>
                <p className='intro-p'>Sở thích :</p>
                <div className="intro__favourite">
                    <ul>
                        <li>
                            Code.
                        </li>
                        <li>
                            Đá bóng.
                        </li>
                        <li>
                            Tìm hiểu kinh doanh, lịch sử.
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Introduce
