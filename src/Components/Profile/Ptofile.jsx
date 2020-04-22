import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const ProfileComp = () => {
    return (
        <div>
            <div className={s.head}>
                <img src='https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'/>
            </div>
            <div className={s.avatar}>
                <img src='https://www.designwizard.com/wp-content/uploads/2019/04/2283368685_f00b0b33f6_b.jpg'/>
            </div>
            <MyPosts/>
        </div>
    );
}

export default ProfileComp