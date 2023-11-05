import React, { useEffect, useState } from 'react';
import md5 from 'md5';
import { Avatar, Space, Dropdown, Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';

function _getLocalUserInfo() {
    try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        return userInfo;
    } catch (err) {
        console.log(err);
        return null;
    }
}


function _getAvatarUrl() {
    const userInfo = _getLocalUserInfo()
    return `https://www.gravatar.com/avatar/${md5(userInfo ? userInfo.email : 'user@mail.com')}?d=identicon`;
}

const NavbarAvatar = ({ handleLogout }) => {
    const [userInfo, setUserInfo] = useState({ email: '', firstName: '' });

    useEffect(() => {
        const userInfo = _getLocalUserInfo();
        if(userInfo){
            setUserInfo({ email: userInfo.email, firstName: userInfo.firstName });
        }else{
            setUserInfo({ email: '', firstName: 'guest' });
        }
    }, []);

    const dropdownItems = [
        {
            key: '1',
            label: (
                <Button 
                    onClick={handleLogout}
                    type="primary"
                    style={{ background: "#c1b65a", borderColor: "#c1b65a" }}
                >
                        Logout
                </Button>
            )
        }
    ]

    return (
        <Dropdown menu={{ items: dropdownItems }} trigger={['click']}>
            <Space className='avatar-border'>
                <Avatar src={_getAvatarUrl()} />
                {userInfo.firstName}
                <ArrowDownOutlined/>
            </Space>
        </Dropdown>
    );
}
 
export default NavbarAvatar;