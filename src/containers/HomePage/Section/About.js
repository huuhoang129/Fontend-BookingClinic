import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';


class About extends Component {
    render() {


        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thông nói gì về khám sức khỏe thường xuyên
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/dXo3NSIIW7A" title="Đang khỏe có cần đi khám tổng quát không?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>Dù cảm thấy khỏe mạnh, bạn vẫn nên khám sức khỏe tổng quát định kỳ để phát hiện sớm các bệnh “thầm lặng” như tăng huyết áp, tiểu đường, mỡ máu hay ung thư giai đoạn đầu. Khám định kỳ giúp bác sĩ theo dõi sức khỏe toàn diện, quản lý nguy cơ bệnh tật, tư vấn điều chỉnh lối sống lành mạnh và tăng hiệu quả phòng ngừa. Đồng thời, đây cũng là cơ hội xây dựng mối quan hệ tin cậy với cơ sở y tế và duy trì thói quen kiểm tra sức khỏe mỗi 6–12 tháng.</p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
