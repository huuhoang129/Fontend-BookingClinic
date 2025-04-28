import React, { Component } from 'react';
import { connect } from "react-redux";
import moment, { lang } from 'moment';
import 'moment/locale/vi';
import { LANGUAGES } from '../../../utils';
import { getScheduleDoctorByDate } from '../../../services/userService'
import './DoctorExtraInfor.scss';
import { FormattedMessage } from 'react-intl';
import { flatMap } from 'lodash';

class DoctorExtraInfor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowDetailInfor: false
        }
    }
    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }

    showHideDetailInfor = (status) => {
        this.setState({
            isShowDetailInfor: status
        })
    }


    render() {
        let { isShowDetailInfor } = this.state
        return (
            <div className='doctor-extra-infor-container'>
                <div className='content-up'>
                    <div className='text-address'>DIA CHI KHAM</div>
                    <div className='name-clinic'>Phong kham da lieu</div>
                    <div className='detail-doctor'>Hai Ba Turng - Ha Noi</div>
                </div>
                <div className='content-down'>
                    {isShowDetailInfor === false &&
                        <div className='short-infor'>
                            GIA KHAM
                            <span onClick={() => this.showHideDetailInfor(true)}>
                                Xem chi tiet
                            </span>
                        </div>
                    }
                    {isShowDetailInfor === true &&
                        <>
                            <div className='title-price'>Gia kham duoc uu tien</div>
                            <div className='detail-infor'>
                                <div className='price'>
                                    <span className='left'>Gia Kham</span>
                                    <span className='right'>200000</span>
                                </div>
                                <div className='note'>
                                    Duoc uu tien kham truoc....
                                </div>
                            </div>
                            <div className='payment'>
                                Nguoi benh......
                            </div>
                            <div className='hide-price'>
                                <span onClick={() => this.showHideDetailInfor(false)}>
                                    Xem chi tiet
                                </span>
                            </div>
                        </>
                    }

                </div>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};
const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
