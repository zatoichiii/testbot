import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [userName, setUserName] = useState('');
    const [userPoints, setUserPoints] = useState('');
    const [publicationType, setPublicationType] = useState('public');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            userName,
            userPoints,
            publicationType
        }
        tg.sendData(JSON.stringify(data));
    }, [userName, userPoints, publicationType, tg]) 

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg]) 

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить спасибо'
        })
    }, [tg.MainButton]) 

    useEffect(() => {
        if(!userPoints || !userName) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [userName, userPoints, tg.MainButton])

    const onChangeUserName = (e) => {
        setUserName(e.target.value)
    }

    const onChangeUserPoints = (e) => {
        setUserPoints(e.target.value)
    }

    const onChangePublicationType = (e) => {
        setPublicationType(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Кому вы хотите отдать спасибо?</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Имя'}
                value={userName}
                onChange={onChangeUserName}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Баллы'}
                value={userPoints}
                onChange={onChangeUserPoints}
            />
            <select value={publicationType} onChange={onChangePublicationType} className={'select'}>
                <option value={'public'}>Публично</option>
                <option value={'anonym'}>Анонимно</option>
            </select>
        </div>
    );
};

export default Form;