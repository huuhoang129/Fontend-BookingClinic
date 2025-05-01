import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import './ManagePatient.scss'
import DatePicker from '../../../components/Input/DatePicker';
import { getAllPatientForDoctor } from '../../../services/userService';
import moment from 'moment';

class ManagePatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment(new Date()).startOf('day').valueOf(),
            dataPatient: [],
        }
    }
    async componentDidMount() {
        let { user } = this.props;
        let { currentDate } = this.state;
        let formattedDate = new Date(currentDate).getTime();
        this.getDataPatient(user, formattedDate);
    }

    getDataPatient = async (user, formattedDate) => {
        console.log('Check user:', user);
        console.log('Check formattedDate:', formattedDate);
        let res = await getAllPatientForDoctor({
            doctorId: user.id,
            date: formattedDate
        })
        console.log('Check res:', res);
        if (res && res.errCode === 0) {
            this.setState({
                dataPatient: res.data
            })
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }

    }

    handleOnChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        }, () => {
            let { user } = this.props;
            let { currentDate } = this.state;
            let formattedDate = new Date(currentDate).getTime();
            this.getDataPatient(user, formattedDate)
        })
    }

    handleBtnConfirm = () => {

    }

    handleBtnRemedy = () => {

    }

    render() {
        let { dataPatient } = this.state
        return (
            <div className='manage-patient-container'>
                <div className='m-p-title'>
                    Quan ly benh nhan kham benh
                </div>
                <div className='manage-patient-body row'>
                    <div className='col-4 form-group'>
                        <label>Chon ngay kham benh</label>
                        <DatePicker
                            onChange={this.handleOnChangeDatePicker}
                            className='form-control'
                            value={this.state.currentDate}
                        />
                    </div>
                    <div className='col-12 table-manage-patient'>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <th>STT</th>
                                    <th>Thoi Gian</th>
                                    <th>Ho va Ten</th>
                                    <th>Dia chi</th>
                                    <th>Gioi tinh</th>
                                    <th>Actions</th>
                                </tr>
                                {dataPatient && dataPatient.length > 0 ? (
                                    dataPatient.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.timeTypeDataPatient?.valueVi || ''}</td>
                                            <td>{item.patientData?.firstName || ''}</td>
                                            <td>{item.patientData?.address || ''}</td>
                                            <td>{item.patientData?.genderData?.valueVi || ''}</td>
                                            <td>
                                                <button className='mp-btn-confirm' onClick={() => this.handleBtnConfirm()}>
                                                    Xac nhan
                                                </button>
                                                <button className='mp-btn-remedy' onClick={() => this.handleBtnRemedy()}>
                                                    Gui hoa don
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" style={{ textAlign: 'center' }}>
                                            No data
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        user: state.user.userInfo,
    };
};
const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagePatient);
