import React from 'react';
import stl from '../sign/SignForm.module.css';
import SignTextLabel from '../sign/SignTextLabel';
import SignTextInput from '../sign/SignTextInput';
import SignSubmitButton from '../sign/SignSubmitButton';

function RecruitWriteForm(props) {
    const {titleOnChange, feeOnChange, limitOnChange, startPointOnChange, endPointOnChange, commentOnChange, onClick} = props;
    
    return (
        <div className={stl.signFormContainer}>
            <div className={stl.signFormWrapper}>
                <div>
                    <SignTextLabel labelText = {`제목`}/>
                    <SignTextInput
                        placeHolder={`제목을 입력하세요`}
                        onChange={titleOnChange}
                    />
                </div>

                
                <div>
                    <SignTextLabel labelText = {`비용`}/>
                    <SignTextInput
                        placeHolder={`비용을 입력하세요`}
                        onChange={feeOnChange}
                    />
                </div>

                <div>
                    <SignTextLabel labelText = {`모집 인원`}/>
                    <SignTextInput
                        placeHolder={`몇명까지 태워주시나요?`}
                        onChange={limitOnChange}
                    />
                </div>

                <div>
                    <SignTextLabel labelText = {`출발 장소`}/>
                    <SignTextInput
                        placeHolder={`출발할 곳을 입력하세요`}
                        onChange={startPointOnChange}
                    />
                </div>

                <div>
                    <SignTextLabel labelText = {`도착 장소`}/>
                    <SignTextInput
                        placeHolder={`도착예정인 장소를 입력하세요`}
                        onChange={endPointOnChange}
                    />
                </div>
                
                <div>
                    <SignTextLabel labelText = {`하고싶은 말`}/>
                    <SignTextInput
                        placeHolder={`동행자에게 하고싶은 말을 적어보세요!`}
                        onChange={commentOnChange}
                    />
                </div>

                <SignSubmitButton
                    onClick={onClick}
                />
            </div>
        </div>
    );
}

export default RecruitWriteForm;