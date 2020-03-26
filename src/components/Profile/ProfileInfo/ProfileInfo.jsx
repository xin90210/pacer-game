import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.descriptionBlock}>
                <p>Кот в сапогах</p>
            </div>
            <div>
                <img src='https://24smi.org/public/media/258x320/person/2018/02/09/kseckkgybj5s-kot-v-sapogakh.jpg'/>
            </div>
        </div>
    )
}

export default ProfileInfo;